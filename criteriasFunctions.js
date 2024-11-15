
 // 13 jes-media
 function getCriterias() {
  return [
    {
      fn: (record) =>
        record["h_Country"] === "DK"&&
        record["h_Industry1"].includes("Wholesale and retail trade; repair of motor vehicles and motorcycles") &&
        record["h_NOfEmployees"] >= 20 && record["h_NOfEmployees"] <= 80,
      label: "Country = DK + Top Selected industry + FTE range: 20 - 80",
    },
    // {
    //   fn: (record) => 
    //     record["h_IsEcommerce"] == "FALSE",
    //   label: "Is not eCommerce",
    // },
    {
      fn: (record) => 
        record["merged"] == "FALSE", // maybe need to use h_IsEcommerce
      label: "Is not eCommerce",
    },
    {
      fn: (record) =>
        record["h_Industry3"].toLowerCase("Retail sale of other household equipment in specialised stores") ||
        record["h_Industry3"].includes("47.5"),
      label: "In selected sub-industry",
    }, 
    {
      fn: (record) =>
        record["h_HasMarketingDepartment"].includes("TRUE"),
      label: "Has Marketing Department",
    },
    {
      fn: (record) =>
        record["HasGoogleAdsOrFacebookAds"] .includes("TRUE")||
         record["h_HasFbOrGoogle"] .includes("TRUE"),
        label: "Has Ads Platform: Google|Meta",
    },   

  ];
}


// //12 Store Pit 
// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK" && 
//       record["h_Industry1"].includes("Wholesale and retail trade; repair of motor vehicles and motorcycles"),
//       label: "Country = Denmark + In selected industry",
//     },
//     {
//       fn: (record) =>
//         record["h_NoOfEmployees"] >= 5 &&
//         record["h_NoOfEmployees"] <= 60, 
//       label: "No of Employees > 5 < 60",
//     },
//     {
//       fn: (record) => //46.40 - 47.91
//       (
//         record["h_Industry3"].toLowerCase() === "wholesale of household goods" ||
//         record["h_Industry3"].toLowerCase() === "retail trade not in stores, stalls or markets" ||
//         record["h_Industry2"].toLowerCase() === "retail trade, except of motor vehicles and motorcycles" ||
//         record["h_Industry2"].toLowerCase() === "wholesale trade, except of motor vehicles and motorcycles" 
      
//       ),
//       label: "In selected sub-industries",
//     },
//     {
//       fn: (record) =>
//       (
//         record["h_IsGoogleAds"].toLowerCase() === "true" ||
//         record["h_IsFacebookAds"].toLowerCase() === "true" ||
//         record["h_IsLinkedInAds"].toLowerCase() === "true" 
//       ),
//       label: "Has Ads Platform: Google | Meta | LinkedIn ",
//     },
//     {
//       fn: (record) => record["h_IsEcommerce"].toLowerCase() === "true", 
//       label: "Is eCommerce",
//     },
//   ];
// }


// //11
// function getCriterias() {
//   return [
//     {
//       fn: (record) =>
//         record["h_Country"] === "DK" &&
//         record["h_Industry1"].includes("Wholesale and retail trade; repair of motor vehicles and motorcycles") &&
//         record["h_NoOfEmployees"] >= 5 || record["h_NoOfEmployees"] <= null||
//          record["h_fin_2PYGrossProfit"] >= 1000000,
//       label: "Country = DK + Top Selected industry + FTE >5"
//     },
//     {
//       fn: (record) => record["h_fin_2PYGrossProfit"] >= 285608, // converted to USD (2M DKK)
//       label: "Gross profit +2M DKK",
//     },
//     {
//       fn: (record) =>
//         record["h_Industry3"].includes("Wholesale of household goods") ||
//         record["h_Industry3"].includes("Retail sale in non-specialised stores"),
//        label: "In selected sub-industries",
//     },
//     {
//       fn: (record) =>
//         record["h_IsGoogleAds"] .toLowerCase() == "true" ||
//         record["h_IsFacebookAds"].toLowerCase() == "true",
//       label: "Has Ads Platform: Google | Meta",
//     },
//         {
//       fn: (record) => 
//         record["h_IsEcommerce"].toLowerCase() == "true",
//       label: "Is eCommerce",
//     },
//     {
//       fn: (record) =>
//         record["h_IsShopify"].toLowerCase() == "true" ||
//         record["h_IsMagento"].toLowerCase() == "true" ||
//         record["h_IsWooCommerce"].toLowerCase() == "true" ||
//         record["h_IsWordpress"].toLowerCase() == "true" ||
//         record["h_IsPrestaShop"].toLowerCase() == "true",
//       label: "eCommerce CMS: Shopify, Magento, Woocommerce, Prestashop, Wordpress",
//     },
//   ]}



//  // 10 jes-media
//  function getCriterias() {
//   return [
//     {
//       fn: (record) =>
//         record["h_Country"] === "DK" &&
//         record["h_Industry1"].toLowerCase("Wholesale and retail trade") &&
//         record["h_NOfEmployees"] >= 20 && record["h_NOfEmployees"] <= 80,
//       label: "Country = DK + Top Selected industry + FTE range: 20 - 80",
//     },

//     {
//       fn: (record) => record["h_IsEcommerce"] !== "TRUE",
//       label: "Is not eCommerce",
//     },
//     {
//       fn: (record) =>
//         record["h_Industry3"].toLowerCase("Retail sale of other household equipment in specialised stores") ||
//         record["h_Industry3"].includes("47.5"),
//       label: "In selected sub-industry",
//     }, 
//     {
//       fn: (record) =>
//         record["h_HasMarketingDepartment"].includes("TRUE"),
//       label: "Has Marketing Department",
//     },
//     {
//       fn: (record) =>
//         record["h_HasFbOrGoogle"] .includes("TRUE")||
//          record["HasGoogleAdsOrFacebookAds"] .includes("TRUE"),
//         label: "Has Ads Platform: Google|Meta",
//     },   

//   ];
// }



// // 009 Wemarket

// function getCriterias() {
//   return [
//     {
//       fn: (record) =>
//         record["h_Country"] === "DK" &&
//         record["h_Industry1"].includes("Wholesale and retail trade"),
//       label: "Country = Denmark + In selected industry",
//     },
//     {
//       fn: (record) => record["h_NoOfEmployees"] >= 25,
//       label: "No of Employees +25",
//     },
//     {
//       fn: (record) =>
//         record["h_Industry2"].includes("Wholesale trade, except of motor vehicles and motorcycles") ||
//         record["h_Industry2"].includes("Retail trade, except of motor vehicles and motorcycles") ||
//         record["h_Industry3"].includes("Repair of fabricated metal products, machinery and equipment") ||
//         record["h_Industry3"].includes("Retail sale of information and communication equipment in specialised stores") ||
//         record["h_Industry3"].includes("Wholesale of other machinery, equipment and supplies") ||
//         record["h_Industry3"].includes("Wholesale of information and communication equipment"),
//       label: "In selected sub-industries",
//     },

