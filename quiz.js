const countries = [
  { continent: 'Afrika', state: 'Alžírsko', capital: 'Alžír', currency: 'DZD', MPZ: 'DZ', location: 'S', religion: 'sunnitský islám', stateSystem: 'poloprezidentská republika' },
{ continent: 'Afrika', state: 'Angola', capital: 'Luanda', currency: 'AOA', MPZ: 'ANG', location: 'J', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Benin', capital: 'Porto Novo', currency: 'CFA', MPZ: 'DY', location: 'Z', religion: 'synkretičtí křesťané', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Botswana', capital: 'Gaborone', currency: 'BWP', MPZ: 'RB', location: 'J', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Burkina Faso', capital: 'Ouagadougou', currency: 'CFA', MPZ: 'BF', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Burundi', capital: 'Gitega', currency: 'BIF', MPZ: 'BU', location: 'ST', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Čad', capital: "N'Djamena", currency: 'CFA', MPZ: 'TCH', location: 'ST', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Egypt', capital: 'Káhira', currency: 'EGP', MPZ: 'ET', location: 'SV', religion: 'sunnitský islám', stateSystem: 'poloprezidentská republika' },
{ continent: 'Afrika', state: 'Gambie', capital: 'Banjul', currency: 'GMD', MPZ: 'WAG', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Ghana', capital: 'Accra', currency: 'GHS', MPZ: 'GH', location: 'Z', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'JAR', capital: 'Pretorie', currency: 'ZAR', MPZ: 'ZA', location: 'J', religion: 'protestanti', stateSystem: 'parlamentní republika' },
{ continent: 'Afrika', state: 'Jižní Súdán', capital: 'Džuba', currency: 'SSP', MPZ: 'SSD', location: 'SV', religion: 'římskokatolické', stateSystem: 'federativní prezidentská republika' },
{ continent: 'Afrika', state: 'Kamerun', capital: 'Yaoundé', currency: 'CFA', MPZ: 'CAM', location: 'Z', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Kapverdy', capital: 'Praia', currency: 'CVE', MPZ: 'CV', location: 'Z', religion: 'římskokatolické', stateSystem: 'poloprezidentská republika' },
{ continent: 'Afrika', state: 'Keňa', capital: 'Nairobi', currency: 'KES', MPZ: 'EAK', location: 'V', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Komory', capital: 'Moroni', currency: 'KMF', MPZ: 'COM', location: 'JV', religion: 'sunnitský islám', stateSystem: 'federativní prezidentská republika' },
{ continent: 'Afrika', state: 'Konžská demokratická republika', capital: 'Kinshasa', currency: 'CDF', MPZ: 'CD', location: 'ST', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Konžská republika', capital: 'Brazzaville', currency: 'CFA', MPZ: 'CG', location: 'ST', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Lesotho', capital: 'Maseru', currency: 'LSL', MPZ: 'LS', location: 'J', religion: 'římskokatolické', stateSystem: 'konstituční monarchie' },
{ continent: 'Afrika', state: 'Libérie', capital: 'Monrovia', currency: 'LRD', MPZ: 'LB', location: 'Z', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Libye', capital: 'Tripolis', currency: 'LYD', MPZ: 'LAR', location: 'S', religion: 'sunnitský islám', stateSystem: 'prozatimní vláda' },
{ continent: 'Afrika', state: 'Madagaskar', capital: 'Antananarivo', currency: 'MGA', MPZ: 'MG', location: 'JV', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Malawi', capital: 'Lilongwe', currency: 'MWK', MPZ: 'MW', location: 'JV', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Mali', capital: 'Bamako', currency: 'CFA', MPZ: 'RMM', location: 'Z', religion: 'sunnitský islám', stateSystem: 'poloprezidentská republika' },
{ continent: 'Afrika', state: 'Maroko', capital: 'Rabat', currency: 'MAD', MPZ: 'MA', location: 'S', religion: 'sunnitský islám', stateSystem: 'konstituční monarchie' },
{ continent: 'Afrika', state: 'Mauricius', capital: 'Port Louis', currency: 'MUR', MPZ: 'MU', location: 'JV', religion: 'hinduismus', stateSystem: 'parlamentní republika' },
{ continent: 'Afrika', state: 'Mauritánie', capital: 'Naukšott', currency: 'MRU', MPZ: 'RIM', location: 'Z', religion: 'sunnitský islám', stateSystem: 'islámská republika' },
{ continent: 'Afrika', state: 'Mosambik', capital: 'Maputo', currency: 'MZN', MPZ: 'MOC', location: 'JV', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Namibie', capital: 'Windhoek', currency: 'NAD', MPZ: 'NAM', location: 'J', religion: 'luteránské', stateSystem: 'poloprezidentská republika' },
{ continent: 'Afrika', state: 'Niger', capital: 'Niamey', currency: 'CFA', MPZ: 'RN', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Nigérie', capital: 'Abuja', currency: 'NGN', MPZ: 'WAN', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Pobřeží slonoviny', capital: 'Yamoussoukro', currency: 'CFA', MPZ: 'CI', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Rovníková Guinea', capital: 'Malabo', currency: 'CFA', MPZ: 'GQ', location: 'ST', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Rwanda', capital: 'Kigali', currency: 'RWF', MPZ: 'RWA', location: 'ST', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Senegal', capital: 'Dakar', currency: 'CFA', MPZ: 'SN', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Seychely', capital: 'Victoria', currency: 'SCR', MPZ: 'SY', location: 'JV', religion: 'římskokatolické', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Sierra Leone', capital: 'Freetown', currency: 'SLL', MPZ: 'WAL', location: 'Z', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Somálsko', capital: 'Mogadišo', currency: 'SOS', MPZ: 'SP', location: 'V', religion: 'sunnitský islám', stateSystem: 'federativní parlamentní republika' },
{ continent: 'Afrika', state: 'Středoafrická republika', capital: 'Bangui', currency: 'CFA', MPZ: 'RCA', location: 'ST', religion: 'animismus', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Súdán', capital: 'Chartúm', currency: 'SDG', MPZ: 'SUD', location: 'SV', religion: 'sunnitský islám', stateSystem: 'federativní prezidentská republika' },
{ continent: 'Afrika', state: 'Tanzanie', capital: 'Dodoma', currency: 'TZS', MPZ: 'EAT', location: 'JV', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Togo', capital: 'Lomé', currency: 'CFA', MPZ: 'RT', location: 'Z', religion: 'animismus', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Tunisko', capital: 'Tunis', currency: 'TND', MPZ: 'TN', location: 'S', religion: 'sunnitský islám', stateSystem: 'poloprezidentská republika' },
{ continent: 'Afrika', state: 'Uganda', capital: 'Kampala', currency: 'UGX', MPZ: 'EAU', location: 'JV', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Zambie', capital: 'Lusaka', currency: 'ZMK', MPZ: 'Z', location: 'ST', religion: 'protestanti', stateSystem: 'prezidentská republika' },
{ continent: 'Afrika', state: 'Zimbabwe', capital: 'Harare', currency: 'ZWD', MPZ: 'ZW', location: 'J', religion: 'synkretičtí křesťané', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Abcházie', capital: 'Suchumi', currency: 'RUB', MPZ: 'AB', location: 'Z', religion: 'pravoslaví', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Afghánistán', capital: 'Kábul', currency: 'AFN', MPZ: 'AFG', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'islámská republika' },
{ continent: 'Asie', state: 'Arménie', capital: 'Jerevan', currency: 'AMD', MPZ: 'ARM', location: 'JZ', religion: 'apoštolské', stateSystem: 'poloprezidentská republika' },
{ continent: 'Asie', state: 'Ázerbájdžán', capital: 'Baku', currency: 'AZN', MPZ: 'AZ', location: 'JZ', religion: 'šiitský islám', stateSystem: 'poloprezidentská republika' },
{ continent: 'Asie', state: 'Bahrajn', capital: 'Manáma', currency: 'BHD', MPZ: 'BRN', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Bangladéš', capital: 'Dháka', currency: 'BDT', MPZ: 'BD', location: 'J', religion: 'sunnitský islám', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Bhútán', capital: 'Thimphu', currency: 'BTN', MPZ: 'BHT', location: 'J', religion: 'budhismus', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Brunej', capital: 'Bandar Seri Begawan', currency: 'BND', MPZ: 'BRU', location: 'JV', religion: 'sunnitský islám', stateSystem: 'absolutní monarchie' },
{ continent: 'Asie', state: 'Čína', capital: 'Peking', currency: 'CNY', MPZ: 'PRC', location: 'V', religion: 'bez víry', stateSystem: 'lidově demokratická republika' },
{ continent: 'Asie', state: 'Filipíny', capital: 'Manila', currency: 'PHP', MPZ: 'RP', location: 'JV', religion: 'římskokatolické', stateSystem: 'unitární prezidentská republika' },
{ continent: 'Asie', state: 'Gruzie', capital: 'Tbilisi', currency: 'GEL', MPZ: 'GE', location: 'JZ', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Honkong', capital: 'Victoria', currency: 'HKD', MPZ: 'HK', location: 'JV', religion: 'bez víry', stateSystem: 'pod Čínskou správou' },
{ continent: 'Asie', state: 'Indie', capital: 'Nové Dillí', currency: 'INR', MPZ: 'IND', location: 'J', religion: 'hinduismus', stateSystem: 'federativní parlamentní republika' },
{ continent: 'Asie', state: 'Indonésie', capital: 'Jakarta', currency: 'IDR', MPZ: 'RI', location: 'JV', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Irák', capital: 'Bagdád', currency: 'IQD', MPZ: 'IRQ', location: 'JZ', religion: 'šiitský islám', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Írán', capital: 'Teherán', currency: 'IRR', MPZ: 'IR', location: 'JZ', religion: 'šiitský islám', stateSystem: 'islámská republika' },
{ continent: 'Asie', state: 'Izrael', capital: 'Jeruzalém', currency: 'ILS', MPZ: 'IL', location: 'JZ', religion: 'judaismus', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Japonsko', capital: 'Tokio', currency: 'JPY', MPZ: 'J', location: 'V', religion: 'šintoismus/budhismus', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Jemen', capital: 'Saná', currency: 'YER', MPZ: 'YAR', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Jižní Korea', capital: 'Soul', currency: 'KRW', MPZ: 'ROK', location: 'V', religion: 'bez víry', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Jordánsko', capital: 'Ammán', currency: 'JOD', MPZ: 'JOR', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Kambodža', capital: 'Phnompenh', currency: 'KHR', MPZ: 'K', location: 'JV', religion: 'budhismus', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Katar', capital: 'Dauhá', currency: 'QAR', MPZ: 'Q', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'absolutní monarchie' },
{ continent: 'Asie', state: 'Kazachstán', capital: 'Astana', currency: 'KZT', MPZ: 'KZ', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Kokosové ostrovy', capital: 'West Island', currency: 'AUD', MPZ: 'AUS', location: 'JV', religion: 'sunnitský islám', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Kuvajt', capital: 'Kuvajt', currency: 'KWD', MPZ: 'KWT', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'konstituční monarchie' },
{ continent: 'Asie', state: 'Kypr', capital: 'Nikósie', currency: 'EUR', MPZ: 'CY', location: 'JZ', religion: 'pravoslaví', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Kyrgyzstán', capital: 'Biškek', currency: 'KGS', MPZ: 'KS', location: 'ST', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Laos', capital: 'Vientiane', currency: 'LAK', MPZ: 'LAO', location: 'JV', religion: 'budhismus', stateSystem: 'lidově demokratická republika' },
{ continent: 'Asie', state: 'Libanon', capital: 'Bejrút', currency: 'LBP', MPZ: 'RL', location: 'JZ', religion: 'šiitský islám', stateSystem: 'konfesionální republika' },
{ continent: 'Asie', state: 'Malajsie', capital: 'Kuala Lumpur', currency: 'MYR', MPZ: 'MAL', location: 'JV', religion: 'sunnitský islám', stateSystem: 'federativní konstituční monarchie' },
{ continent: 'Asie', state: 'Maledivy', capital: 'Male', currency: 'MVR', MPZ: 'MV', location: 'J', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Mongolsko', capital: 'Ulánbátar', currency: 'MNT', MPZ: 'MGL', location: 'ST', religion: 'budhismus', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Myanmar', capital: 'Neipyijto', currency: 'MMK', MPZ: 'MYA', location: 'JV', religion: 'budhismus', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Nepál', capital: 'Káthmándú', currency: 'NPR', MPZ: 'NEP', location: 'J', religion: 'hinduismus', stateSystem: 'federativní demokratická republika' },
{ continent: 'Asie', state: 'Omán', capital: 'Maskat', currency: 'OMR', MPZ: 'OM', location: 'JZ', religion: 'ibádíjovský islám', stateSystem: 'absolutní monarchie' },
{ continent: 'Asie', state: 'Pakistán', capital: 'Islámábád', currency: 'PKR', MPZ: 'PK', location: 'J', religion: 'sunnitský islám', stateSystem: 'federativní parlamentní republika' },
{ continent: 'Asie', state: 'Rusko', capital: 'Moskva', currency: 'RUB', MPZ: 'RUS', location: 'V', religion: 'pravoslaví', stateSystem: 'federativní poloprezidentská republika' },
{ continent: 'Asie', state: 'Saúdská Arábie', capital: 'Rijád', currency: 'SAR', MPZ: 'KSA', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'absolutní monarchie' },
{ continent: 'Asie', state: 'Saúdská Arábie', capital: 'Rijád', currency: 'SAR', MPZ: 'KSA', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'absolutní monarchie' },
{ continent: 'Asie', state: 'Severní Korea', capital: 'Pchjongjang', currency: 'KPW', MPZ: 'KP', location: 'V', religion: 'bez víry', stateSystem: 'lidově demokratická republika' },
{ continent: 'Asie', state: 'Singapur', capital: 'Singapur', currency: 'SGD', MPZ: 'SGP', location: 'JV', religion: 'budhismus', stateSystem: 'parlamentní republika' },
{ continent: 'Asie', state: 'Spojené arabské emiráty', capital: 'Abú Zabí', currency: 'AED', MPZ: 'UAE', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'federativní konstituční monarchie' },
{ continent: 'Asie', state: 'Srí Lanka', capital: 'Šrí Džajavardanapura Kotte', currency: 'LKR', MPZ: 'CL', location: 'JV', religion: 'budhismus', stateSystem: 'poloprezidentská republika' },
{ continent: 'Asie', state: 'Sýrie', capital: 'Damašek', currency: 'SYP', MPZ: 'SYR', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'poloprezidentská republika' },
{ continent: 'Asie', state: 'Tádžikistán', capital: 'Dušanbe', currency: 'TJS', MPZ: 'TJ', location: 'ST', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Thajsko', capital: 'Bangkok', currency: 'THB', MPZ: 'T', location: 'JV', religion: 'budhismus', stateSystem: 'unitární konstituční monarchie' },
{ continent: 'Asie', state: 'Tchaj-wan', capital: 'Tchaj-pej', currency: 'TWD', MPZ: 'RC', location: 'JV', religion: 'budhismus', stateSystem: 'poloprezidentská republika' },
{ continent: 'Asie', state: 'Turecko', capital: 'Ankara', currency: 'TRY', MPZ: 'TR', location: 'JZ', religion: 'sunnitský islám', stateSystem: 'unitární prezidentská republika' },
{ continent: 'Asie', state: 'Turkmenistán', capital: 'Ašchabad', currency: 'TMT', MPZ: 'TM', location: 'ST', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Uzbekistán', capital: 'Taškent', currency: 'UZS', MPZ: 'UZ', location: 'ST', religion: 'sunnitský islám', stateSystem: 'prezidentská republika' },
{ continent: 'Asie', state: 'Vietnam', capital: 'Hanoj', currency: 'VND', MPZ: 'VN', location: 'JV', religion: 'bez víry', stateSystem: 'socialistická republika' },
{ continent: 'Asie', state: 'Východní Timor', capital: 'Dili', currency: 'USD', MPZ: 'TL', location: 'JV', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Albánie', capital: 'Tirana', currency: 'ALL', MPZ: 'AL', location: 'J', religion: 'sunnitský islám', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Andorra', capital: 'Andorra la Vella', currency: 'EUR', MPZ: 'AND', location: 'J', religion: 'římskokatolické', stateSystem: 'parlamentní knížectví' },
{ continent: 'Evropa', state: 'Belgie', capital: 'Brusel', currency: 'EUR', MPZ: 'B', location: 'Z', religion: 'římskokatolické', stateSystem: 'federativní konstituční monarchie' },
{ continent: 'Evropa', state: 'Bělorusko', capital: 'Minsk', currency: 'BYN', MPZ: 'BY', location: 'V', religion: 'pravoslaví', stateSystem: 'prezidentská republika' },
{ continent: 'Evropa', state: 'Bosna a Hercegovina', capital: 'Sarajevo', currency: 'BAM', MPZ: 'BiH', location: 'JV', religion: 'sunnitský islám', stateSystem: 'federativní republika' },
{ continent: 'Evropa', state: 'Bulharsko', capital: 'Sofie', currency: 'BGN', MPZ: 'BG', location: 'JV', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Černá Hora', capital: 'Podgorica', currency: 'EUR', MPZ: 'MNE', location: 'JV', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Česko', capital: 'Praha', currency: 'CZK', MPZ: 'CZ', location: 'ST', religion: 'bez víry', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Dánsko', capital: 'Kodaň', currency: 'DKK', MPZ: 'DK', location: 'S', religion: 'luteránské', stateSystem: 'konstituční monarchie' },
{ continent: 'Evropa', state: 'Estonsko', capital: 'Tallinn', currency: 'EUR', MPZ: 'EST', location: 'S', religion: 'bez víry', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Finsko', capital: 'Helsinky', currency: 'EUR', MPZ: 'FIN', location: 'S', religion: 'evangelické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Francie', capital: 'Paříž', currency: 'EUR', MPZ: 'FRA', location: 'Z', religion: 'římskokatolické', stateSystem: 'poloprezidentská republika' },
{ continent: 'Evropa', state: 'Gruzie', capital: 'Tbilisi', currency: 'GEL', MPZ: 'GE', location: 'JV', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Chorvatsko', capital: 'Záhřeb', currency: 'EUR', MPZ: 'HR', location: 'JV', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Irsko', capital: 'Dublin', currency: 'EUR', MPZ: 'IRL', location: 'SZ', religion: 'římskokatolické', stateSystem: 'unitární parlamentní republika' },
{ continent: 'Evropa', state: 'Island', capital: 'Reykjavík', currency: 'ISK', MPZ: 'ISL', location: 'S', religion: 'luteránské', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Itálie', capital: 'Řím', currency: 'EUR', MPZ: 'I', location: 'J', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Kypr', capital: 'Nikósie', currency: 'EUR', MPZ: 'CY', location: 'JV', religion: 'pravoslaví', stateSystem: 'prezidentská republika' },
{ continent: 'Evropa', state: 'Lichtenštejnsko', capital: 'Vaduz', currency: 'CHF', MPZ: 'FL', location: 'ST', religion: 'římskokatolické', stateSystem: 'knížectví' },
{ continent: 'Evropa', state: 'Litva', capital: 'Vilnius', currency: 'EUR', MPZ: 'LT', location: 'S', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Lotyšsko', capital: 'Riga', currency: 'EUR', MPZ: 'LV', location: 'S', religion: 'luteránské', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Lucembursko', capital: 'Lucemburk', currency: 'EUR', MPZ: 'L', location: 'Z', religion: 'římskokatolické', stateSystem: 'konstituční monarchie' },
{ continent: 'Evropa', state: 'Maďarsko', capital: 'Budapešť', currency: 'HUF', MPZ: 'H', location: 'ST', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Malta', capital: 'Valletta', currency: 'EUR', MPZ: 'M', location: 'J', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Moldavsko', capital: 'Kišiněv', currency: 'MDL', MPZ: 'MD', location: 'V', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Monako', capital: 'Monaco-Ville', currency: 'EUR', MPZ: 'MC', location: 'Z', religion: 'římskokatolické', stateSystem: 'knížectví' },
{ continent: 'Evropa', state: 'Německo', capital: 'Berlín', currency: 'EUR', MPZ: 'D', location: 'ST', religion: 'římskokatolické/protestanti', stateSystem: 'federativní parlamentní republika' },
{ continent: 'Evropa', state: 'Nizozemsko', capital: 'Amsterdam', currency: 'EUR', MPZ: 'NL', location: 'SZ', religion: 'bez víry', stateSystem: 'konstituční monarchie' },
{ continent: 'Evropa', state: 'Norsko', capital: 'Oslo', currency: 'NOK', MPZ: 'N', location: 'S', religion: 'luteránské', stateSystem: 'konstituční monarchie' },
{ continent: 'Evropa', state: 'Polsko', capital: 'Varšava', currency: 'PLN', MPZ: 'PL', location: 'ST', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Portugalsko', capital: 'Lisabon', currency: 'EUR', MPZ: 'P', location: 'JZ', religion: 'římskokatolické', stateSystem: 'poloprezidentská republika' },
{ continent: 'Evropa', state: 'Rakousko', capital: 'Vídeň', currency: 'EUR', MPZ: 'A', location: 'ST', religion: 'římskokatolické', stateSystem: 'federativní parlamentní republika' },
{ continent: 'Evropa', state: 'Rumunsko', capital: 'Bukurešť', currency: 'RON', MPZ: 'RO', location: 'V', religion: 'pravoslaví', stateSystem: 'poloprezidentská republika' },
{ continent: 'Evropa', state: 'Rusko', capital: 'Moskva', currency: 'RUB', MPZ: 'RUS', location: 'V', religion: 'pravoslaví', stateSystem: 'federativní poloprezidentská republika' },
{ continent: 'Evropa', state: 'Řecko', capital: 'Atény', currency: 'EUR', MPZ: 'GR', location: 'JV', religion: 'pravoslaví', stateSystem: 'unitární parlamentní republika' },
{ continent: 'Evropa', state: 'San Marino', capital: 'San Marino', currency: 'EUR', MPZ: 'RSM', location: 'J', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Severní Makedonie', capital: 'Skopje', currency: 'MKD', MPZ: 'MK', location: 'JV', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Slovensko', capital: 'Bratislava', currency: 'EUR', MPZ: 'SK', location: 'ST', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Slovinsko', capital: 'Lublaň', currency: 'EUR', MPZ: 'SLO', location: 'J', religion: 'římskokatolické', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Spojené království', capital: 'Londýn', currency: 'GBP', MPZ: 'UK', location: 'SZ', religion: 'anglikánské', stateSystem: 'unitární konstituční monarchie' },
{ continent: 'Evropa', state: 'Srbsko', capital: 'Bělehrad', currency: 'RSD', MPZ: 'SRB', location: 'JV', religion: 'pravoslaví', stateSystem: 'parlamentní republika' },
{ continent: 'Evropa', state: 'Španělsko', capital: 'Madrid', currency: 'EUR', MPZ: 'E', location: 'JZ', religion: 'římskokatolické', stateSystem: 'konstituční monarchie' },
{ continent: 'Evropa', state: 'Švédsko', capital: 'Stockholm', currency: 'SEK', MPZ: 'S', location: 'S', religion: 'luteránské', stateSystem: 'konstituční monarchie' },
{ continent: 'Evropa', state: 'Švýcarsko', capital: 'Bern', currency: 'CHF', MPZ: 'CH', location: 'ST', religion: 'římskokatolické', stateSystem: 'federativní republika' },
{ continent: 'Evropa', state: 'Turecko', capital: 'Ankara', currency: 'TRY', MPZ: 'TR', location: 'JV', religion: 'sunnitský islám', stateSystem: 'unitární prezidentská republika' },
{ continent: 'Evropa', state: 'Ukrajina', capital: 'Kyjev', currency: 'UAH', MPZ: 'UA', location: 'V', religion: 'pravoslaví', stateSystem: 'poloprezidentská republika' },
{ continent: 'Evropa', state: 'Vatikán', capital: 'Vatikán', currency: 'EUR', MPZ: 'V', location: 'J', religion: 'římskokatolické', stateSystem: 'teokratická monarchie' },

];

export default countries;