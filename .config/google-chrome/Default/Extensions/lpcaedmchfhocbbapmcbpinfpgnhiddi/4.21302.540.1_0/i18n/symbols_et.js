/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={i:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},h:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={i:{1E3:{other:"0\u00a0tuh"},1E4:{other:"00\u00a0tuh"},1E5:{other:"000\u00a0tuh"},1E6:{other:"0\u00a0mln"},1E7:{other:"00\u00a0mln"},1E8:{other:"000\u00a0mln"},1E9:{other:"0\u00a0mld"},1E10:{other:"00\u00a0mld"},1E11:{other:"000\u00a0mld"},1E12:{other:"0\u00a0trl"},1E13:{other:"00\u00a0trl"},1E14:{other:"000\u00a0trl"}},h:{1E3:{other:"0 tuhat"},1E4:{other:"00 tuhat"},1E5:{other:"000 tuhat"},1E6:{other:"0 miljonit"},1E7:{other:"00 miljonit"},1E8:{other:"000 miljonit"},1E9:{other:"0 miljardit"},1E10:{other:"00 miljardit"},
1E11:{other:"000 miljardit"},1E12:{other:"0 triljonit"},1E13:{other:"00 triljonit"},1E14:{other:"000 triljonit"}}};var d={ka:"y",ra:"y G",la:"MMM y",ma:"MMMM y",sa:"MM/y",K:"MMM d",L:"MMMM dd",N:"M/d",M:"MMMM d",pa:"MMM d, y",ia:"EEE, MMM d",qa:"EEE, MMM d, y",o:"d",oa:"MMM d, h:mm a zzzz"};d={ka:"y",ra:"y G",la:"MMM y",ma:"MMMM y",sa:"MM.y",K:"d. MMM",L:"dd. MMMM",N:"d.M",M:"d. MMMM",pa:"d. MMM y",ia:"EEE, d. MMM",qa:"EEE, d. MMMM y",o:"d",oa:"d. MMM HH:mm zzzz"};var h={B:["BC","AD"],A:["Before Christ","Anno Domini"],P:"JFMAMJJASOND".split(""),ba:"JFMAMJJASOND".split(""),J:"January February March April May June July August September October November December".split(" "),aa:"January February March April May June July August September October November December".split(" "),Y:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),da:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ha:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),$:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ea:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"SMTWTFS".split(""),ca:"SMTWTFS".split(""),Z:["Q1","Q2","Q3","Q4"],W:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],l:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ga:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],m:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],D:6,ja:[5,6],F:5};
h={B:["eKr","pKr"],A:["enne Kristust","p\u00e4rast Kristust"],P:"JVMAMJJASOND".split(""),ba:"JVMAMJJASOND".split(""),J:"jaanuar veebruar m\u00e4rts aprill mai juuni juuli august september oktoober november detsember".split(" "),aa:"jaanuar veebruar m\u00e4rts aprill mai juuni juuli august september oktoober november detsember".split(" "),Y:"jaan veebr m\u00e4rts apr mai juuni juuli aug sept okt nov dets".split(" "),da:"jaan veebr m\u00e4rts apr mai juuni juuli aug sept okt nov dets".split(" "),ha:"p\u00fchap\u00e4ev esmasp\u00e4ev teisip\u00e4ev kolmap\u00e4ev neljap\u00e4ev reede laup\u00e4ev".split(" "),
fa:"p\u00fchap\u00e4ev esmasp\u00e4ev teisip\u00e4ev kolmap\u00e4ev neljap\u00e4ev reede laup\u00e4ev".split(" "),$:"PETKNRL".split(""),ea:"PETKNRL".split(""),R:"PETKNRL".split(""),ca:"PETKNRL".split(""),Z:["K1","K2","K3","K4"],W:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],g:["AM","PM"],l:["EEEE, d. MMMM y","d. MMMM y","d. MMM y","dd.MM.yy"],ga:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],m:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],D:0,ja:[5,6],F:3};var l={u:".",G:",",S:"%",na:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"\u00a4#,##0.00",v:"USD"};l={u:",",G:"\u00a0",S:"%",na:"0",V:"+",I:"\u2212",C:"\u00d710^",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"#,##0.00\u00a0\u00a4",v:"EUR"};b("I18N_DATETIMESYMBOLS_ERAS",h.B);b("I18N_DATETIMESYMBOLS_ERANAMES",h.A);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_MONTHS",h.J);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.aa);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.da);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ha);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.$);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.ea);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.R);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.ca);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_QUARTERS",h.W);b("I18N_DATETIMESYMBOLS_AMPMS",h.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.l);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ga);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.m);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.D);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ja);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.F);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.ka);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ma);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.N);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.M);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ia);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.o);
void 0!==h.ta&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ta);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.u);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.S);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.na);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.V);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.I);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.C);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.U);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.H);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.s);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.X);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.v);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.i);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.h);