//     {
//       fn: (record) => record["h_fin_2PYGrossProfit"] >= 1439275, // converted to USD (10M DKK)
//       label: "Gross profit +10M DKK",
//     },

//     {
//       fn: (record) =>
//         record["h_TopCountry"].includes("FR") ||
//         record["h_TopCountry"].includes("DK") ||
//         record["h_TopCountry"].includes("SE") ||
//         record["h_TopCountry"].includes("NO") ||
//         record["h_TopCountry"].includes("NL") ||
//         record["h_TopCountry"].includes("BE") ||
//         record["h_TopCountry"].includes("UK") ||
//         record["h_TopCountry"].includes("FI"),
//       label: "Top Consumer Country",
//     },
//   ];
// }





// // 008 Webto

// function getCriterias() {
//   return [
//     {
//       fn: (record) =>
//         record["h_Country"] == "DK" &&
//         (record["h_Industry1"].includes("Manufacturing") || record["h_Industry1"].includes("Construction")),
//       label: "Country = Denmark + In selected industry",
//     },

//     {
//       fn: (record) =>
//       //   record["h_Industry2"].includes("Repair and installation of machinery and equipment") ||//3310 2
//       //   record["h_Industry2"].includes("Specialised construction activities") || //4310 2
//       //   record["h_Industry3"].includes("Repair of fabricated metal products, machinery and equipment") || //3310 3
//       //   record["h_Industry3"].includes("Demolition and site preparation") || //4310
//       //   record["h_Industry3"].includes("Building completion and finishing") || //4330 3
//       //   record["h_Industry3"].includes("Other specialised construction activities")|| //4390 3

//         // newones

//         record["h_Industry2"].includes("Specialised construction activities") ||//4321 2
//         record["h_Industry3"].includes("Electrical, plumbing and other construction installation activities") || //4321 3
//         record["h_Industry2"].includes("Specialised construction activities") || //43.32  43.39.10  2
//         record["h_Industry3"].includes("Building completion and finishing") || //43.32 43.39.10 3
//         record["h_Industry2"].includes("Specialised construction activities") || //43.99.10 2
//         record["h_Industry3"].includes("Other specialised construction activities"), //43.99.10 3
//       label: "In selected sub-industries",
//     },
//     {
//       fn: (record) =>
//         record["h_IsWordpress"]?.toLowerCase() == "true",
//         // record["h_IsWooCommerce"]?.toLowerCase() == "true",
//       label: "Wordpress",
//     },  
//     // {
//     //   fn: (record) =>
//     //     record["h_IsWooCommerce"]?.toLowerCase() == "true",
//     //   label: "Wordpress",
//     // },  
//     {
//       fn: (record) =>
//         record["h_NoOfEmployees"] >= 1 && record["h_NoOfEmployees"] <= 20,
//       label: "No of Employees 01-20",
//     },
//     {
//       fn: (record) =>
//         record["h_IsGoogleAds"]?.toLowerCase() === "true",
//       label: "Has Google Ads",
//     },

//   ];
// }




//  // 007 jes-media
//  function getCriterias() {
//   return [
//     {
//       fn: (record) =>  record["h_Country"] == "DK" 
//           && record["h_Industry1"].includes("Wholesale and retail trade") 
//           &&record["h_NOfEmployees"] >= 20 && record["h_NOfEmployees"] <= 80,
//       label: "Country = DK + Top Selected industry + FTE range: 20 - 80",
//     },

//     {
//       fn: (record) =>
//         record["h_HasMarketingDepartment"].includes("TRUE"),
//       label: "Has Marketing Department",
//     },
//     {
//       fn: (record) =>
//         record["h_Industry3"].includes("Retail sale of other household equipment in specialised stores") ||
//         record["h_Industry3"].includes("47.5"),
//       label: "In selected sub-industry",
//     },
//     {
//       fn: (record) =>
//         record["h_HasMarketingDepartment"].includes("TRUE"),
//       label: "Has Marketing Department",
//     },
//     {
//       fn: (record) =>
//         record["HasGoogleAdsOrFacebookAds"] .includes("TRUE"),
//         // record["h_IsFacebookAds"].toLowerCase() == "true"||
//         // record["h_IsGoogleAds"].toLowerCase() == "true",
//       label: "Has Ads Platform: Google|Meta",
//     },
//   ];
// }


//  // 006 radarSoftHouse
// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK" && record["h_Industry1"].includes("Wholesale and retail trade"),
//       label: "Country = Denmark + In selected industry",
//     },

//     {
//       fn: (record) =>
//         record["h_Industry3"] .includes ("Wholesale of household goods") || 
//         record["h_Industry3"] .includes ("Retail sale via mail order houses or via Internet"),

//       label: "In selected sub-industries",
//     },

//     {
//       fn: (record) => record["h_NoOfEmployees"] >= 2 && record["h_NoOfEmployees"] <= 35,
//       label: "FTE range: 2-35",
//     },



//     {
//       fn: (record) => 
//         record["h_IsEcommerce"].toLowerCase() == "true",
//       label: "Is eCommerce",
//     },

//     {
//       fn: (record) =>
//         record["h_IsShopify"].toLowerCase() == "true" ||
//         record["h_IsMagento"].toLowerCase() == "true" ||
//         record["h_IsWooCommerce"].toLowerCase() == "true" ||
//         record["h_IsPrestaShop"].toLowerCase() == "true",
//       label: "CMS: Shopify, Magento, Dandomain, Woocommerce, Prestashop",
//     },

//   ];
// }

// //05

// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK" && 
//       record["h_Industry1"].includes("Wholesale and retail trade"),
//       label: "Country = Denmark + In selected industry",
//     },
//     {
//       fn: (record) =>
//         record["h_NoOfEmployees"] > 2,
//       label: "No of Employees > 2",
//     },
//     {
//       fn: (record) =>
//       (
//         record["h_Industry3"].indexOf("46.40") == 0 ||
//         record["h_Industry3"].indexOf("47.91") == 0 ||
//         record["h_Industry2"].includes("Retail trade, except of motor vehicles and motorcycles") ||
//         record["h_Industry2"].includes("Retail trade not in stores, stalls or markets") ||
//         record["h_Industry3"].includes("Wholesale of household goods") ||
//         record["h_Industry3"].includes("Wholesale trade, except of motor vehicles and motorcycles") 
//       ),
//       label: "In selected sub-industries",
//     },

