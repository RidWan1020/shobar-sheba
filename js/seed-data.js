/**
 * Shobar Sheba - Nagorik Help Portal (Chattogram, Bangladesh)
 * Official Seed Data for Demo & Presentation (11 Nov 2026)
 * 
 * STRICT INSTRUCTIONS COMPLIED:
 * - Exact phone numbers, no invented numbers.
 * - Items with 'verify' are marked 'verify korte hobe' without phone link.
 * - No fixed ambulance charges invented; 'Call kore janun' displayed.
 * - 16263 is NOT labeled as ambulance (16263 is Shastho Batayan).
 * - Individual donors clearly marked 'SAMPLE DONOR'.
 * - Bazar Dam clearly marked as '14 July 2026 (Demo)' from Dhaka dam.gov.bd.
 */

window.SHOBAR_SHEBA_SEED_DATA = {
  hospitals: [
    {
      id: "hosp_1",
      name: "Chattogram Medical College Hospital (CMCH)",
      nameBn: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল (চমেক)",
      address: "57 K.B. Fazlul Kader Rd",
      phone: "031-619597 / 02-41356220",
      phones: ["031-619597", "02-41356220"],
      area: "Panchlaish / Chawkbazar",
      type: "Government / Medical College",
      emergencyAvailable: true,
      notes: "চট্টগ্রামের সর্ববৃহৎ সরকারি বিশেষায়িত টারশিয়ারি হাসপাতাল ও জরুরি বিভাগ।"
    },
    {
      id: "hosp_2",
      name: "Evercare Hospital Chattogram",
      nameBn: "এভারকেয়ার হসপিটাল চট্টগ্রাম",
      address: "Plot No. H1, Ananna Residential Area, Oxygen-Kuwaish Rd",
      phone: "Hotline 09612310663 (10663)",
      phones: ["09612310663", "10663"],
      area: "Oxygen / Hathazari",
      type: "Private Super-Specialty",
      emergencyAvailable: true,
      notes: "২৪/৭ জরুরি ও ক্রিটিক্যাল কেয়ার সেবা, কার্ডিয়াক কেয়ার।"
    },
    {
      id: "hosp_3",
      name: "Apollo Imperial Hospitals",
      nameBn: "অ্যাপোলো ইম্পেরিয়াল হসপিটালস",
      address: "Zakir Hossain Rd, Pahartali",
      phone: "09612-247-247; Emergency 09610-833-833",
      phones: ["09612247247", "09610833833"],
      area: "Pahartali / Khulshi",
      type: "Private Super-Specialty",
      emergencyAvailable: true,
      notes: "জরুরি হটলাইন: 09610-833-833। আন্তর্জাতিক মানের সমন্বিত চিকিৎসা সেবা।"
    },
    {
      id: "hosp_4",
      name: "Chattogram Maa-O-Shishu General Hospital",
      nameBn: "চট্টগ্রাম মা ও শিশু জেনারেল হাসপাতাল",
      address: "Agrabad",
      phone: "031-2520063, 031-711236",
      phones: ["031-2520063", "031-711236"],
      area: "Agrabad",
      type: "Semi-Government / Specialized",
      emergencyAvailable: true,
      notes: "মাতৃ ও শিশু স্বাস্থ্যসহ পূর্ণাঙ্গ চিকিৎসা ও জরুরি বিভাগ।"
    },
    {
      id: "hosp_5",
      name: "National Hospital Chattogram",
      nameBn: "ন্যাশনাল হসপিটাল চট্টগ্রাম",
      address: "14/15 Mehedibag",
      phone: "031-627914; Lab 031-623713",
      phones: ["031-627914", "031-623713"],
      area: "Mehedibag",
      type: "Private General Hospital",
      emergencyAvailable: true,
      notes: "মেহেদীবাগে ল্যাব টেস্ট ও ক্লিনিক্যাল কনসালটেন্সি সুবিধা।"
    },
    {
      id: "hosp_6",
      name: "Parkview Hospital Ltd.",
      nameBn: "পার্কভিউ হসপিটাল লিমিটেড",
      address: "94/103 Katalganj Rd, Panchlaish",
      phone: "09610-818888; 01976-022333",
      phones: ["09610818888", "01976022333"],
      area: "Panchlaish",
      type: "Private Multi-Specialty",
      emergencyAvailable: true,
      notes: "কাতালগঞ্জ মোড়ে জরুরি, আইসিইউ এবং ডায়াগনস্টিক সুবিধা।"
    },
    {
      id: "hosp_7",
      name: "Max Hospital & Diagnostic",
      nameBn: "ম্যাক্স হসপিটাল অ্যান্ড ডায়াগনস্টিক",
      address: "35/36 Mehedibag Rd",
      phone: "031-622514, 622515, 622517, 622519",
      phones: ["031-622514", "031-622515", "031-622517", "031-622519"],
      area: "Mehedibag / Chawkbazar",
      type: "Private Multi-Specialty",
      emergencyAvailable: true,
      notes: "মেহেদীবাগ রোডে বিশেষায়িত সেবা ও প্যাথলজি।"
    },
    {
      id: "hosp_8",
      name: "CSCR Hospital & Diagnostic Centre",
      nameBn: "সিএসসিআর হসপিটাল অ্যান্ড ডায়াগনস্টিক সেন্টার",
      address: "1675/A, O.R. Nizam Rd, Probortak Circle",
      phone: "031-656565; 01887-656565",
      phones: ["031-656565", "01887656565"],
      area: "Probortak / Panchlaish",
      type: "Private Multi-Specialty",
      emergencyAvailable: true,
      notes: "প্রবর্তক মোড় সংলগ্ন সুপরিচিত চিকিৎসা ও কনসালটেন্সি সেন্টার।"
    },
    {
      id: "hosp_9",
      name: "Chattogram Metropolitan Hospital",
      nameBn: "চট্টগ্রাম মেট্রোপলিটন হাসপাতাল",
      address: "698/752 O.R. Nizam Rd, GEC Mor",
      phone: "01814-651077, 01810-030999",
      phones: ["01814651077", "01810030999"],
      area: "GEC / Panchlaish",
      type: "Private Multi-Specialty",
      emergencyAvailable: true,
      notes: "জিইসি মোড়ে ও.আর. নিজাম রোডে সার্বক্ষণিক জরুরি কেয়ার।"
    },
    {
      id: "hosp_10",
      name: "Bangabandhu Memorial Hospital (USTC)",
      nameBn: "বঙ্গবন্ধু মেমোরিয়াল হাসপাতাল (ইউএসটিসি)",
      address: "Foy's Lake",
      phone: "031-659070",
      phones: ["031-659070"],
      area: "Foy's Lake / Pahartali",
      type: "Medical College Hospital",
      emergencyAvailable: true,
      notes: "ফয়েজ লেক এলাকায় অবস্থিত ইউএসটিসি মেডিকেল কলেজ হাসপাতাল।"
    },
    {
      id: "hosp_11",
      name: "Southern Medical College & Hospital",
      nameBn: "সাউদার্ন মেডিকেল কলেজ ও হাসপাতাল",
      address: "107, CMCH Gate er opposite, Panchlaish",
      phone: "01812-605505",
      phones: ["01812605505"],
      area: "Panchlaish",
      type: "Private Medical College",
      emergencyAvailable: true,
      notes: "চমেক পূর্ব গেটের বিপরীতে অবস্থিত।"
    },
    {
      id: "hosp_12",
      name: "Islami Bank Hospital",
      nameBn: "ইসলামী ব্যাংক হাসপাতাল",
      address: "Sheikh Mujib Rd, Agrabad",
      phone: "01731-253990, 01908-402233",
      phones: ["01731253990", "01908402233"],
      area: "Agrabad",
      type: "Private General Hospital",
      emergencyAvailable: true,
      notes: "আগ্রাবাদ শেখ মুজিব রোডে সুলভ মূল্যে চিকিৎসা সেবা।"
    }
  ],

  ambulances: [
    // Hospital ambulances
    {
      id: "amb_1",
      name: "Evercare Ambulance",
      nameBn: "এভারকেয়ার অ্যাম্বুলেন্স",
      address: "Oxygen-Kuwaish Rd",
      phone: "01313-779966",
      phones: ["01313779966"],
      area: "Oxygen / Hathazari",
      category: "Hospital Ambulance",
      charge: "Call kore janun",
      notes: "এভারকেয়ার হাসপাতাল ডেডিকেটেড অ্যাম্বুলেন্স। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_2",
      name: "Apollo Imperial Ambulance",
      nameBn: "অ্যাপোলো ইম্পেরিয়াল অ্যাম্বুলেন্স",
      address: "Zakir Hossain Rd, Pahartali",
      phone: "01886-911-911",
      phones: ["01886911911"],
      area: "Pahartali / Khulshi",
      category: "Hospital Ambulance",
      charge: "Call kore janun",
      notes: "অ্যাপোলো ইম্পেরিয়াল জরুরি সাপোর্ট অ্যাম্বুলেন্স। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_3",
      name: "CMCH Ambulance",
      nameBn: "চমেক অ্যাম্বুলেন্স (CMCH)",
      address: "Panchlaish",
      phone: "999 diye dispatch",
      phones: ["999"],
      area: "Panchlaish",
      category: "Hospital Ambulance",
      charge: "Govt chart onujayi",
      notes: "সরকারি চার্ট অনুযায়ী চার্জ নির্ধারিত। জরুরি ডিসপ্যাচ: ৯৯৯।"
    },
    // Private ambulances
    {
      id: "amb_4",
      name: "Super Ambulance Service",
      nameBn: "সুপার অ্যাম্বুলেন্স সার্ভিস",
      address: "Agrabad Access Rd",
      phone: "01601-565657",
      phones: ["01601565657"],
      area: "Agrabad",
      category: "Private",
      charge: "Call kore janun",
      notes: "২৪/৭ সার্ভিস। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_5",
      name: "Surokkha Ambulance Chittagong Branch",
      nameBn: "সুরক্ষা অ্যাম্বুলেন্স (চট্টগ্রাম শাখা)",
      address: "College Road, Halishahar",
      phone: "Branch 01533-635244; Hotline 01993-700900",
      phones: ["01533635244", "01993700900"],
      area: "Halishahar",
      category: "Private",
      charge: "Call kore janun",
      notes: "ALS/ICU/AC অ্যাম্বুলেন্স সুবিধা। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_6",
      name: "Susthotaa Ambulance",
      nameBn: "সুস্থতা অ্যাম্বুলেন্স",
      address: "Nationwide, Chattogram serve kore",
      phone: "09601-222-777",
      phones: ["09601222777"],
      area: "Citywide / Inter-district",
      category: "Private",
      charge: "Call kore janun",
      notes: "সারাদেশব্যাপী ও চট্টগ্রামে সার্বক্ষণিক সেবা। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_7",
      name: "Ambulance BD 24",
      nameBn: "অ্যাম্বুলেন্স বিডি ২৪",
      address: "Chittagong to Dhaka / inter-district",
      phone: "01919-339689",
      phones: ["01919339689"],
      area: "Inter-district / Citywide",
      category: "Private",
      charge: "Call kore janun",
      notes: "চট্টগ্রাম থেকে ঢাকা ও আন্তঃজেলা রোগী পরিবহন। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_8",
      name: "Thai Medi Xpress (Air Ambulance)",
      nameBn: "থাই মেডি এক্সপ্রেস (এয়ার অ্যাম্বুলেন্স)",
      address: "69 Agrabad C/A",
      phone: "01844-047063",
      phones: ["01844047063"],
      area: "Agrabad",
      category: "Air Ambulance",
      charge: "Call kore janun",
      notes: "জরুরি এয়ার অ্যাম্বুলেন্স ও এভিয়েশন সাপোর্ট। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_9",
      name: "Chattogram Ambulance Service Pvt Ltd",
      nameBn: "চট্টগ্রাম অ্যাম্বুলেন্স সার্ভিস প্রাঃ লিঃ",
      address: "GEC More",
      phone: "01707-998822; 01812-341343",
      phones: ["01707998822", "01812341343"],
      area: "GEC More",
      category: "Private",
      charge: "Call kore janun",
      notes: "ICU/CCU/NICU/AC অ্যাম্বুলেন্স সার্ভিস। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_10",
      name: "SAFE Ambulance Service",
      nameBn: "সেফ অ্যাম্বুলেন্স সার্ভিস",
      address: "CMCH East Gate",
      phone: "01812-080022",
      phones: ["01812080022"],
      area: "Panchlaish",
      category: "Private",
      charge: "Call kore janun",
      notes: "চমেক পূর্ব গেট সংলগ্ন জরুরি সার্ভিস। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_11",
      name: "Habib Ambulance Service",
      nameBn: "হাবিব অ্যাম্বুলেন্স সার্ভিস",
      address: "Ma O Shishu Hospital, Agrabad",
      phone: "01757-949128",
      phones: ["01757949128"],
      area: "Agrabad",
      category: "Private",
      charge: "Call kore janun",
      notes: "মা ও শিশু হাসপাতাল আগ্রাবাদ সংলগ্ন। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_12",
      name: "Provati Ambulance Service",
      nameBn: "প্রভাতী অ্যাম্বুলেন্স সার্ভিস",
      address: "37 K.B. Fazlul Kader Rd",
      phone: "01627-880000",
      phones: ["01627880000"],
      area: "Panchlaish",
      category: "Private",
      charge: "Call kore janun",
      notes: "কে বি ফজলুল কাদের রোড। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_13",
      name: "Modern Ambulance Service",
      nameBn: "মডার্ন অ্যাম্বুলেন্স সার্ভিস",
      address: "20, K.B. Fazlul Quader Road",
      phone: "031-639730; 01716-074497",
      phones: ["031639730", "01716074497"],
      area: "Panchlaish",
      category: "Private",
      charge: "Call kore janun",
      notes: "কে বি ফজলুল কাদের রোড। চার্জ: কল করে জানুন।"
    },
    {
      id: "amb_14",
      name: "Sadia Ambulance Service",
      nameBn: "সাদিয়া অ্যাম্বুলেন্স সার্ভিস",
      address: "Agrabad",
      phone: "01884-959116",
      phones: ["01884959116"],
      area: "Agrabad",
      category: "Private",
      charge: "Call kore janun",
      notes: "আগ্রাবাদ ও সংলগ্ন এলাকায় জরুরি পরিবহন। চার্জ: কল করে জানুন।"
    }
  ],

  police: [
    {
      id: "pol_1",
      name: "Kotwali Thana (CMP)",
      nameBn: "কোতোয়ালী থানা (সিএমপি)",
      area: "Kotwali / New Market",
      address: "Kotwali, New Market, Chattogram",
      phone: "01713373256",
      phones: ["01713373256"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি প্রশাসনিক যোগাযোগ।"
    },
    {
      id: "pol_2",
      name: "Pahartali Thana (CMP)",
      nameBn: "পাহাড়তলী থানা (সিএমপি)",
      area: "Pahartali / Zakir Hossain Rd",
      address: "Pahartali / Zakir Hossain Rd, Chattogram",
      phone: "01713373257",
      phones: ["01713373257"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_3",
      name: "Panchlaish Thana (CMP)",
      nameBn: "পাঁচলাইশ থানা (সিএমপি)",
      area: "Panchlaish / Probortok, CMCH area",
      address: "Panchlaish / Probortok, CMCH area, Chattogram",
      phone: "01713373258",
      phones: ["01713373258"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_4",
      name: "Chandgaon Thana (CMP)",
      nameBn: "চান্দগাঁও থানা (সিএমপি)",
      area: "Chandgaon / Bahaddarhat",
      address: "Chandgaon / Bahaddarhat, Chattogram",
      phone: "01713373259",
      phones: ["01713373259"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_5",
      name: "Khulshi Thana (CMP)",
      nameBn: "খুলশী থানা (সিএমপি)",
      area: "Khulshi / Zakir Hossain Rd",
      address: "Khulshi / Zakir Hossain Rd, Chattogram",
      phone: "01713373260",
      phones: ["01713373260"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_6",
      name: "Bakalia Thana (CMP)",
      nameBn: "বাকলিয়া থানা (সিএমপি)",
      area: "Bakalia / Kalurghat Rd",
      address: "Bakalia / Kalurghat Rd, Chattogram",
      phone: "01713373261",
      phones: ["01713373261"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_7",
      name: "Bayezid Bostami Thana (CMP)",
      nameBn: "বায়েজিদ বোস্তামী থানা (সিএমপি)",
      area: "Bayezid / Oxygen",
      address: "Bayezid / Oxygen, Chattogram",
      phone: "01713373262",
      phones: ["01713373262"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_8",
      name: "Bandar (Port) Thana (CMP)",
      nameBn: "বন্দর থানা (সিএমপি)",
      area: "Bandar / Port area",
      address: "Bandar / Port area, Chattogram",
      phone: "01713373267",
      phones: ["01713373267"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_9",
      name: "Double Mooring Thana (CMP)",
      nameBn: "ডবলমুরিং থানা (সিএমপি)",
      area: "Double Mooring / Agrabad",
      address: "Double Mooring / Agrabad, Chattogram",
      phone: "01713373268",
      phones: ["01713373268"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_10",
      name: "Halishahar Thana (CMP)",
      nameBn: "হালিশহর থানা (সিএমপি)",
      area: "Halishahar",
      address: "Halishahar, Chattogram",
      phone: "01713373269",
      phones: ["01713373269"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_11",
      name: "Patenga Thana (CMP)",
      nameBn: "পতেঙ্গা থানা (সিএমপি)",
      area: "Patenga / Airport Rd",
      address: "Patenga / Airport Rd, Chattogram",
      phone: "01713373270",
      phones: ["01713373270"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_12",
      name: "Karnaphuli Thana (CMP)",
      nameBn: "কর্ণফুলী থানা (সিএমপি)",
      area: "Karnaphuli",
      address: "Karnaphuli, Chattogram",
      phone: "01713373271",
      phones: ["01713373271"],
      type: "CMP Thana",
      verified: true,
      notes: "জরুরি সেবা: ৯৯৯। ওসির মোবাইল নম্বর সরাসরি যোগাযোগ।"
    },
    {
      id: "pol_13",
      name: "Akbar Shah Thana (CMP)",
      nameBn: "আকবর শাহ থানা (সিএমপি)",
      area: "Akbar Shah / Pahartali north",
      address: "Akbar Shah / Pahartali north, Chattogram",
      phone: "",
      phones: [],
      type: "CMP Thana",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "নম্বর যাচাইাধীন (verify korte hobe)। জরুরি মুহূর্তে ৯৯৯ কল করুন।"
    },
    {
      id: "pol_14",
      name: "Chawkbazar Thana (CMP)",
      nameBn: "চকবাজার থানা (সিএমপি)",
      area: "Chawkbazar / Kapasgola",
      address: "Chawkbazar / Kapasgola, Chattogram",
      phone: "",
      phones: [],
      type: "CMP Thana",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "নম্বর যাচাইাধীন (verify korte hobe)। জরুরি মুহূর্তে ৯৯৯ কল করুন।"
    },
    {
      id: "pol_15",
      name: "Sadarghat Thana (CMP)",
      nameBn: "সদরঘাট থানা (সিএমপি)",
      area: "Strand Road, Sadarghat",
      address: "Strand Road, Sadarghat, Chattogram",
      phone: "Landline 031-631414; OC verify - leave blank",
      phones: ["031631414"],
      type: "CMP Thana",
      verified: false,
      verifyText: "OC verify - leave blank",
      notes: "ল্যান্ডলাইন: 031-631414। ওসির মোবাইল: verify korte hobe। জরুরি: ৯৯৯।"
    },
    {
      id: "pol_16",
      name: "EPZ Thana (CMP)",
      nameBn: "ইপিজেড থানা (সিএমপি)",
      area: "CEPZ / Halishahar EPZ area",
      address: "CEPZ / Halishahar EPZ area, Chattogram",
      phone: "",
      phones: [],
      type: "CMP Thana",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "নম্বর যাচাইাধীন (verify korte hobe)। জরুরি মুহূর্তে ৯৯৯ কল করুন।"
    }
  ],

  fireService: [
    {
      id: "fire_1",
      name: "Agrabad Fire Station (Divisional HQ)",
      nameBn: "আগ্রাবাদ ফায়ার স্টেশন (বিভাগীয় সদর দপ্তর)",
      address: "Sheikh Mujib Rd, Agrabad",
      phone: "01730002408; Control 01730336666",
      phones: ["01730002408", "01730336666"],
      area: "Agrabad / Double Mooring",
      coverage: "আগ্রাবাদ, ডবলমুরিং এবং সমগ্র চট্টগ্রাম বিভাগীয় সমন্বয়",
      notes: "জরুরি সেবা: ৯৯৯, ফায়ার সরাসরি: ১৬১৬৩, কন্ট্রোল রুম: 01730336666।"
    },
    {
      id: "fire_2",
      name: "Chandanpura Fire Station",
      nameBn: "চন্দনপুরা ফায়ার স্টেশন",
      address: "Sirajuddowla Rd, Chandanpura, Kotwali",
      phone: "031-619575",
      phones: ["031619575"],
      area: "Chandanpura / Kotwali",
      coverage: "Kotwali, Chawkbazar, Jamal Khan, GEC, Medical, Bahaddarhat",
      notes: "কোতোয়ালী, চকবাজার, জামালখান, জিইসি, মেডিকেল ও বহদ্দারহাট কভারেজ।"
    },
    {
      id: "fire_3",
      name: "Nandankanan Fire Station",
      nameBn: "নন্দনকানন ফায়ার স্টেশন",
      address: "Nandankanan, Kotwali",
      phone: "031-630334",
      phones: ["031630334"],
      area: "Nandankanan / Kotwali",
      coverage: "Nandankanan, Anderkilla, Kotwali",
      notes: "নন্দনকানন, আন্দরকিল্লা ও সংলগ্ন কোতোয়ালী এলাকা।"
    },
    {
      id: "fire_4",
      name: "Lamabazar Fire Station",
      nameBn: "লামাবাজার ফায়ার স্টেশন",
      address: "Lamabazar, Kotwali",
      phone: "031-630233",
      phones: ["031630233"],
      area: "Lamabazar / Kotwali",
      coverage: "Lamabazar, Sadarghat, Firingi Bazar",
      notes: "লামাবাজার, সদরঘাট, ফিরিঙ্গি বাজার সংলগ্ন নদী ও বাণিজ্য এলাকা।"
    },
    {
      id: "fire_5",
      name: "Bayezid Fire Station",
      nameBn: "বায়েজিদ ফায়ার স্টেশন",
      address: "Bayezid Bostami Rd, Bayezid",
      phone: "01730002417",
      phones: ["01730002417"],
      area: "Bayezid / Oxygen",
      coverage: "Bayezid, Oxygen, Nasirabad",
      notes: "বায়েজিদ, অক্সিজেন, নাসিরাবাদ শিল্প এলাকা।"
    },
    {
      id: "fire_6",
      name: "Kalurghat Fire Station",
      nameBn: "কালুরঘাট ফায়ার স্টেশন",
      address: "Kalurghat, Chandgaon",
      phone: "01730002423; 031-670066",
      phones: ["01730002423", "031670066"],
      area: "Kalurghat / Chandgaon",
      coverage: "Kalurghat, Chandgaon, Bahaddarhat, Mohora, Muradpur",
      notes: "কালুরঘাট ভারি শিল্প এলাকা, চান্দগাঁও, বহদ্দারহাট, মোহরা, মুরাদপুর।"
    },
    {
      id: "fire_7",
      name: "CEPZ Fire Station",
      nameBn: "সিইপিজেড ফায়ার স্টেশন",
      address: "CEPZ, South Halishahar, Bandar",
      phone: "01958237575; 031-810479",
      phones: ["01958237575", "031810479"],
      area: "CEPZ / Halishahar / Bandar",
      coverage: "CEPZ, Halishahar, Patenga",
      notes: "সিইপিজেড রফতানি প্রক্রিয়াকরণ অঞ্চল, হালিশহর ও পতেঙ্গা।"
    },
    {
      id: "fire_8",
      name: "Bandar Fire Station",
      nameBn: "বন্দর ফায়ার স্টেশন",
      address: "Port Internal Rd, Bandar",
      phone: "031-2510339",
      phones: ["0312510339"],
      area: "Bandar",
      coverage: "Bandar, Port / Dock area",
      notes: "চট্টগ্রাম বন্দর জেটি ও ডক এলাকা।"
    },
    {
      id: "fire_9",
      name: "KEPZ Fire Station",
      nameBn: "কেইপিজেড ফায়ার স্টেশন",
      address: "Karnaphuli EPZ, Anwara",
      phone: "",
      phones: [],
      area: "KEPZ / Anwara",
      coverage: "KEPZ, Anwara, Karnaphuli south",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "সরাসরি নম্বর যাচাইাধীন (verify korte hobe)। কেন্দ্রীয় কন্ট্রোল রুম 01730336666 বা ৯৯৯ এ কল করুন।"
    }
  ],

  govtOffices: [
    {
      id: "govt_1",
      name: "Zila Proshashok er Karjaloy (DC Office)",
      nameBn: "জেলা প্রশাসকের কার্যালয় (ডিসি অফিস)",
      address: "Court Hill, Kotowali",
      phone: "031-615247",
      phones: ["031615247"],
      area: "Court Hill / Kotwali",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: true,
      notes: "জেলা প্রশাসন, ভূমি ও রাজস্ব, সাধারণ নাগরিক সেবা।"
    },
    {
      id: "govt_2",
      name: "Bibhagiyo Commissioner er Karjaloy",
      nameBn: "বিভাগীয় কমিশনারের কার্যালয়",
      address: "Court Hill, Kotowali",
      phone: "",
      phones: [],
      area: "Court Hill / Kotwali",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "বিভাগীয় রাজস্ব ও প্রশাসনিক সমন্বয় দপ্তর।"
    },
    {
      id: "govt_3",
      name: "Chattogram City Corporation (CCC)",
      nameBn: "চট্টগ্রাম সিটি কর্পোরেশন (চসিক)",
      address: "Nagar Bhaban, Tiger Pass",
      phone: "031-626242",
      phones: ["031626242"],
      area: "Tiger Pass",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: true,
      notes: "নগর ভবন, পরিচ্ছন্নতা, জন্মনিবন্ধন, হোল্ডিং ট্যাক্স ও পৌর সেবা।"
    },
    {
      id: "govt_4",
      name: "Chattogram Development Authority (CDA)",
      nameBn: "চট্টগ্রাম উন্নয়ন কর্তৃপক্ষ (সিডিএ)",
      address: "CDA Bhaban, Court Road, Kotowali",
      phone: "031-624401",
      phones: ["031624401"],
      area: "Court Road / Kotwali",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: true,
      notes: "নগর পরিকল্পনা, ভবন নির্মাণ অনুমোদন ও উন্নয়ন প্রকল্প।"
    },
    {
      id: "govt_5",
      name: "Bibhagiyo Passport o Visa Office, Chattogram",
      nameBn: "বিভাগীয় পাসপোর্ট ও ভিসা অফিস, চট্টগ্রাম",
      address: "DT Road, Mansurabad",
      phone: "",
      phones: [],
      area: "Mansurabad",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৪:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "মনসুরাবাদ। ই-পাসপোর্ট ও ভিসা আবেদন এবং ডেলিভারি।"
    },
    {
      id: "govt_6",
      name: "Ancholik Passport Office, Chandgaon",
      nameBn: "আঞ্চলিক পাসপোর্ট অফিস, চান্দগাঁও",
      address: "Chandgaon",
      phone: "",
      phones: [],
      area: "Chandgaon",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৪:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "চান্দগাঁও ও সংলগ্ন উপজেলার পাসপোর্ট সেবা কেন্দ্র।"
    },
    {
      id: "govt_7",
      name: "BRTA - Chattogram Metro Circle",
      nameBn: "বিআরটিএ - চট্টগ্রাম মেট্রো সার্কেল",
      address: "Hathazari Road, Notunpara / Aman Bazar",
      phone: "",
      phones: [],
      area: "Notunpara / Aman Bazar",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "ড্রাইভিং লাইসেন্স, গাড়ির রেজিস্ট্রেশন ও ফিটনেস নবায়ন।"
    },
    {
      id: "govt_8",
      name: "Customs House, Chattogram",
      nameBn: "কাস্টমস হাউস, চট্টগ্রাম",
      address: "World Trade Centre, Agrabad",
      phone: "031-723100",
      phones: ["031723100"],
      area: "Agrabad",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: true,
      notes: "আমদানি-রপ্তানি শুল্ক ও কাস্টমস ছাড়পত্র।"
    },
    {
      id: "govt_9",
      name: "Chattogram Port Authority",
      nameBn: "চট্টগ্রাম বন্দর কর্তৃপক্ষ",
      address: "Bandar Bhaban, Bandar",
      phone: "",
      phones: [],
      area: "Bandar",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "বন্দর ভবন, শিপিং ও কার্গো অপারেশনাল নিয়ন্ত্রণ।"
    },
    {
      id: "govt_10",
      name: "Chattogram WASA (CWASA)",
      nameBn: "চট্টগ্রাম ওয়াসা (সিওয়াসা)",
      address: "WASA Bhaban, M.M. Ali Road, Dampara",
      phone: "031-612641",
      phones: ["031612641"],
      area: "Dampara",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: true,
      notes: "ওয়াসা ভবন দামপাড়া, সুপেয় পানি সরবরাহ ও পয়ঃনিষ্কাশন।"
    },
    {
      id: "govt_11",
      name: "Zila Nirbachon Office (NID)",
      nameBn: "জেলা নির্বাচন অফিস (এনআইডি)",
      address: "Court Hill area, Kotowali",
      phone: "",
      phones: [],
      area: "Court Hill / Kotwali",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "ভোটার আইডি কার্ড, এনআইডি সংশোধন ও নতুন নিবন্ধন।"
    },
    {
      id: "govt_12",
      name: "Chattogram Zila Parishad",
      nameBn: "চট্টগ্রাম জেলা পরিষদ",
      address: "Court Hill, Kotowali",
      phone: "",
      phones: [],
      area: "Court Hill / Kotwali",
      timing: "রবি-বৃহস্পতি ৯:০০ AM - ৫:০০ PM (শুক্র-শনি বন্ধ)",
      verified: false,
      verifyText: "verify korte hobe",
      notes: "জেলা পর্যায়ের গ্রামীণ অবকাঠামো উন্নয়ন দপ্তর।"
    }
  ],

  bloodBanks: [
    {
      id: "bb_1",
      name: "Fatema Begum Red Crescent Blood Center",
      nameBn: "ফাতেমা বেগম রেড ক্রিসেন্ট ব্লাড সেন্টার",
      address: "395 Anderkilla",
      phone: "031-620926; 01815-850533; 01819-353445",
      phones: ["031620926", "01815850533", "01819353445"],
      area: "Anderkilla",
      type: "Blood Bank / Institution",
      notes: "রেড ক্রিসেন্ট ব্লাড ব্যাংক, রক্ত সংগ্রহ ও নিরাপদ রক্ত সঞ্চালন কেন্দ্র।"
    },
    {
      id: "bb_2",
      name: "Sandhani - Chittagong Medical College Unit",
      nameBn: "সন্ধানী - চট্টগ্রাম মেডিকেল কলেজ ইউনিট",
      address: "Chittagong Medical College, Panchlaish",
      phone: "031-616625",
      phones: ["031616625"],
      area: "Panchlaish",
      type: "Student Voluntary Blood Bank",
      notes: "চমেক ক্যাম্পাস, ২৪ ঘণ্টা জরুরি রক্তের খোঁজ ও ডোনার ম্যানেজমেন্ট।"
    },
    {
      id: "bb_3",
      name: "Chittagong Blood Bank & Transfusion Centre",
      nameBn: "চট্টগ্রাম ব্লাড ব্যাংক অ্যান্ড ট্রান্সফিউশন সেন্টার",
      address: "Mayabini building, 57 K.B. Fazlul Kader Rd, East Gate",
      phone: "01837-690914",
      phones: ["01837690914"],
      area: "Panchlaish",
      type: "Blood Transfusion Centre",
      notes: "মায়াবিনী বিল্ডিং, চমেক পূর্ব গেট।"
    },
    {
      id: "bb_4",
      name: "Evercare Hospital Chattogram Blood Bank (24/7)",
      nameBn: "এভারকেয়ার হসপিটাল ব্লাড ব্যাংক (২৪/৭)",
      address: "Ananna Residential Area, Oxygen-Kuwaish Rd",
      phone: "09610800444; Hotline 09612310663",
      phones: ["09610800444", "09612310663"],
      area: "Oxygen / Hathazari",
      type: "Hospital Blood Bank",
      notes: "আন্তর্জাতিক মানসম্পন্ন স্ক্রিনিং ও কম্পোনেন্ট সেপারেশন ইউনিট।"
    },
    {
      id: "bb_5",
      name: "Quantum Foundation - Kazir Dewri Branch",
      nameBn: "কোয়ান্টাম ফাউন্ডেশন - কাজীর দেউড়ি শাখা",
      address: "Kazi Bari By Lane, Kazir Dewri",
      phone: "01848-366539",
      phones: ["01848366539"],
      area: "Kazir Dewri",
      type: "Voluntary Blood Bank",
      notes: "স্বেচ্ছায় রক্তদান ল্যাব ও জরুরি রক্ত সরবরাহ।"
    },
    {
      id: "bb_6",
      name: "Quantum Foundation - O.R. Nizam Rd",
      nameBn: "কোয়ান্টাম ফাউন্ডেশন - ও.আর. নিজাম রোড",
      address: "O.R. Nizam Rd R/A Rd",
      phone: "01711-393010",
      phones: ["01711393010"],
      area: "O.R. Nizam Rd / GEC",
      type: "Voluntary Blood Bank",
      notes: "ও.আর. নিজাম রোড আবাসিক এলাকা শাখা।"
    },
    {
      id: "bb_7",
      name: "CMCH Blood Bank",
      nameBn: "চমেক ব্লাড ব্যাংক (CMCH)",
      address: "57 K.B. Fazlul Kader Rd, Panchlaish",
      phone: "Via CMCH 031-619597; emergency 999",
      phones: ["031619597", "999"],
      area: "Panchlaish",
      type: "Govt Hospital Blood Bank",
      notes: "চমেক মূল ব্লাড ব্যাংক। জরুরি সংযোগ ৯৯৯ বা চমেক হটলাইন।"
    }
  ],

  sampleDonors: [
    // STRICT: DO NOT present as real people. Label every donor as "SAMPLE DONOR". Phone 01XXX-XXXXXX.
    // Available = Yes if last donation > 3 months ago (before Aug 2026 for Nov 2026 demo), else No.
    {
      id: "sd_1",
      name: "Sample Donor 1",
      bloodGroup: "A+",
      area: "Agrabad",
      phone: "01XXX-XXXXXX",
      lastDonation: "Jan 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_2",
      name: "Sample Donor 2",
      bloodGroup: "A+",
      area: "Halishahar",
      phone: "01XXX-XXXXXX",
      lastDonation: "Aug 2026",
      available: "No",
      availableBn: "না (৩ মাস পূর্ণ হয়নি)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_3",
      name: "Sample Donor 3",
      bloodGroup: "A-",
      area: "Chawkbazar",
      phone: "01XXX-XXXXXX",
      lastDonation: "Feb 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_4",
      name: "Sample Donor 4",
      bloodGroup: "A-",
      area: "Panchlaish",
      phone: "01XXX-XXXXXX",
      lastDonation: "Sep 2026",
      available: "No",
      availableBn: "না (৩ মাস পূর্ণ হয়নি)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_5",
      name: "Sample Donor 5",
      bloodGroup: "B+",
      area: "Bahaddarhat",
      phone: "01XXX-XXXXXX",
      lastDonation: "Mar 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_6",
      name: "Sample Donor 6",
      bloodGroup: "B+",
      area: "GEC More",
      phone: "01XXX-XXXXXX",
      lastDonation: "Jul 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_7",
      name: "Sample Donor 7",
      bloodGroup: "B-",
      area: "Kotwali / New Market",
      phone: "01XXX-XXXXXX",
      lastDonation: "Jan 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_8",
      name: "Sample Donor 8",
      bloodGroup: "B-",
      area: "Patenga",
      phone: "01XXX-XXXXXX",
      lastDonation: "Oct 2026",
      available: "No",
      availableBn: "না (৩ মাস পূর্ণ হয়নি)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_9",
      name: "Sample Donor 9",
      bloodGroup: "O+",
      area: "Muradpur",
      phone: "01XXX-XXXXXX",
      lastDonation: "Feb 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_10",
      name: "Sample Donor 10",
      bloodGroup: "O+",
      area: "Chandgaon",
      phone: "01XXX-XXXXXX",
      lastDonation: "Jun 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_11",
      name: "Sample Donor 11",
      bloodGroup: "O-",
      area: "Agrabad",
      phone: "01XXX-XXXXXX",
      lastDonation: "Mar 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_12",
      name: "Sample Donor 12",
      bloodGroup: "O-",
      area: "Bayezid",
      phone: "01XXX-XXXXXX",
      lastDonation: "Sep 2026",
      available: "No",
      availableBn: "না (৩ মাস পূর্ণ হয়নি)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_13",
      name: "Sample Donor 13",
      bloodGroup: "AB+",
      area: "Khulshi",
      phone: "01XXX-XXXXXX",
      lastDonation: "Apr 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_14",
      name: "Sample Donor 14",
      bloodGroup: "AB+",
      area: "Hathazari Rd / Oxygen",
      phone: "01XXX-XXXXXX",
      lastDonation: "Aug 2026",
      available: "No",
      availableBn: "না (৩ মাস পূর্ণ হয়নি)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_15",
      name: "Sample Donor 15",
      bloodGroup: "AB-",
      area: "Jamal Khan",
      phone: "01XXX-XXXXXX",
      lastDonation: "Jan 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    },
    {
      id: "sd_16",
      name: "Sample Donor 16",
      bloodGroup: "AB-",
      area: "Double Mooring",
      phone: "01XXX-XXXXXX",
      lastDonation: "Jul 2026",
      available: "Yes",
      availableBn: "হ্যাঁ (উপলব্ধ)",
      notes: "নমুনা তথ্য - ডেমো উপস্থাপনার জন্য"
    }
  ],

  busRoutes: {
    meta: {
      note: "No 9 No. regular route in city. Fare 5-50 Tk approx, bus every 15-20 min approx.",
      noteBn: "শহরে ৯ নম্বর নিয়মিত বাস রুট নেই। বাস ভাড়া আনুমানিক ৫ - ৫০ টাকা, প্রতি ১৫-২০ মিনিট অন্তর বাস চলাচল করে।"
    },
    localRoutes: [
      {
        number: "1 No. Bus",
        numberBn: "১ নম্বর বাস",
        distance: "10 km",
        routeTitle: "New Market to Bahaddarhat",
        routeTitleBn: "নিউ মার্কেট থেকে বহদ্দারহাট",
        stops: "New Market - Laldighi - Anderkilla - Siraj Ud Daula Road - Chawkbazar - Kapasgola - Badurtola - Bahaddarhat",
        stopsBn: "নিউ মার্কেট - লালদীঘি - আন্দরকিল্লা - সিরাজউদ্দৌলা রোড - চকবাজার - কাপাসগোলা - বাদুড়তলা - বহদ্দারহাট",
        type: "Local Bus"
      },
      {
        number: "2 No. Bus",
        numberBn: "২ নম্বর বাস",
        distance: "14 km",
        routeTitle: "New Market to Kaptai Rastar Matha",
        routeTitleBn: "নিউ মার্কেট থেকে কাপ্তাই রাস্তার মাথা",
        stops: "New Market - Laldighi - Anderkilla - Jamal Khan - Chawkbazar - Medical / Probortok - 2 No. Gate - Muradpur - Bahaddarhat - Sharafat Petrol Pump - CMP Rastar Matha - Kaptai Rastar Matha",
        stopsBn: "নিউ মার্কেট - লালদীঘি - আন্দরকিল্লা - জামালখান - চকবাজার - মেডিকেল / প্রবর্তক - ২ নম্বর গেট - মুরাদপুর - বহদ্দারহাট - শরাফত পেট্রোল পাম্প - সিএমপি রাস্তার মাথা - কাপ্তাই রাস্তার মাথা",
        type: "Local Bus"
      },
      {
        number: "3 No. Bus",
        numberBn: "৩ নম্বর বাস [মিনিবাস]",
        distance: "14.5 km [Minibus]",
        routeTitle: "New Market to Chittagong University",
        routeTitleBn: "নিউ মার্কেট থেকে চট্টগ্রাম বিশ্ববিদ্যালয় (চবি)",
        stops: "New Market - DC Hill - Kazir Dewri - Almas - Wasa Mor - GEC - 2 No. Gate - Muradpur - Bibirhat - Oxygen - Fatehabad - Chittagong University",
        stopsBn: "নিউ মার্কেট - ডিসি হিল - কাজীর দেউড়ি - আলমাস - ওয়াসা মোড় - জিইসি - ২ নম্বর গেট - মুরাদপুর - বিবিরহাট - অক্সিজেন - ফতেহাবাদ - চট্টগ্রাম বিশ্ববিদ্যালয় (১নং গেট / জিরো পয়েন্ট)",
        type: "Minibus"
      },
      {
        number: "4 No. Bus",
        numberBn: "৪ নম্বর বাস [মিনিবাস]",
        distance: "15 km [Minibus]",
        routeTitle: "New Market to Bhatiyari",
        routeTitleBn: "নিউ মার্কেট থেকে ভাটিয়ারী",
        stops: "New Market - Tigerpass - Lalkhan Bazar - Wasa Mor - Garibullah Shah Mazar / GEC - Jhautola - AK Khan - Colonel Hat - Bhatiyari",
        stopsBn: "নিউ মার্কেট - টাইগারপাস - লালখান বাজার - ওয়াসা মোড় - গরিবুল্লাহ শাহ মাজার / জিইসি - ঝাউতলা - একে খান - কর্নেল হাট - ভাটিয়ারী",
        type: "Minibus"
      },
      {
        number: "5 No. Bus",
        numberBn: "৫ নম্বর বাস",
        distance: "18.60 km",
        routeTitle: "New Market to Shah Amanat Airport",
        routeTitleBn: "নিউ মার্কেট থেকে শাহ আমানত বিমানবন্দর",
        stops: "New Market - Tigerpass - Dewanhat - Agrabad - Barik Building - Saltgola - EPZ - Cement Crossing - Kathgor - Airport (sometimes irregular)",
        stopsBn: "নিউ মার্কেট - টাইগারপাস - দেওয়ানহাট - আগ্রাবাদ - বারিক বিল্ডিং - সল্টগোলা - ইপিজেড - সিমেন্ট ক্রসিং - কাঠগড় - বিমানবন্দর (মাঝে মাঝে অনিয়মিত)",
        type: "Local Bus"
      },
      {
        number: "6 No. Bus",
        numberBn: "৬ নম্বর বাস",
        distance: "16.60 km",
        routeTitle: "Laldighi to Patenga Sea Beach",
        routeTitleBn: "লালদীঘি থেকে পতেঙ্গা সমুদ্র সৈকত",
        stops: "Laldighi - New Market - Tigerpass - Dewanhat - Badamtoli (Agrabad) - Barik Building - Saltgola - EPZ - Bandartila - Cement Crossing - Kathgor - Sea Beach",
        stopsBn: "লালদীঘি - নিউ মার্কেট - টাইগারপাস - দেওয়ানহাট - বাদামতলী (আগ্রাবাদ) - বারিক বিল্ডিং - সল্টগোলা - ইপিজেড - বন্দরটিলা - সিমেন্ট ক্রসিং - কাঠগড় - সী বিচ",
        type: "Local Bus"
      },
      {
        number: "7 No. Bus",
        numberBn: "৭ নম্বর বাস",
        distance: "16.1 km",
        routeTitle: "New Market to Bhatiyari",
        routeTitleBn: "নিউ মার্কেট থেকে ভাটিয়ারী",
        stops: "New Market - Tigerpass - Dewanhat - Badamtoli (Agrabad) - Boropul - Alankar - Bhatiyari",
        stopsBn: "নিউ মার্কেট - টাইগারপাস - দেওয়ানহাট - বাদামতলী (আগ্রাবাদ) - বড়পোল - অলংকার - ভাটিয়ারী",
        type: "Local Bus"
      },
      {
        number: "8 No. Bus",
        numberBn: "৮ নম্বর বাস",
        distance: "8 km",
        routeTitle: "New Market to Oxygen",
        routeTitleBn: "নিউ মার্কেট থেকে অক্সিজেন",
        stops: "New Market - Tigerpass - Lalkhan Bazar - GEC - 2 No. Gate - Bayezid Bostami - Oxygen",
        stopsBn: "নিউ মার্কেট - টাইগারপাস - লালখান বাজার - জিইসি - ২ নম্বর গেট - বায়েজিদ বোস্তামী - অক্সিজেন",
        type: "Local Bus"
      },
      {
        number: "10 No. Bus",
        numberBn: "১০ নম্বর বাস",
        distance: "25 km",
        routeTitle: "Kalurghat to Kathgor / Patenga",
        routeTitleBn: "কালুরঘাট থেকে কাঠগড় / পতেঙ্গা",
        stops: "Kalurghat - Kaptai Rastar Matha - Bahaddarhat - Muradpur - 2 No. Gate - GEC - Lalkhan Bazar - Tigerpass - Dewanhat - Badamtoli (Agrabad) - Barik Building - Saltgola - EPZ - Bandartila - Cement Crossing - Kathgor",
        stopsBn: "কালুরঘাট - কাপ্তাই রাস্তার মাথা - বহদ্দারহাট - মুরাদপুর - ২ নম্বর গেট - জিইসি - লালখান বাজার - টাইগারপাস - দেওয়ানহাট - বাদামতলী (আগ্রাবাদ) - বারিক বিল্ডিং - সল্টগোলা - ইপিজেড - বন্দরটিলা - সিমেন্ট ক্রসিং - কাঠগড়",
        type: "Local Bus"
      },
      {
        number: "11 No. Bus",
        numberBn: "১১ নম্বর বাস",
        distance: "23 km",
        routeTitle: "Bhatiyari to Patenga Sea Beach",
        routeTitleBn: "ভাটিয়ারী থেকে পতেঙ্গা সমুদ্র সৈকত",
        stops: "Bhatiyari - Colonel Hat - AK Khan - Naya Bazar - Boropul - Saltgola Crossing - EPZ - Bandartila - Kathgor - Sea Beach",
        stopsBn: "ভাটিয়ারী - কর্নেল হাট - একে খান - নয়া বাজার - বড়পোল - সল্টগোলা ক্রসিং - ইপিজেড - বন্দরটিলা - কাঠগড় - সী বিচ",
        type: "Local Bus"
      },
      {
        number: "Metro Probhati (Counter Bus)",
        numberBn: "মেট্রো প্রভাতী (কাউন্টার বাস)",
        distance: "22 km",
        routeTitle: "Patenga to Bahaddarhat",
        routeTitleBn: "পতেঙ্গা থেকে বহদ্দারহাট",
        stops: "Counter: Bahaddarhat, Muradpur, 2 No. Gate, GEC, Wasa, Dewanhat, Agrabad, EPZ. Minimum fare 10 Tk (4 km), then 1.60 Tk per km.",
        stopsBn: "কাউন্টার: বহদ্দারহাট, মুরাদপুর, ২ নম্বর গেট, জিইসি, ওয়াসা, দেওয়ানহাট, আগ্রাবাদ, ইপিজেড। সর্বনিম্ন ভাড়া ১০ টাকা (প্রথম ৪ কিমি), পরবর্তী প্রতি কিমি ১.৬০ টাকা।",
        type: "Counter Service"
      }
    ],

    brtcServices: [
      {
        service: "BRTC City Service Double Decker",
        serviceBn: "বিআরটিসি সিটি সার্ভিস দ্বিতল বাস (ডাবল ডেকার)",
        route: "Khatgor to Kalurghat",
        routeBn: "কাঠগড় থেকে কালুরঘাট",
        details: "নিয়মিত দ্বিতল নগর পরিবহন সেবা।"
      },
      {
        service: "BRTC City Service",
        serviceBn: "বিআরটিসি সিটি সার্ভিস বাস",
        route: "Kalurghat to Patenga; Chittagong - New Market - Roujan; Chittagong University - New Market",
        routeBn: "কালুরঘাট থেকে পতেঙ্গা; চট্টগ্রাম - নিউ মার্কেট - রাউজান; চট্টগ্রাম বিশ্ববিদ্যালয় - নিউ মার্কেট",
        details: "গুরুত্বপূর্ণ নগর ও আন্তঃউপজেলা সার্ভিস।"
      },
      {
        service: "Student Double-Decker",
        serviceBn: "ছাত্র-ছাত্রীদের বিশেষ দ্বিতল বাস (স্টুডেন্ট সার্ভিস)",
        route: "Route 1: Bahaddarhat to New Market via Badurtola, Muradpur, Chawkbazar, Goni Bakery, Jamal Khan, Cheragi Pahar, Anderkilla, Kotwali.\nRoute 2: Oxygen to Agrabad via Muradpur, GEC Crossing, WASA Crossing, Tigerpass.",
        routeBn: "রুট ১: বহদ্দারহাট থেকে নিউ মার্কেট (বাদুড়তলা, মুরাদপুর, চকবাজার, গনি বেকারি, জামালখান, চেরাগী পাহাড়, আন্দরকিল্লা, কোতোয়ালী হয়ে)।\nরুট ২: অক্সিজেন থেকে আগ্রাবাদ (মুরাদপুর, জিইসি মোড়, ওয়াসা মোড়, টাইগারপাস হয়ে)।",
        details: "সময়সূচি: সকাল ৬:১৫ - দুপুর ১২:১৫ এবং বিকাল ৪:০০ - বিকাল ৫:০০ (সরকারি ছুটির দিন ব্যতীত)। শিক্ষার্থীদের জন্য নির্ধারিত বিশেষ ভাড়া।"
      },
      {
        service: "Tourist Double-Decker",
        serviceBn: "পর্যটন দ্বিতল বাস (ট্যুরিস্ট ডাবল ডেকার)",
        route: "Tiger Pass to DC Park (Faujdarhat) to Patenga Sea Beach",
        routeBn: "টাইগার পাস থেকে ডিসি পার্ক (ফৌজদারহাট) হয়ে পতেঙ্গা সমুদ্র সৈকত",
        details: "ভাড়া: টাইগার পাস - ডিসি পার্ক ৪০ টাকা | ডিসি পার্ক - পতেঙ্গা ৩০ টাকা | টাইগার পাস - পতেঙ্গা ৭০ টাকা।"
      },
      {
        service: "Pink Bus / Mohila Bus Service",
        serviceBn: "পিঙ্ক বাস / ডেডিকেটেড মহিলা বাস সার্ভিস",
        route: "Kalurghat to Patenga via Kaptai Rastar Matha, Bahaddarhat, Muradpur, GEC, Lalkhan Bazar, Tigerpass, Dewanhat, Agrabad, Freeport, Katghar, Patenga.",
        routeBn: "কালুরঘাট থেকে পতেঙ্গা (কাপ্তাই রাস্তার মাথা, বহদ্দারহাট, মুরাদপুর, জিইসি, লালখান বাজার, টাইগারপাস, দেওয়ানহাট, আগ্রাবাদ, ফ্রি পোর্ট, কাঠগড় হয়ে পতেঙ্গা)।",
        details: "শুধুমাত্র নারী যাত্রী ও স্কুল-কলেজগামী ছাত্রীদের জন্য নিরাপদ পরিবহন। ভাড়া: ১০ থেকে ৬৮ টাকা।"
      },
      {
        service: "Inter-District BRTC from Chittagong Depot",
        serviceBn: "চট্টগ্রাম ডিপো থেকে আন্তঃজেলা বিআরটিসি দূরপাল্লার বাস",
        route: "Dhaka, Cumilla, Noakhali, Chandpur, Sylhet-Sunamganj, Rangamati, Khagrachari-Tabalchhari, Barisal, plus Chittagong-Cox's Bazar (AC), Chittagong-Bandarban (AC), Chittagong-Patiya / Anwara / Karnaphuli.",
        routeBn: "ঢাকা, কুমিল্লা, নোয়াখালী, চাঁদপুর, সিলেট-সুনামগঞ্জ, রাঙামাটি, খাগড়াছড়ি-তবলছড়ি, বরিশাল; এছাড়াও চট্টগ্রাম-কক্সবাজার (এসি), চট্টগ্রাম-বান্দরবান (এসি), চট্টগ্রাম-পটিয়া / আনোয়ারা / কর্ণফুলী সার্ভিস।",
        details: "চট্টগ্রাম বিআরটিসি বাস টার্মিনাল/ডিপো থেকে নির্ধারিত সময়ে ছেড়ে যায়।"
      }
    ]
  },

  bazarDam: {
    meta: {
      currentDateLabel: "14 July 2026"
    },
    items: [
      { id: "bazar_1", item: "Chal (soru)", itemBn: "চাল (সরু / নাজিরশাইল/মিনিকেট)", unit: "per kg", unitBn: "প্রতি কেজি", price: 80.00 },
      { id: "bazar_2", item: "Chal (majhari)", itemBn: "চাল (মাঝারি / পাইজাম/লতা)", unit: "per kg", unitBn: "প্রতি কেজি", price: 57.50 },
      { id: "bazar_3", item: "Chal (mota)", itemBn: "চাল (মোটা / স্বর্ণা/ইরি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 51.00 },
      { id: "bazar_4", item: "Ata (packet)", itemBn: "আটা (প্যাকেটজাত)", unit: "per kg", unitBn: "প্রতি কেজি", price: 60.00 },
      { id: "bazar_5", item: "Ata (khola)", itemBn: "আটা (খোলা)", unit: "per kg", unitBn: "প্রতি কেজি", price: 43.50 },
      { id: "bazar_6", item: "Mosur dal (unnoto)", itemBn: "মসুর ডাল (উন্নত/চিকন দেশি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 160.00 },
      { id: "bazar_7", item: "Mosur dal (mota)", itemBn: "মসুর ডাল (মোটা/আমদানি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 95.00 },
      { id: "bazar_8", item: "Khesari dal", itemBn: "খেসারি ডাল", unit: "per kg", unitBn: "প্রতি কেজি", price: 95.00 },
      { id: "bazar_9", item: "Mug dal", itemBn: "মুগ ডাল", unit: "per kg", unitBn: "প্রতি কেজি", price: 145.00 },
      { id: "bazar_10", item: "Chhola", itemBn: "ছোলা (বুট)", unit: "per kg", unitBn: "প্রতি কেজি", price: 95.00 },
      { id: "bazar_11", item: "Tel - soybean (khola)", itemBn: "তেল - সয়াবিন (খোলা)", unit: "per litre", unitBn: "প্রতি লিটার", price: 187.00 },
      { id: "bazar_12", item: "Tel - palm (khola)", itemBn: "তেল - পাম তেল (খোলা)", unit: "per litre", unitBn: "প্রতি লিটার", price: 164.50 },
      { id: "bazar_13", item: "Piyaj (deshi)", itemBn: "পেঁয়াজ (দেশি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 40.00 },
      { id: "bazar_14", item: "Roshun (deshi)", itemBn: "রসুন (দেশি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 90.00 },
      { id: "bazar_15", item: "Roshun (amdani krito)", itemBn: "রসুন (আমদানিকৃত চিনা)", unit: "per kg", unitBn: "প্রতি কেজি", price: 145.00 },
      { id: "bazar_16", item: "Ada (amdani krito)", itemBn: "আদা (আমদানিকৃত)", unit: "per kg", unitBn: "প্রতি কেজি", price: 155.00 },
      { id: "bazar_17", item: "Shukna morich (deshi)", itemBn: "শুকনা মরিচ (দেশি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 335.00 },
      { id: "bazar_18", item: "Kacha morich", itemBn: "কাঁচা মরিচ", unit: "per kg", unitBn: "প্রতি কেজি", price: 160.00 },
      { id: "bazar_19", item: "Rui mach (chasher)", itemBn: "রুই মাছ (চাষের মাঝারি/বড়)", unit: "per kg", unitBn: "প্রতি কেজি", price: 425.00 },
      { id: "bazar_20", item: "Katol mach (chasher)", itemBn: "কাতল মাছ (চাষের)", unit: "per kg", unitBn: "প্রতি কেজি", price: 390.00 },
      { id: "bazar_21", item: "Ilish mach", itemBn: "ইলিশ মাছ (মাঝারি ১ কেজি সাইজ)", unit: "per kg", unitBn: "প্রতি কেজি", price: 1850.00 },
      { id: "bazar_22", item: "Morog-murgi (deshi)", itemBn: "মোরগ-মুরগি (দেশি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 625.00 },
      { id: "bazar_23", item: "Morog-murgi (kok/sonali)", itemBn: "মোরগ-মুরগি (কক/সোনালি)", unit: "per kg", unitBn: "প্রতি কেজি", price: 320.00 },
      { id: "bazar_24", item: "Morog-murgi farm (broiler)", itemBn: "মোরগ-মুরগি ব্রয়লার (ফার্ম)", unit: "per kg", unitBn: "প্রতি কেজি", price: 185.00 },
      { id: "bazar_25", item: "Dim murgi (sonali)", itemBn: "ডিম মুরগি (সোনালি)", unit: "4 ti", unitBn: "৪ টি (এক হালি)", price: 70.00 },
      { id: "bazar_26", item: "Dim murgi (farm)", itemBn: "ডিম মুরগি (ফার্ম লাল)", unit: "4 ti", unitBn: "৪ টি (এক হালি)", price: 41.66 },
      { id: "bazar_27", item: "Chini (sada-khola)", itemBn: "চিনি (সাদা-খোলা)", unit: "per kg", unitBn: "প্রতি কেজি", price: 105.00 },
      { id: "bazar_28", item: "Lobon (packet)", itemBn: "লবণ (আয়োডিনযুক্ত প্যাকেট)", unit: "per kg", unitBn: "প্রতি কেজি", price: 32.50 },
      { id: "bazar_29", item: "Alu", itemBn: "আলু (গোল দেশি/ডায়মন্ড)", unit: "per kg", unitBn: "প্রতি কেজি", price: 27.50 },
      { id: "bazar_30", item: "Sobji: Begun", itemBn: "সবজি: বেগুন (গোল/লম্বা)", unit: "per kg", unitBn: "প্রতি কেজি", price: 90.00 },
      { id: "bazar_31", item: "Sobji: Kacha pepe", itemBn: "সবজি: কাঁচা পেঁপে", unit: "per kg", unitBn: "প্রতি কেজি", price: 35.00 },
      { id: "bazar_32", item: "Sobji: Mishti kumra", itemBn: "সবজি: মিষ্টি কুমড়া", unit: "per kg", unitBn: "প্রতি কেজি", price: 47.50 }
    ]
  },

  // Emergency Core Directory
  emergencyNumbers: {
    primary: {
      number: "999",
      titleBn: "জাতীয় জরুরি সেবা (টোল ফ্রি)",
      titleEn: "National Emergency Helpline",
      servicesBn: "পুলিশ + ফায়ার সার্ভিস + অ্যাম্বুলেন্স ডিসপ্যাচ",
      servicesEn: "Police + Fire Service + Ambulance Dispatch",
      tollFree: true,
      badge: "সার্বক্ষণিক ২৪/৭ টোল ফ্রি"
    },
    fireDirect: {
      number: "16163",
      titleBn: "ফায়ার সার্ভিস সরাসরি হটলাইন",
      titleEn: "Fire Service Direct Hotline",
      tollFree: false,
      badge: "দ্রুততম অগ্নিনির্বাপণ"
    },
    fireHotline102: {
      number: "102",
      titleBn: "ফায়ার সার্ভিস জাতীয় হেল্পলাইন",
      titleEn: "Fire Service National Helpline",
      tollFree: false,
      badge: "কেন্দ্রীয়"
    },
    fireControlRoom: {
      number: "01730336666",
      titleBn: "চট্টগ্রাম ফায়ার সার্ভিস কন্ট্রোল রুম (আগ্রাবাদ সদর)",
      titleEn: "Chattogram Fire Control Room (Agrabad HQ)",
      tollFree: false,
      badge: "জরুরি কন্ট্রোল"
    },
    healthHelplineClarification: {
      number: "16263",
      titleBn: "স্বাস্থ্য বাতায়ন (স্বাস্থ্য তথ্য ও ডাক্তারি পরামর্শ)",
      titleEn: "Shastho Batayan (Health Information & Doctor Helpline)",
      noteBn: "সতর্কতা: ১৬২৬৩ কোনো অ্যাম্বুলেন্স নম্বর নয়! এটি স্বাস্থ্য মন্ত্রণালয়ের স্বাস্থ্য বাতায়ন পরামর্শ নম্বর। জরুরি অ্যাম্বুলেন্সের জন্য ৯৯৯ কল করুন।"
    }
  }
};

