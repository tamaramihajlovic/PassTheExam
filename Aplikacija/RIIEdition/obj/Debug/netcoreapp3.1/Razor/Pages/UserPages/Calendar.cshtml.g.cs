#pragma checksum "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7cf3d05c16a1735c1bc582d40752651da06d2d00"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(RIIEdition.Pages.UserPages.Pages_UserPages_Calendar), @"mvc.1.0.razor-page", @"/Pages/UserPages/Calendar.cshtml")]
namespace RIIEdition.Pages.UserPages
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7cf3d05c16a1735c1bc582d40752651da06d2d00", @"/Pages/UserPages/Calendar.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5864c0ca72ee7665f6460b7d9865f29869a94c06", @"/Pages/_ViewImports.cshtml")]
    public class Pages_UserPages_Calendar : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/login.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/calendar.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "_HeaderPartial", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("name", "_ScriptsPartial", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("bgKalendar"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
  
    string [] meseci={"Januar","Februar","Mart","April","Maj","Jun","Jul",
    "Avgust","September","Oktobar","Novembar","Decembar"};
    string [] dani={"PO","UT","SR","CE","PE","SU","NE"};
  int [] pocetniDani={2,5,6,2,4,0,2,5,1,3,6,1};
    int [] brojRedova={5,5,6,5,5,5,5,6,5,5,6,5};
    
    

#line default
#line hidden
#nullable disable
            DefineSection("css", async() => {
                WriteLiteral("\r\n      ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "7cf3d05c16a1735c1bc582d40752651da06d2d006415", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
            }
            );
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7cf3d05c16a1735c1bc582d40752651da06d2d007714", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
            }
            );
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7cf3d05c16a1735c1bc582d40752651da06d2d008871", async() => {
                WriteLiteral("\r\n  ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "7cf3d05c16a1735c1bc582d40752651da06d2d009131", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = (string)__tagHelperAttribute_3.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    <div class=\"container h-100\">\r\n        <main role=\"main\" class=\"h-100\" >\r\n");
#nullable restore
#line 25 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
             for(int i=0;i<meseci.Length;i++)
             {
                 

#line default
#line hidden
#nullable disable
                WriteLiteral("          <div class=\" calendar\"");
                BeginWriteAttribute("id", " id=\"", 773, "\"", 788, 1);
#nullable restore
#line 28 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
WriteAttributeValue("", 778, meseci[i], 778, 10, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(">\r\n              \r\n            <div  class=\"gornjiKalendar\">\r\n                     <div class=\"calendarDiv\">\r\n                         <span class=\"fa fa-arrow-circle-left m-3\" onclick=\"promeniUlevo()\"> </span>  <span>");
#nullable restore
#line 32 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                                                                                                       Write(meseci[i]);

#line default
#line hidden
#nullable disable
                WriteLiteral("</span> \r\n                        <span class=\"fa fa-arrow-circle-right m-3\" onclick=\"promeniUdesno()\"> </span>\r\n                     </div>\r\n                     <hr class=\"hrar1\">\r\n                     <div class=\"dani\">\r\n");
#nullable restore
#line 37 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                          for(int j=0;j<7;j++)
                        {


#line default
#line hidden
#nullable disable
                WriteLiteral("                            <div class=\"daniKolona\">\r\n");
#nullable restore
#line 41 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                                 for(int k=0;k<brojRedova[i]+1;k++)
                            {

                                
                              

#line default
#line hidden
#nullable disable
#nullable restore
#line 45 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                               if(k==0)
                              {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                  <span class=\"mt-1 mb-1\">");
#nullable restore
#line 47 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                                                     Write(dani[j]);

#line default
#line hidden
#nullable disable
                WriteLiteral("</span>\r\n");
#nullable restore
#line 48 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                              }
                             else if(k==1)
                             {
                                 if(j<pocetniDani[i])
                                 {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                     <span class=\"mt-1 mb-1\">&nbsp</span>\r\n");
#nullable restore
#line 54 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                                 }
                                 else
                                 {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                     <span class=\"spanHover mt-1 mb-1 \"");
                BeginWriteAttribute("id", " id=\"", 2114, "\"", 2130, 2);
#nullable restore
#line 57 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
WriteAttributeValue("", 2119, meseci[i], 2119, 10, false);

#line default
#line hidden
#nullable disable
                WriteAttributeValue("", 2129, "_", 2129, 1, true);
                EndWriteAttribute();
                WriteLiteral(" onclick=\"dodajEvent(event)\"></span>\r\n");
#nullable restore
#line 58 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                                 }
                             }
                              else
                              {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                  <span class=\"spanHover mt-1 mb-1\" id=\"meseci[i]_\" onclick=\"dodajEvent(event)\"></span>\r\n");
#nullable restore
#line 63 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                                  
                              }

#line default
#line hidden
#nullable disable
#nullable restore
#line 64 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                               
                                }

#line default
#line hidden
#nullable disable
                WriteLiteral("                            </div>\r\n");
#nullable restore
#line 67 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
                        }

#line default
#line hidden
#nullable disable
                WriteLiteral(@"                     </div>
                     
                    
                     
            </div>
         
                 <div class=""donjiKalendar container"">
                    
                     
                     
                         <div class=""row justify-content-between p-2"">
                         <div class="" display-4 timer align-text-bottom  text-white""></div>
                         <h2 class=""text-center text-white""></h2>
                         </div>
                          <hr class=""hrar"">
                        <div class=""d-flex justify-content-between mb-2 p-1""> 
                        <div>
                        <button class=""btn btn-success""><span class=""fa fa-pencil""></span></button>
                         <button class=""btn btn-success text-white""><span class=""fa fa-male mr-2""></span>Obaveze</button>
                         </div>
                        
                        </div>
                         
         ");
                WriteLiteral(@"                 
                         
                          
                         
                           
                           
                     
                    
                 </div>    
                 
          
     
          </div>
");
#nullable restore
#line 104 "D:\Elektronski_fakultet\Bitbucket_Repository\si.20.45.pass_the_exam_rii_edition\Aplikacija\RIIEdition\Pages\UserPages\Calendar.cshtml"
          
             }

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n</div>\r\n        </main>\r\n    </div>\r\n");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "7cf3d05c16a1735c1bc582d40752651da06d2d0018136", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = (string)__tagHelperAttribute_4.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public SignInManager<User> signInManager { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<RIIEdition.Pages.UserPages.CalendarModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<RIIEdition.Pages.UserPages.CalendarModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<RIIEdition.Pages.UserPages.CalendarModel>)PageContext?.ViewData;
        public RIIEdition.Pages.UserPages.CalendarModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