//     {
//       fn: (record) =>
//       (
//         record["h_IsGoogleAds"] .toLowerCase() == "true" ||
//         record["h_IsFacebookAds"].toLowerCase() == "true" ||
//         record["h_IsLinkedInAds"] .toLowerCase() == "true" 
//       ),
//       label: "Has Ads Platform: Google | Meta | LinkedIn ",
//     },

//     {
//       fn: (record) => record["h_IsEcommerce"].toLowerCase() == "true", 
//       label: "Is eCommerce",
//     },
//   ];
// }

//004

// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "SE" 
//       &&(record["h_Industry1"].includes("Wholesale and retail trade") ||
//       record["h_Industry1"].indexOf("4") == 0) ,
//       label: "Country = Sweden + In selected industry",
//     },
//     {
//       fn: (record) => record["h_NoOfEmployees"] >= 15,
//       label: "Country = Sweden + In selected industry + No of Employees >= 15",
//     },
//     {
//       fn: (record) =>
//         record["h_Industry3"] == "46.40" || record["h_Industry3"] == "47.91",
//       label: "Country = Sweden + In selected industry + No of Employees > 15 + In selected sub industries",
//     },
//     {
//       fn: (record) =>
//         (record["h_some_FacebookURL"] != "" && record["h_some_FacebookURL"] != "N/A") ||
//         (record["h_InstagramURL"] != "" && record["h_InstagramURL"] != "N/A"),
//       label: "Country = Sweden + In selected industry + No of Employees > 15 + In selected sub industries + Has SoMe Instagram || Facebook",
//     },
//     {
//       fn: (record) => record["h_IsEcommerce"] == "TRUE",
//       label: "Country = Sweden + In selected industry + No of Employees > 15 + In selected sub industries + Has SoMe Instagram || Facebook + Is Ecommerce",
//     },
//   ];
// }



//  // 003
// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK" && record["h_Industry1"].includes("Wholesale and retail trade"),
//       label: "Country = Denmark + Main Industry includes 'Wholesale and retail trade'",
//     },

//     {
//       fn: (record) => 
//         record["h_Industry3"] .includes ("46.4") || 
//         record["h_Industry3"] .includes ("47.91") ||
//         record["h_Industry3"] .includes ("Wholesale of household goods") || 
//         record["h_Industry3"] .includes ("Retail sale via mail order houses or via Internet"),

//       label: "Sub-industries",
//     },

//     {
//       fn: (record) => record["h_NoOfEmployees"] >= 2 && record["h_NoOfEmployees"] <= 35,
//       label: "FTE range: 2-35",
//     },

//     {
//       fn: (record) => 
//         record["h_IsEcommerce"].toLowerCase() == "true",
//       label: "Is eCommerce: TRUE",
//     },

//     {
//       fn: (record) =>
//         record["h_IsShopify"].toLowerCase() == "true" ||
//         record["h_IsMagento"].toLowerCase() == "true" ||
//         record["h_IsWooCommerce"].toLowerCase() == "true" ||
//         record["h_IsPrestaShop"].toLowerCase() == "true",
//       label: "eCommerce CMS: Shopify, Magento, Dandomain, Woocommerce, Prestashop",
//     },

//   ];
// }


//001

// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK",
//       label: "Country = Denmark",
//     },

//     {
//       fn: (record) => {
//         const industries = [
//           "Financial and insurance activities",
//           "Real estate activities",
//           "Arts, entertainment and recreation",
//           "Administrative and support activities",
//           "Finance",
//           "Real estate activities",
//           "Administrative and support activities",
//           "Art And Entertainment",
//           "Arts, entertainment and recreation",
//           "Sports",
//           "Technology And Computing",
//           "Health And Fitness",
//           "Food And Drink",
//           "Science",
//           "Shopping",
//           "Hobbies And Interests",
//           "Automotive And Vehicles",
//           "Family And Parenting",
//           "Home And Garden",
//           "Law Govt And Politics",
//           "Society",
//           "Style And Fashion",
//           "Travel"
//         ];

//         const naceCodes = [
//           "64",   // Financial and insurance activities
//           "68",   // Real estate activities
//           "90",   // Arts, entertainment and recreation
//           "77",   // Administrative and support activities
//         ];

//         return industries.includes(record["h_Industry2"]) || 
//                industries.includes(record["h_Industry3"]) || 
//                industries.includes(record["h_Industry"]) ||
//                industries.includes(record["h_Industry1"]) ||
//                naceCodes.some(nace => 
//                  (record["h_IndustryCode"] && record["h_IndustryCode"].startsWith(nace)) || 
//                  (record["h_Industry1"] && record["h_Industry1"].startsWith(nace)) ||
//                  (record["h_Industry2"] && record["h_Industry2"].startsWith(nace)) ||
//                  (record["h_Industry3"] && record["h_Industry3"].startsWith(nace))
//                );
//       },
//       label: "In selected industries or NACE codes",
//     },
//      {
//       fn: (record) => record["h_NoOfEmployees"] > 100,
//       label: "No of Employees > 100",
//     },

//     {
//       fn: (record) => record["h_Umbraco"] == "TRUE",
//       label: "Umbraco on",
//     },


//   ];
// }



// 001

// function getCriterias() {
//   return [
//     {
//       // Checks if the country is DK (Denmark)
//       fn: (record) => record["Country"] === "DK",
//       label: "Country = Denmark",
//     },
//     {
//       // Checks if the number of employees is greater than 100, ensuring the value is not null
//       fn: (record) => record["Employees"] > 100,
//       label: "No of Employees > 100",
//     },
//     {
//       // Checks if the vertical belongs to one of the listed ones, ensuring the value is not null
//       fn: (record) =>
//         record["Vertical"] &&
//         (
//           record["Vertical"] === "Financial and insurance activities" ||
//           record["Vertical"] === "Real estate activities" ||
//           record["Vertical"] === "Administrative and support activities" ||
//           record["Vertical"] === "Arts, entertainment and recreation" ||
//           record["Vertical"] === "Business And Industrial" ||
//           record["Vertical"] === "Finance" ||
//           record["Vertical"] === "Real estate activities" ||
//           record["Vertical"] === "Administrative and support activities" ||
//           record["Vertical"] === "Art And Entertainment" ||
//           record["Vertical"] === "Arts, entertainment and recreation" ||
//           record["Vertical"] === "Sports" ||
//           record["Vertical"] === "Technology And Computing" ||
//           record["Vertical"] === "Health And Fitness" ||
//           record["Vertical"] === "Food And Drink" ||
//           record["Vertical"] === "Science" ||
//           record["Vertical"] === "Shopping" ||
//           record["Vertical"] === "Hobbies And Interests" ||
//           record["Vertical"] === "Automotive And Vehicles" ||
//           record["Vertical"] === "Family And Parenting" ||
//           record["Vertical"] === "Home And Garden" ||
//           record["Vertical"] === "Law Govt And Politics" ||
//           record["Vertical"] === "Society" ||
//           record["Vertical"] === "Style And Fashion" ||
//           record["Vertical"] === "Travel"
//         ),
//       label: "In selected industries and mapped verticals",
//     },
//   ];
// }


