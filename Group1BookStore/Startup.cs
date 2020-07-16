using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Group1BookStore.Data;
using Group1BookStore.Data.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace Group1BookStore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DataContext")));

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "clientapp";

            });

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<DataContext>()
                .AddDefaultTokenProviders();

            /*
                Cookie Settings
                    Cookie is only good for 5 minutes.
                    Password must have at least 6 characters and 1- Capital letter, lowercase letter, number, special characer.
                    Http status code: 403- user is unauthorized to perform action.
                    Http status code: 401- unable to log user in.
             */
             services.Configure<IdentityOptions>(options =>
             {
                // Password settings.
                options.Password.RequireDigit = true;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 6;
                options.Password.RequiredUniqueChars = 1;

                // Lockout settings.
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // User settings.
                options.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = false;
            });

            services.ConfigureApplicationCookie(options =>
            {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

                options.LoginPath = "/api/authentication/login";
                options.AccessDeniedPath = "/swagger";
                options.SlidingExpiration = true;

                options.Events.OnRedirectToAccessDenied = context =>
                {
                    context.Response.StatusCode = 403;
                    return Task.CompletedTask;
                };

                options.Events.OnRedirectToLogin = context =>
                {
                    context.Response.StatusCode = 401;
                    return Task.CompletedTask;
                };

            });

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options => Configuration.Bind("CookieSettings", options));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Bookstore API", Version = "v1"});
            });

        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            MigrateDb(app);
            SeedData(app);
            AddRoles(app).GetAwaiter().GetResult();
            AddUsers(app).GetAwaiter().GetResult();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSpaStaticFiles();

            app.UseHttpsRedirection();

            app.UseSwagger();

            app.UseSwaggerUI( c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "clientapp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }

            });
        }

        private static void SeedData(IApplicationBuilder app)
        {

            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                if (context.Set<Book>().Any())
                {
                    return;
                }
                context.Set<Book>().Add(new Book { Title = "Harry Potter and the Chamber of Secrets", Author = " J. K. Rowling" , Price = 13.99 });
                context.Set<Book>().Add(new Book { Title = "Percy Jackson and the Olympians: The Lightning Thief", Author = "Rick Riordan", Price = 10.99 });
                context.Set<Book>().Add(new Book { Title = "The Adventures of Sherlock Holmes", Author = "Arthur Canon Doyle", Price = 11.99 });
                context.SaveChanges();
            }
        }

            private static async Task AddRoles(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var roleManager = serviceScope.ServiceProvider.GetService<RoleManager<Role>>();
                if (roleManager.Roles.Any())
                {
                    return;
                }

                await roleManager.CreateAsync(new Role {Name = Roles.Admin});
                await roleManager.CreateAsync(new Role {Name = Roles.Customer});
                await roleManager.CreateAsync(new Role {Name = Roles.Manager});
                await roleManager.CreateAsync(new Role {Name = Roles.Employee});
            }
        }

        private static async Task AddUsers(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                if (userManager.Users.Any())
                {
                    return;
                }

                await CreateUser(userManager, "admin", Roles.Admin);
                await CreateUser(userManager, "customer", Roles.Customer);
                await CreateUser(userManager, "manager", Roles.Manager);
                await CreateUser(userManager, "employee", Roles.Employee);
            }
        }

        private static async Task CreateUser(UserManager<User> userManager, string username, string role)
        {
            const string passwordForEveryone = "Password123!";
            var user = new User {UserName = username };
            await userManager.CreateAsync(user, passwordForEveryone);
            await userManager.AddToRoleAsync(user, role);
        }

        private static void MigrateDb(IApplicationBuilder app)
        {
            using(var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                context.Database.Migrate();
            }
        }
    }
}
