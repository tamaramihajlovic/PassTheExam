#pragma checksum "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "84140bdb1f44542dccd5547604b70b31744d697c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(RIIEdition.Pages.AdminPages.Pages_AdminPages_ListRoles), @"mvc.1.0.razor-page", @"/Pages/AdminPages/ListRoles.cshtml")]
namespace RIIEdition.Pages.AdminPages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\_ViewImports.cshtml"
using RIIEdition;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\_ViewImports.cshtml"
using RIIEdition.Data;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"84140bdb1f44542dccd5547604b70b31744d697c", @"/Pages/AdminPages/ListRoles.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d32c4884ac230920c6ab95877ba26dc99789ba89", @"/Pages/_ViewImports.cshtml")]
    public class Pages_AdminPages_ListRoles : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-primary mb-3"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-page", "/AdminPages/CreateRole", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-primary"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-page", "/AdminPages/EditRole", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<h1>Sve uloge u nasoj aplikaciji</h1>\r\n");
#nullable restore
#line 6 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
 if(Model.Roles.Any())
{

#line default
#line hidden
#nullable disable
            WriteLiteral("      ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "84140bdb1f44542dccd5547604b70b31744d697c5190", async() => {
                WriteLiteral("Dodaj ulogu");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Page = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
#nullable restore
#line 9 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
     foreach(var role in Model.Roles)
     {

#line default
#line hidden
#nullable disable
            WriteLiteral("         <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Role Id: ");
#nullable restore
#line 12 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
                                         Write(role.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n            <div class=\"card-body\"><h5 class=\"card-title\">Role Name:");
#nullable restore
#line 13 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
                                                               Write(role.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h5></div>\r\n            <div class=\"card-footer\">\r\n                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "84140bdb1f44542dccd5547604b70b31744d697c7603", async() => {
                WriteLiteral("Azuriraj");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Page = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            if (__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues == null)
            {
                throw new InvalidOperationException(InvalidTagHelperIndexerAssignment("asp-route-id", "Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper", "RouteValues"));
            }
            BeginWriteTagHelperAttribute();
#nullable restore
#line 15 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
                                                                             WriteLiteral(role.Id);

#line default
#line hidden
#nullable disable
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"] = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-route-id", __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"], global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                <a class=\"btn btn-danger\">Izbrisi</a>\r\n            </div>\r\n\r\n         </div>\r\n");
#nullable restore
#line 20 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
     }
}
else
{

#line default
#line hidden
#nullable disable
            WriteLiteral("    <div class=\"card\">\r\n        <div class=\"card-header\">Nije dodata nijedna priviligija</div>\r\n        <div class=\"card-body\">\r\n           <h5 class=\"card-title\">Koristite dugme dole da dodate ulogu</h5>\r\n           ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "84140bdb1f44542dccd5547604b70b31744d697c10534", async() => {
                WriteLiteral("Dodaj ulogu");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Page = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n        </div>\r\n\r\n    </div>\r\n");
#nullable restore
#line 32 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\AdminPages\ListRoles.cshtml"
}

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<RIIEdition.Pages.AdminPages.ListRolesModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<RIIEdition.Pages.AdminPages.ListRolesModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<RIIEdition.Pages.AdminPages.ListRolesModel>)PageContext?.ViewData;
        public RIIEdition.Pages.AdminPages.ListRolesModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