//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK",
//       label: "Country = Denmark",
//     },
//     {
//       fn: (record) => record["h_NoOfEmployees"] > 60 && record["h_NoOfEmployees"] < 200,
//       label: "No of Employees > 60 and < 200",
//     },
//     {
//       fn: (record) => record["isecommerce_trap"] != "TRUE",
//       label: "Ecommerce is not TRUE",
//     },
//     {
//       fn: (record) => 
//         record["h_Industry3"] == "Development of building projects" || // Development of building projects
//         record["h_Industry3"] == "Electrical, plumbing and other construction installation activities" || // Electrical, plumbing, and other construction installation activities
//         record["h_Industry3"] == "Building completion and finishing" || // Building completion and finishing
//         record["h_Industry3"] == "Other specialised construction activities" || // Other specialised construction activities
//         record["h_Industry1"] == "Manufacturing", // Any sub-industry within 'Manufacturing'
//       label: "In selected sub industries (Construction + Manufacturing)",
//     },    
//     {
//       fn: (record) => record["h_IsGoogleAds"] == "TRUE",
//       label: "Has Ads Platform: Google",
//     },
//   ];
// }




// // CLIENT 1 

// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] > 60 && record["h_NoOfEmployees"] < 200,
//     label: "No of Employees > 60 and < 200",
//   },
//   {
//     fn: (record) => record["h_Website"] != "N/A" && record["h_Website"] != "",
//     label: "Has a valid website",
//   },
// ];
// }


//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK" && record["h_Website"].endsWith(".dk"),
//       label: "Country = Denmark + Website domain ends with .dk",
//     },
//     {
//       fn: (record) => record["h_NoOfEmployees"] > 5,
//       label: "No of Employees > 5",
//     },
//     {
//   fn: (record) =>
//     record["h_Industry3"].indexOf("90.04") == 0 ||
//     record["h_Industry3"].indexOf("90.03") == 0 ||
//     record["h_Industry3"].indexOf("91") == 0 ||
//     record["h_Industry3"].indexOf("93") == 0,
//   label: "In selected sub industries (90.04, 90.03, 91, 93)",
// },
//     {
//       fn: (record) => 
//         record["h_IsGoogleAds"] == "TRUE" ||
//         record["h_IsFacebookAds"] == "TRUE",
//       label: "HasAdsPlatform: Google|Meta",
//     },
//     {
//       fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 2000,
//       label: "Traffic > 2k",
//     },
//     {
//       fn: (record) =>
//         record["h_TitleLevel1"].includes("Marketingchef") ||
//         record["h_TitleLevel1"].includes("Marketingdirektør"),
//       label: "Title level 1 contains Marketingchef or Marketingdirektør",
//     },
//     {
//       fn: (record) =>
//         record["h_TitleLevel2"].includes("CMO") ||
//         record["h_TitleLevel2"].includes("Direktør"),
//       label: "Title level 2 contains CMO or Direktør",
//     },
//   ];
// }


// function getCriterias() {
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK" && record["h_Website"].endsWith(".dk"),
//       label: "Country = Denmark + Website domain ends with .dk",
//     },
// {
//   fn: (record) => record["h_NoOfEmployees"] > 5,
//     label: "No of Employees > 5",
//       },
// {
//   fn: (record) =>
//   (
//     record["h_Industry3"].indexOf("90.04") == 0 ||
//     record["h_Industry3"].indexOf("90.03") == 0 ||
//     record["h_Industry3"].indexOf("91") == 0 ||
//     record["h_Industry3"].indexOf("93") == 0
//   ),
//     label: "In selected sub industries (90.04, 90.03, 91, 93)",
//       },
// {
//   fn: (record) => record["h_IsKlaviyo"] != "TRUE",
//     label: "Email Systems: Klaviyo (not TRUE)",
//       },
// {
//   fn: (record) =>
//     record["h_IsGoogleAds"] == "TRUE" ||
//     record["h_IsFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//       },
// {
//   fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 2000,
//     label: "Traffic > 2k",
//       },
//     ];

//   }

//
//   return [
//     {
//       fn: (record) => record["h_Country"] == "DK", 
//       label: "Country = Denmark + In selected industry",
//     },
//     {
//       fn: (record) => record["h_NoOfEmployees"] > 5,
//       label: "No of Employees > 5",
//     },
//     {
//       fn: (record) =>
//         (
//           record["h_Industry3"].indexOf("90.04") == 0 || 
//           record["h_Industry3"].indexOf("90.03") == 0 ||
//           record["h_Industry3"].indexOf("91") == 0 ||
//           record["h_Industry3"].indexOf("93") == 0
//         ),
//       label: "In selected sub industries (90.04, 90.03, 91, 93)",
//     },
//     {
//       fn: (record) => record["h_IsKlaviyo"] != "TRUE",
//       label: "Email Systems: Klaviyo (not TRUE)",
//     },
//     {
//       fn: (record) =>
//         record["h_IsGoogleAds"] == "TRUE" || 
//         record["h_IsFacebookAds"] == "TRUE",
//       label: "HasAdsPlatform: Google|Meta",
//     },
//     {
//       fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 2000,
//       label: "Traffic > 2k",
//     },
//     // {
//     //   fn: (record) => record["h_Website"] && record["h_Website"].endsWith(".dk"),
//     //   label: "Website domain ends with .dk",
//     // }
//   ];
// }


// // jes media - sep 24 - part 2 (rerun due to mistake)
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 2,
//     label: "No of Employees > 2",
//   },
//   {
//     fn: (record) => record["h_DateOfIncorporation"] > 2020,
//     label: "Incoration Date Year > 2020",
//   },
//   {
//     fn: (record) =>
//       (
//         record["h_Industry3"].indexOf("931") == 0
//       ),
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_IsGoogleAds"] == "TRUE"||
//       record["h_IsFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//   },
// ];


// gorm - Oct/24
// criteria adjustment on same dataset from June
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] >= 300,
//     label: "No of Employees > 300",
//   },
//   {
//     fn: (record) =>
//       record["h_IsLinkedInAds"].toUpperCase() == "TRUE" ||
//       record["h_IsGoogleAds"].toUpperCase() == "TRUE" ||
//       record["h_IsGoogleAdsense"].toUpperCase() == "TRUE",
//     label: "Has LinkedInAds | GoogleAds | GoogleAdsense",
//   },
//   {
//     fn: (record) => record["h_some_LinkedinFollowerCount"] > 100,
//     label: "Has LinkedIn Presence",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() == "TRUE" ||
//       record["h_HasMediaAndCommunicationDepartment"].toUpperCase() == "TRUE",
//     label: "Has Marketing Department",
//   },
// ];

// hey loyalty - sep 24 - part 2
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 5,
//     label: "No of Employees > 5",
//   },
//   {
//     fn: (record) =>
//       (
//         record["h_Industry3"].indexOf("90") == 0 && 
//         record["h_Industry3"] != "9001" &&
//         record["h_Industry3"] != "9002"
//       ) ||
//       record["h_Industry3"].indexOf("91") == 0 ||
//       record["h_Industry3"].indexOf("93") == 0 ,
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_IsKlaviyo"] != "TRUE",
//     label: "Email Systems: Klaviyo (not TRUE)",
//   },
//   {
//     fn: (record) =>
//       record["h_IsGoogleAds"] == "TRUE"||
//       record["h_IsFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 2000,
//     label: "Traffic > 2k",
//   },
// ];

// inbound cph - sep 24 (2)
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 20 && record["h_NoOfEmployees"] < 300,
//     label: "No of Employees > 20 and < 300",
//   },
//   {
//     fn: (record) => record["isecommerce"] != "TRUE",
//     label: "Ecommerce is not TRUE",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry1"] == "Manufacturing" ||
//       record["h_Industry3"] == "Development of building projects" ||
//       record["h_Industry3"] ==
//         "Electrical, plumbing and other construction installation activities" ||
//       record["h_Industry3"] == "Building completion and finishing" ||
//       record["h_Industry3"] == "Other specialised construction activities",
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() == "TRUE" ||
//       record["h_HasSalesDepartment"].toUpperCase() == "TRUE",
//     label: "Has Department: Marketing|Sales",
//   },
//   {
//     fn: (record) =>
//       record["h_IsGoogleAds"].toUpperCase() == "TRUE" &&
//       record["h_IsGoogleAds"] != "N/A",
//     label: "HasAdsPlatform: Google",
//   },
// ];

// // jes media - sep 24 - part 2
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 2,
//     label: "No of Employees > 2",
//   },
//   {
//     fn: (record) => record["h_DateOfIncorporation"] > 2020,
//     label: "Incoration Date Year > 2020",
//   },
//   {
//     fn: (record) =>
//       (
//         record["h_Industry3"].indexOf("93") == 0 && 
//         record["h_Industry3"] != "9310" &&
//         record["h_Industry3"] != "9313"
//       ),
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_IsGoogleAds"] == "TRUE"||
//       record["h_IsFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//   },
// ];

// // hey loyalty - sep 24 - part 2
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 5,
//     label: "No of Employees > 5",
//   },
//   {
//     fn: (record) =>
//       (
//         record["h_Industry3"].indexOf("90") == 0 && 
//         record["h_Industry3"] != "9001" &&
//         record["h_Industry3"] != "9002"
//       ) ||
//       record["h_Industry3"].indexOf("91") == 0 ||
//       record["h_Industry3"].indexOf("93") == 0 ,
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_IsGoogleAds"] == "TRUE"||
//       record["h_IsFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 2000,
//     label: "Traffic > 2k",
//   },
// ];


// // become - sep 24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 5 && record["h_NoOfEmployees"] < 150,
//     label: "No of Employees > 5 and < 150",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry3"] ==
//         "Retail trade not in stores, stalls or markets" ||
//       record["h_Industry3"] == "Wholesale of household goods",
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_InstagramURL"] != "" && record["h_InstagramURL"] != "N/A",
//     label: "Has Instagram",
//   },
//   {
//     fn: (record) =>
//       (record["h_IsGoogleAds"] == "TRUE" &&
//         record["h_IsGoogleAds"] != "N/A") ||
//       (record["h_IsFacebookAds"] == "TRUE" &&
//         record["h_IsFacebookAds"] != "N/A"),
//     label: "HasAdsPlatform: Google|Meta",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
// ];

// ubivox - sep/24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark in selected industries",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry3"] == "9101" ||
//       record["h_Industry3"] == "9320" ||
//       record["h_Industry3"] == "9410" ||
//       record["h_Industry3"] == "9420" ||
//       record["h_Industry3"] == "9490" ||
//       record["h_Industry3"] == "8410" ||
//       record["h_Industry3"] == "8420" ||
//       record["h_Industry3"] == "9001",
//     label: "In selected sub industry",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] > 4,
//     label: "No of Employees > 4",
//   },
//   {
//     fn: (record) =>
//       record["Mailchimp"] == "TRUE" ||
//       record["Mailjet"] == "TRUE" ||
//       record["Klaviyo"] == "TRUE" ||
//       record["Drip"] == "TRUE" ||
//       record["Sleeknote"] == "TRUE" ||
//       record["ActiveCampaign"] == "TRUE" ||
//       record["Hubspot"] == "TRUE",
//     label:
//       "Email Marketing Tool: Mailchimp|Mailjet|Klaviyo|Drip|Sleeknote|ActiveCampaign|Hubspot",
//   },
// ];

// // hey loyalty - reused dataset from May + suppl. DanDomain (small sample)
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark in selected industries",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) =>
//       record["h_ProductCount"] == "TRUE" || record["h_ProductCount"] > 25,
//     label: "No of Products > 25",
//   },
//   {
//     fn: (record) =>
//       record["h_NoUniqueVisitorsAvg3mo"] == "TRUE" ||
//       record["h_NoUniqueVisitorsAvg3mo"] > 10000,
//     label: "No of Visitors per month > 10k",
//   },
//   {
//     fn: (record) => record["CMS"],
//     label: "HasEcommercePlatform: Shopify|Magento|Woo|DanDomain",
//   },
//   {
//     fn: (record) => record["MailMktTool"],
//     label:
//       "h_HasEmailMarketingPlatform: Mailchimp|Activecampaign|Campaignmonitor|Mailjet|Mailerlight|Marketingplatform|Agilic|apsis",
//   },
// ];

// w360 - sep 24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + Top selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 10 && record["h_NoOfEmployees"] < 200,
//     label: "No of Employees > 10 and < 200",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() === "TRUE" ||
//       record["h_HasSalesDepartment"].toUpperCase() === "TRUE",
//     label: "Has Department: Sales|Marketing",
//   },
//   {
//     fn: (record) => record["h_IsGoogleAds"].toUpperCase() == "TRUE",
//     label: "HasAdsPlatform: Google",
//   },
//   {
//     fn: (record) => record["h_TopCountry"] == "DK",
//     label: "Main Target Country = Denmark",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry3"] == "Development of building projects" ||
//       record["h_Industry3"] == "Construction of roads and railways" ||
//       record["h_Industry3"] == "4110" ||
//       record["h_Industry3"] == "4321" ||
//       record["h_Industry3"] == "4332" ||
//       record["h_Industry3"] == "4334" ||
//       record["h_Industry3"] ==
//         "Electrical, plumbing and other construction installation activities" ||
//       record["h_Industry3"] == "Building completion and finishing",
//     label: "In selected sub industry",
//   },
// ];

// // jes media - sep 24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + Top selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry3"] ==
//         "Retail sale of other household equipment in specialised stores" ||
//       record["h_Industry3"] ==
//         "Retail trade in dress fabrics, yarn, embroideries, etc." ||
//       record["h_Industry3"] == "Paint and wallpaper stores" ||
//       record["h_Industry3"] == "Hardware stores and tool stores" ||
//       record["h_Industry3"] ==
//         "Retail trade in carpets, wall coverings and floor coverings" ||
//       record["h_Industry3"] ==
//         "Retail sale of electrical household appliances" ||
//       record["h_Industry3"] == "Furniture stores" ||
//       record["h_Industry3"] == "Home Textile Stores" ||
//       record["h_Industry3"] ==
//         "Retail trade in kitchen equipment, glassware, porcelain, cutlery, vases, candlesticks etc." ||
//       record["h_Industry3"] == "Musical instrument dealers" ||
//       record["h_Industry3"] == "47.50" ||
//       record["h_Industry3"] ==
//         "Retail trade in furniture and lighting articles and household articles ian",
//     label: "In selected sub industry",
//   },
//   {
//     fn: (record) => record["h_NOfEmployees"] > 20,
//     label: "No of Employees > 20",
//   },
//   {
//     fn: (record) => record["h_HasMarketingDepartment"] === "TRUE",
//     label: "Has Marketing Department",
//   },
//   {
//     fn: (record) => record["HasGoogleAdsOrFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//   },
// ];

// inbound cph - aug 24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 20 && record["h_NoOfEmployees"] < 300,
//     label: "No of Employees > 20 and < 300",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry1"] == "Manufacturing" ||
//       record["h_Industry3"] == "Development of building projects" ||
//       record["h_Industry3"] ==
//         "Electrical, plumbing and other construction installation activities" ||
//       record["h_Industry3"] == "Building completion and finishing" ||
//       record["h_Industry3"] == "Other specialised construction activities",
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() == "TRUE" ||
//       record["h_HasSalesDepartment"].toUpperCase() == "TRUE",
//     label: "Has Department: Marketing|Sales",
//   },
//   {
//     fn: (record) => record["h_TopCountry"] == "DK",
//     label: "Main Target Country = Denmark",
//   },
//   {
//     fn: (record) =>
//       record["h_IsGoogleAds"].toUpperCase() == "TRUE" &&
//       record["h_IsGoogleAds"] != "N/A",
//     label: "HasAdsPlatform: Google",
//   },
// ];

// // become - aug 24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + In selected industry",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 20 && record["h_NoOfEmployees"] < 150,
//     label: "No of Employees > 20 and < 150",
//   },
//   {
//     fn: (record) =>
//       record["h_Industry3"] ==
//         "Retail trade not in stores, stalls or markets" ||
//       record["h_Industry3"] == "Wholesale of household goods",
//     label: "In selected sub industries",
//   },
//   {
//     fn: (record) =>
//       record["h_InstagramURL"] != "" && record["h_InstagramURL"] != "N/A",
//     label: "Has Instagram",
//   },
//   {
//     fn: (record) =>
//       (record["h_IsGoogleAds"] == "TRUE" &&
//         record["h_IsGoogleAds"] != "N/A") ||
//       (record["h_IsFacebookAds"] == "TRUE" &&
//         record["h_IsFacebookAds"] != "N/A"),
//     label: "HasAdsPlatform: Google|Meta",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
// ];

// jes media - aug 24
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark + Top selected industry",
//   },
//   {
//     fn: (record) =>
//       record["Industry_n_norm"] ||
//       record["h_Industry3"] ==
//         "Retail sale of other household equipment in specialised stores" ||
//       record["h_Industry3"] == "Wholesale of household goods",
//     label: "In selected sub industry",
//   },
//   {
//     fn: (record) => record["h_NOfEmployees"] > 20,
//     label: "No of Employees > 20",
//   },
//   {
//     fn: (record) => record["h_HasMarketingDepartment"] === "TRUE",
//     label: "Has Marketing Department",
//   },
//   {
//     fn: (record) => record["HasGoogleAdsOrFacebookAds"] == "TRUE",
//     label: "HasAdsPlatform: Google|Meta",
//   },
// ];

// hey loyalty - reused dataset from May
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark in selected industries",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) =>
//       record["h_ProductCount"] == "TRUE" || record["h_ProductCount"] > 25,
//     label: "No of Products > 25",
//   },
//   {
//     fn: (record) =>
//       record["h_NoUniqueVisitorsAvg3mo"] == "TRUE" ||
//       record["h_NoUniqueVisitorsAvg3mo"] > 10000,
//     label: "No of Visitors per month > 10k",
//   },
//   {
//     fn: (record) =>
//       record["h_HasEcommercePlatform"] == "TRUE" ||
//       record["h_IsMagento"] == "TRUE" ||
//       record["h_IsShopify"] == "TRUE" ||
//       record["h_IsWooCommerce"] == "TRUE",
//     label: "HasEcommercePlatform: Shopify|Magento|Woo",
//   },
//   {
//     fn: (record) => record["h_HasEmailMarketingPlatform"] === "TRUE",
//     label:
//       "h_HasEmailMarketingPlatform: Mailchimp|Activecampaign|Campaignmonitor|Mailjet|Mailerlight|Marketingplatform|Agilic|apsis",
//   },
// ];

// // hey loyalty - reused dataset from May
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark in selected industries",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) => record["h_NoOfProducts"] == "TRUE",
//     label: "No of Products > 25",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] == "TRUE",
//     label: "No of Visitors per month > 10k",
//   },
//   {
//     fn: (record) => record["h_HasEcommercePlatform"] == "TRUE",
//     label: "HasEcommercePlatform: Shopify|Magento|Woo",
//   },
//   {
//     fn: (record) => record["h_HasEmailMarketingPlatform"] === "TRUE",
//     label:
//       "h_HasEmailMarketingPlatform: Mailchimp|Activecampaign|Campaignmonitor|Mailjet|Mailerlight|Marketingplatform|Agilic|apsis",
//   },
// ];

// return [
//   {
//     fn: (record) => record["Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) =>
//       record["Vertical"] == "Finance" ||
//       record["Vertical"] == "Real Estate" ||
//       record["Vertical"] == "Business and Industrial" ||
//       record["Vertical"] == "Art and Entertainment" ||
//       record["Vertical"] == "Society" ||
//       record["Vertical"] == "Law, Govt, and Politics",
//     label: "Vertical in selected categories",
//   },
//   {
//     fn: (record) => record["Sales Revenue USD"] > 10000,
//     label: "NoOfEmployees > 50",
//   },
//   // {
//   //   fn: (record) => record["h_some_InstagramFollowersCount"] >= 5000,
//   //   label: "Has Instagram followers >= 5k",
//   // },
// ];

// flowbox - DE shopify export - Aug/24
// return [
//   {
//     fn: (record) =>
//       record["h_Country"] == "DE" && record["h_Website"] != null,
//     label: "Country = Germany with a Website",
//   },
//   {
//     fn: (record) =>
//       record["h_Vertical"] || record["_h_temp_InstagramVertical"],
//     label: "Vertical in selected categories",
//   },
//   {
//     fn: (record) => record["h_TechSpend"] && record["h_TechSpend"] != "Low",
//     label: "NoOfEmployees >= 10",
//   },
//   {
//     fn: (record) => record["h_InstagramURL"] != "",
//     label: "Has Instagram",
//   },
//   {
//     fn: (record) => record["h_some_InstagramFollowersCount"] >= 5000,
//     label: "Has Instagram followers >= 5k",
//   },
// ];

// Emprove
// return [
//   {
//     fn: (record) =>
//       record["h_Country"] == "DK" &&
//       record["h_NoOfEmployees"] &&
//       record["h_NoOfEmployees"] < 50,
//     label: "Country = Denmark + < 50 Employees",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"],
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) =>
//       (record["h_TiktokURL"] && record["h_TiktokURL"] != "N/A") ||
//       (record["h_FacebookURL"] && record["h_FacebookURL"] != "N/A") ||
//       (record["h_InstagramURL"] && record["h_InstagramURL"] != "N/A"),
//     label: "Has Tiktok, Facebook or Instagram",
//   },
//   {
//     fn: (record) =>
//       (record["h_IsFacebookAds"] &&
//         record["h_IsFacebookAds"].toUpperCase() == "TRUE") ||
//       (record["h_IsGoogleAds"] &&
//         record["h_IsGoogleAds"].toUpperCase() == "TRUE"),
//     label: "Has Google Ads or Facebook Ads",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 5000,
//     label: "h_NoUniqueVisitorsAvg3mo > 5000",
//   },
// ];

// Inmix 2
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) => record["h_Website"] && record["h_Website"] != "N/A",
//     label: "Has Website",
//   },
//   {
//     fn: (record) =>
//       (record["h_TiktokURL"] && record["h_TiktokURL"] != "N/A") ||
//       (record["h_some_FacebookURL"] &&
//         record["h_some_FacebookURL"] != "N/A") ||
//       (record["h_InstagramURL"] && record["h_InstagramURL"] != "N/A"),
//     label: "Has Tiktok | Facebook | Tiktok",
//   },
//   {
//     fn: (record) =>
//       (record["h_IsFacebookAds"] &&
//         record["h_IsFacebookAds"].toUpperCase() == "TRUE") ||
//       (record["h_IsGoogleAds"] &&
//         record["h_IsGoogleAds"].toUpperCase() == "TRUE"),
//     label: "Has Google Ads | Facebook Ads",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] > 5,
//     label: "NoOfEmployees > 5",
//   },
// ];

// MCB 3:
// return [
//   {
//     fn: (record) =>
//       record["h_Country"] === "DK" &&
//       record["h_Industry3"] !==
//         "Computer programming, consultancy and related activities",
//     label: "Country = Denmark in specified industries",
//   },
//   {
//     fn: (record) => record["h_Website"],
//     label: "Has Website",
//   },
//   {
//     fn: (record) => record["h_HasHubspot"].toUpperCase() == "TRUE",
//     label: "Has Hubspot",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] > 20,
//     label: "NoOfEmployees > 20",
//   },
//   {
//     fn: (record) => record["h_LinkedinURL"],
//     label: "Has Linkedin",
//   },
// ];

// // flowbox - DE shopify export
// return [
//   {
//     fn: (record) =>
//       record["h_Country"] == "DE" && record["h_Website"] != null,
//     label: "Country = Germany with a Website",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] >= 10,
//     label: "NoOfEmployees >= 10",
//   },
//   {
//     fn: (record) => record["h_InstagramURL"] != "",
//     label: "Has Instagram",
//   },
//   {
//     fn: (record) => record["h_Vertical"] === "Style And Fashion",
//     label: "Vertical = Fashion",
//   },
//   {
//     fn: (record) => record["h_some_InstagramFollowersCount"] >= 5000,
//     label: "Has Instagram followers >= 5k",
//   },
// ];

// funny row:
// kryptoshop.io,KryptoShop by KryptoFuchs,$500,$37541,250,0,Technology And Computing,,,,pinterest.com/krypto_shop,instagram.com/krypto_shop,,tiktok.com/@krypto_shop,,,DE

//sidewalk
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark in selected industries",
//   },
//   {
//     fn: (record) =>
//       (record["h_NoOfEmployees"] >= 5 && record["h_NoOfEmployees"] < 500) ||
//       !record["h_basic_RangeOfNoEmployees"] == "51-200" ||
//       !record["h_basic_RangeOfNoEmployees"] == "101-500" ||
//       !record["h_basic_RangeOfNoEmployees"] == "11-25" ||
//       !record["h_basic_RangeOfNoEmployees"] == "26-50" ||
//       !record["h_basic_RangeOfNoEmployees"] == "201-500" ||
//       !record["h_basic_RangeOfNoEmployees"] == "11-50" ||
//       !record["h_basic_RangeOfNoEmployees"] == "26-50" ||
//       !!record["h_NoOfEmployees"],
//     label: "No of Employees > 5 and < 500",
//   },
//   {
//     fn: (record) => record["h_Website"],
//     label: "Has Website",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() == "TRUE" ||
//       record["h_HasSalesDepartment"].toUpperCase() == "TRUE",
//     label: "Has Marketing | Sales Department",
//   },
//   {
//     fn: (record) =>
//       record["h_IsWooCommerce"].toUpperCase() == "TRUE" ||
//       record["h_IsMagento"].toUpperCase() == "TRUE",
//     label: "Has WooCommerce | Magento",
//   },
// ];

// gorm
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] >= 100,
//     label: "No of Employees > 100",
//   },
//   {
//     fn: (record) =>
//       record["h_IsLinkedInAds"].toUpperCase() == "TRUE" ||
//       record["h_IsGoogleAds"].toUpperCase() == "TRUE" ||
//       record["h_IsGoogleAdsense"].toUpperCase() == "TRUE",
//     label: "Has LinkedInAds | GoogleAds | GoogleAdsense",
//   },
//   {
//     fn: (record) => record["h_some_LinkedinFollowerCount"] > 100,
//     label: "Has LinkedIn Presence",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() == "TRUE" ||
//       record["h_HasMediaAndCommunicationDepartment"].toUpperCase() == "TRUE",
//     label: "Has Marketing Department",
//   },
// ];

// //peytz
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark in selected industries",
//   },
//   {
//     fn: (record) => record["h_Website"],
//     label: "Has Website",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"].toUpperCase() == "TRUE" ||
//       record["h_HasMediaAndCommunicationDepartment"].toUpperCase() == "TRUE",
//     label: "Has Marketing Department",
//   },
//   {
//     fn: (record) => record["h_HasCmsPlatform"].toUpperCase() == "TRUE",
//     label: "Has CMS Platform",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] >= 5 && record["h_NoOfEmployees"] < 500,
//     label: "No of Employees between 5 and 500",
//   },
// ];

// emprove
// return [
//   {
//     fn: (record) =>
//       record["h_Country"] == "DK" && record["h_NoOfEmployees"] <= 75,
//     label: "Country = Denmark + NoOfEmployees < 75",
//   },
//   {
//     fn: (record) => record["h_IsEcommerceEnrichmentData"] == "TRUE",
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) =>
//       record["h_fin_2PYProfitAfterTax"] &&
//       record["h_fin_2PYProfitAfterTax"] < 30000000,
//     label: "Gross Profit < 30mi USD",
//   },
//   {
//     fn: (record) =>
//       record["h_IsKlaviyo"] == "TRUE" ||
//       record["h_IsActiveCampaign"] == "TRUE" ||
//       record["h_IsMailchimp"] == "TRUE" ||
//       record["h_IsMailjet"] == "TRUE",
//     label: "Has Klaviyo | ActiveCampaign | Mailchimp | Mailjet",
//   },
//   {
//     fn: (record) =>
//       record["h_IsWooCommerce"] == "TRUE" || record["h_IsShopify"] == "TRUE",
//     label: "Has WooCommerce | Shopify",
//   },
// ];
// flowbox
// return [
//   {
//     fn: (record) => record["h_Country"] == "DE" && record["h_Website"],
//     label: "Country = Germany + Has Website",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) => record["h_fin_2PYProfitAfterTax"] > 100000,
//     label: "Gross Profit > 100k USD",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfProducts"] > 500 && record["h_NoOfProducts"] < 4000,
//     label: "Number Of Products between 500 and 4k",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] > 10000,
//     label: "Website Monthly Visitors > 10k",
//   },
// ];
//inmix
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK" && record["h_basic_Website"],
//     label: "Country = Denmark + Has Website",
//   },
//   {
//     fn: (record) =>
//       record["h_NoOfEmployees"] > 5 || !record["h_NoOfEmployees"],
//     label: "NoOfEmployees > 5",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"] == "TRUE" ||
//       record["h_HasMediaAndCommunicationDepartment"] == "TRUE",
//     label: "Has Marketing Department",
//   },
//   {
//     fn: (record) =>
//       record["h_InstagramURL"] ||
//       record["h_some_FacebookURL"] ||
//       record["h_TiktokURL"],
//     label: "Has Instagram | Facebook | Tiktok",
//   },
// ];
//anyday
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK" && record["h_basic_Website"],
//     label: "Country = Denmark + Has Website",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] > 5,
//     label: "NoOfEmployees > 5",
//   },
//   {
//     fn: (record) =>
//       record["h_HasMarketingDepartment"] == "TRUE" ||
//       record["h_HasMediaAndCommunicationDepartment"] == "TRUE",
//     label: "Has Marketing Department",
//   },
//   {
//     fn: (record) =>
//       record["h_IsDanDomain"] == "TRUE" ||
//       record["h_IsWooCommerce"] == "TRUE" ||
//       record["h_IsShopify"] == "TRUE" ||
//       record["h_IsPrestaShop"] == "TRUE" ||
//       record["h_IsMagento"] == "TRUE" ||
//       record["h_IsWixeCommerce"] == "TRUE",
//     label:
//       "Is Shopify | WooCommerce | PrestaShop | Magento | WixeCommerce | Umbraco | DanDomain",
//   },
//   {
//     fn: (record) => record["h_ProductCount"] > 40,
//     label: "h_ProductCount > 40",
//   },
// ];
// MCB 2:
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) => record["h_IsEcommerce"] == "TRUE",
//     label: "Is Ecommerce",
//   },
//   {
//     fn: (record) => record["h_IsShopify"] == "TRUE",
//     label: "Is Shopify",
//   },
//   {
//     fn: (record) => record["h_totalEmployeeCount"] > 10,
//     label: "NoOfEmployees > 10",
//   },
//   {
//     fn: (record) => record["GrossProfit"] > 500000,
//     label: "GrossProfit > 500k USD",
//   },
// ];
// AI Revolution
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) => record["h_HasMediaAndCommunicationDepartment"] == "TRUE",
//     label: "HasMediaAndCommunicationDepartment",
//   },
//   {
//     fn: (record) => record["h_HasMarketingDepartment"] == "TRUE",
//     label: "HasMarketingDepartment",
//   },
//   {
//     fn: (record) => record["h_NoOfEmployees"] > 25,
//     label: "NoOfEmployees > 25",
//   },
// ];
// Markeity Funnel 1
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) =>
//       record["h_Website"] != "" && record["h_IsEcommerce"] == "TRUE",
//     label: "Has Website and IsEcommerce",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] >= 10000,
//     label: "NoUniqueVisitorsAvg3mo >= 10k",
//   },
//   {
//     fn: (record) => record["h_fin_2PYGrossProfit"] > 0,
//     label: "GrossProfit > 10k",
//   },
// ];
// Markeity Funnel 2
// return [
//   {
//     fn: (record) => record["h_Country"] == "DK",
//     label: "Country = Denmark",
//   },
//   {
//     fn: (record) =>
//       record["h_Website"] != "" && record["h_IsEcommerce"] == "TRUE",
//     label: "Has Website and IsEcommerce",
//   },
//   {
//     fn: (record) => record["h_NoUniqueVisitorsAvg3mo"] >= 10000,
//     label: "NoUniqueVisitorsAvg3mo >= 10k",
//   },
//   {
//     fn: (record) => record["h_fin_2PYGrossProfit"] < 1000000,
//     label: "GrossProfit < 1mi USD",
//   },
// ];


module.exports = {
  getCriterias,
};