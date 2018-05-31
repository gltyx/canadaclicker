//these variables need to be saved

//General
var TreeClicks = 0;
var IceFishingClicks = 0;//# of fish caught
var BaitFished = 0;//# of bait fished
var KindnessClicks = 0;
var HockeyClicks = 0;
var BeardClicks = 0;

//Player skill xp.  define required xp per level elsewhere.
var MasterXP = 0;
var LumberjackXP = 0;
var IceFishingXP = 0;
var BeardXP = 0;
var KindnessXP = 0;
var HockeyXP = 0;

//Player Currencies
var Money = 0;
var Syrup = 0;
var Flannel = 0;

//totals.  also saved.
var totalPine = 0;
var totalSpruce = 0;
var totalMaple = 0;
var totalOak = 0;
var totalBirch = 0;
var totalAsh = 0;
var totalTrout = 0;
var totalSalmon = 0;
var totalCod = 0;
var totalCrab = 0;
var totalHalibut = 0;
var totalWhale = 0;
var totalPucks = 0;
var totalSticks = 0;
var totalGloves = 0;
var totalSkates = 0;
var totalGoals = 0;
var totalZambonies = 0;
var totalMinutes = 0;
var totalBrownBeard = 0;
var totalBlackBeard = 0;
var totalSilverBeard = 0;
var totalGoldBeard = 0;
var totalRedBeard = 0;
var totalGrizzlyBeard = 0;
var totalkind1 = 0;
var totalkind2 = 0;
var totalkind3 = 0;
var totalkind4 = 0;
var totalkind5 = 0;
var totalkind6 = 0;
var totalkind7 = 0;
var totalkind8 = 0;
var totalkind9 = 0;
var totalkind10 = 0;
var totalkind11 = 0;
var totalkind12 = 0;
var totalkind13 = 0;
var totalkind14 = 0;
var totalkind15 = 0;
var totalkind16 = 0;
var totalkind17 = 0;
var totalkind18 = 0;
var totalhockey1 = 0;
var totalhockey2 = 0;
var totalhockey3 = 0;
var totalhockey4 = 0;
var totalhockey5 = 0;
var totalhockey6 = 0;
var totalhockey7 = 0;
var totalhockey8 = 0;
var totalhockey9 = 0;
var totalhockey10 = 0;
var totalhockey11 = 0;
var totalhockey12 = 0;
var totalhockey13 = 0;
var totalhockey14 = 0;
var totalhockey15 = 0;
var totalInstantKindness = 0;
var totalInstantHockey = 0;
var totalMoney = 0;
var totalSyrup = 0;
var totalFlannel = 0;
var totalDaysPlayed = 1;
var daysStreak = 1;
var bestdaysStreak = 1;
//non saved totals
var totalTrees = 0;

//saved.  used to check days and day streak.  in milliseconds
var yesterday = 0;


var upgradeCount=0;
var aboot = 0;//sets to 1 if clicked
var reddit = 0;//sets to 1 if clicked
var importer = 0;//sets to 1 if clicked

//Inventory
	//Trees
var Pine = 0;
var Spruce = 0;
var Maple = 0;
var Oak = 0;
var Birch = 0;
var Ash = 0;
	//Fish
var Trout = 0;
var Salmon = 0;
var Cod = 0;
var Crab = 0;
var Halibut = 0;
var Whale = 0;
var Bait1 = 0; //fishing bait.  could be more bait so Bait1 is used.
var Bait1Cost = 100;
var Bait1Sell = 80;
	//Hockey
var Pucks = 0;
var Sticks = 0;
var Gloves = 0;
var Skates = 0;
var Goals = 0;
var Zambonies = 0;

//other
	
//Unlocked stuff - binary - 0 locked, 1 unlocked
	//Trees
var SpruceUnlock = 0;
var MapleUnlock = 0;
var OakUnlock = 0;
var BirchUnlock = 0;
var AshUnlock = 0;
	//Fish
var SalmonUnlock = 0;
var CodUnlock = 0;
var CrabUnlock = 0;
var HalibutUnlock = 0;
var WhaleUnlock = 0;
	//Hockey
var SticksUnlock = 0;
var GlovesUnlock = 0;
var SkatesUnlock = 0;
var GoalsUnlock = 0;
var ZamboniesUnlock = 0;
	

//Lumberjack helpers
var AxeBud = 0;
var AxeBudCostInitial = 100;//money
var AxeBudSpeed = 0.1;//wood per second
var ChainsawPal = 0;
var ChainsawPalCostInitial = 50000;
var ChainsawPalSpeed = 2.2;
var FellerFriend = 0;
var FellerFriendCostInitial = 250000;
var FellerFriendSpeed = 5.5;
var TransportGuy = 0;
var TransportGuyCostInitial = 3000000;
var TransportGuySpeed = 11;
	
//Lumberjack Upgrades (saved) - binary - 0 locked, 1 unlocked;  additional upgrade variables not saved
//for each series of upgrades, each successive upgrade will be available once the previous is bought
var Lu1 = 0;
var Lu1text = "1 经验每次点击";
var Lu1cost = 40; //cost in money
var Lu1req = 1;//Lumberjack level required to purchase
var Lu1num = 2; //xp multiplier
var Lu2 = 0;
var Lu2text = "1.5 经验每次点击";
var Lu2cost = 1000; //cost in money
var Lu2req = 3;//Lumberjack level required to purchase
var Lu2num = 3; //经验 multiplier
var Lu3 = 0;
var Lu3text = "2.5 经验每次点击";
var Lu3cost = 200000; //cost in money
var Lu3req = 5;//Lumberjack level required to purchase
var Lu3num = 5; //经验 multiplier
var Lu4 = 0;
var Lu4text = "5 经验每次点击";
var Lu4cost = 10000000; //cost in money
var Lu4req = 7;//Lumberjack level required to purchase
var Lu4num = 10; //经验 multiplier
var Lu5 = 0;
var Lu5text = "10 经验每次点击";
var Lu5cost = 10000000; //cost in money
var Lu5req = 9;//Lumberjack level required to purchase
var Lu5num = 20; //经验 multiplier
var Lu6 = 0;
var Lu6text = "2 树每次点击";
var Lu6cost = 250; //cost in money
var Lu6req = 2;//Lumberjack level required to purchase
var Lu6num = 2; //tree multiplier
var Lu7 = 0;
var Lu7text = "3 树每次点击";
var Lu7cost = 25000; //cost in money
var Lu7req = 4;//Lumberjack level required to purchase
var Lu7num = 3; //tree multiplier
var Lu8 = 0;
var Lu8text = "5 树每次点击";
var Lu8cost = 300000; //cost in money
var Lu8req = 6;//Lumberjack level required to purchase
var Lu8num = 5; //tree multiplier
var Lu9 = 0;
var Lu9text = "10 树每次点击";
var Lu9cost = 70000000; //cost in money
var Lu9req = 8;//Lumberjack level required to purchase
var Lu9num = 10; //tree multiplier
var Lu10 = 0;
var Lu10text = "20 树每次点击";
var Lu10cost = 200000000; //cost in money
var Lu10req = 10;//Lumberjack level required to purchase
var Lu10num = 20; //tree multiplier
var Lu11 = 0;
var Lu11text = "斧头等级2:效率提高50%";
var Lu11cost = 30000; //cost in money
var Lu11req = 4;//Lumberjack level required to purchase
var Lu11num = 1.5; //WoodPerSecond multiplier for this crew member
var Lu12 = 0;
var Lu12text = "斧头等级3:效率提高200%";
var Lu12cost = 50000000; //cost in money
var Lu12req = 8;//Lumberjack level required to purchase
var Lu12num = 3; //WoodPerSecond multiplier for this crew member
var Lu13 = 0;
var Lu13text = "电锯等级2:效率提高50%";
var Lu13cost = 400000; //cost in money
var Lu13req = 5;//Lumberjack level required to purchase
var Lu13num = 1.5; //WoodPerSecond multiplier for this crew member
var Lu14 = 0;
var Lu14text = "电锯等级3:效率提高100%";
var Lu14cost = 60000000; //cost in money
var Lu14req = 9;//Lumberjack level required to purchase
var Lu14num = 2; //WoodPerSecond multiplier for this crew member
var Lu15 = 0;
var Lu15text = "伐木工人等级2:  效率提高50%";
var Lu15cost = 9000000; //cost in money
var Lu15req = 6;//Lumberjack level required to purchase
var Lu15num = 1.5; //WoodPerSecond multiplier for this crew member
var Lu16 = 0;
var Lu16text = "伐木工人等级3:  效率提高100%";
var Lu16cost = 350000000; //cost in money
var Lu16req = 10;//Lumberjack level required to purchase
var Lu16num = 2; //WoodPerSecond multiplier for this crew member
var Lu17 = 0;
var Lu17text = "运输人员级别2:  效率提高50%";
var Lu17cost = 100000000; //cost in money
var Lu17req = 7;//Lumberjack level required to purchase
var Lu17num = 1.5; //WoodPerSecond multiplier for this crew member
var Lu18 = 0;
var Lu18text = "运输人员级别3:  效率提高100%";
var Lu18cost = 600000000; //cost in money
var Lu18req = 11;//Lumberjack level required to purchase
var Lu18num = 2; //WoodPerSecond multiplier for this crew member
var Lu19 = 0;
var Lu19text = "斧头等级4:  效率提高400%";
var Lu19cost = 700000000; //cost in money
var Lu19req = 12;//Lumberjack level required to purchase
var Lu19num = 5; //WoodPerSecond multiplier for this crew member
var Lu20 = 0;
var Lu20text = "30 树每次点击";
var Lu20cost = 2000000000; //cost in money
var Lu20req = 13;//Lumberjack level required to purchase
var Lu20num = 30; //tree multiplier
var Lu21 = 0;
var Lu21text = "电锯等级4:  效率提高200%";
var Lu21cost = 4000000000; //cost in money
var Lu21req = 13;//Lumberjack level required to purchase
var Lu21num = 3; //WoodPerSecond multiplier for this crew member
var Lu22 = 0;
var Lu22text = "20 经验每次点击";
var Lu22cost = 10000000000; //cost in money
var Lu22req = 14;//Lumberjack level required to purchase
var Lu22num = 40; //经验 multiplier
var Lu23 = 0;
var Lu23text = "伐木工人等级4:  效率提高200%";
var Lu23cost = 15000000000; //cost in money
var Lu23req = 14;//Lumberjack level required to purchase
var Lu23num = 3; //WoodPerSecond multiplier for this crew member
var Lu24 = 0;
var Lu24text = "运输人员等级4:  效率提高200%";
var Lu24cost = 25000000000; //cost in money
var Lu24req = 15;//Lumberjack level required to purchase
var Lu24num = 3; //WoodPerSecond multiplier for this crew member




//Beard Upgrades (saved) - binary - 0 locked, 1 unlocked;  additional upgrade variables not saved
//for each series of upgrades, each successive upgrade will be available once the previous is bought
var Be1 = 0;
var Be1text = "胡子目击事件的频率增加";
var Be1cost = 500; //cost in money
var Be1req = 1;//Beard level required to purchase
var Be1num = 2; //percent chance for beard
var Be2 = 0;
var Be2text = "胡子目击事件的频率增加";
var Be2cost = 40000; //cost in money
var Be2req = 2;//Beard level required to purchase
var Be2num = 3; //percent chance for beard
var Be3 = 0;
var Be3text = "胡子目击事件的频率增加";
var Be3cost = 600000; //cost in money
var Be3req = 5;//Beard level required to purchase
var Be3num = 4; //percent chance for beard
var Be4 = 0;
var Be4text = "胡子目击事件的频率增加";
var Be4cost = 2500000; //cost in money
var Be4req = 7;//Beard level required to purchase
var Be4num = 5; //percent chance for beard
var Be5 = 0;
var Be5text = "胡子目击事件的频率增加";
var Be5cost = 50000000; //cost in money
var Be5req = 9;//Beard level required to purchase
var Be5num = 6; //percent chance for beard
var Be6 = 0;
var Be6text = "增加胡子目击事件的持续时间";
var Be6cost = 750; //cost in money
var Be6req = 1;//Beard level required to purchase
var Be6num = 1; //seconds beard sightings are lengthened for
var Be7 = 0;
var Be7text = "增加胡子目击事件的持续时间";
var Be7cost = 60000; //cost in money
var Be7req = 3;//Beard level required to purchase
var Be7num = 2; //seconds beard sightings are lengthened for
var Be8 = 0;
var Be8text = "增加胡子目击事件的持续时间";
var Be8cost = 150000; //cost in money
var Be8req = 4;//Beard level required to purchase
var Be8num = 3; //seconds beard sightings are lengthened for
var Be9 = 0;
var Be9text = "增加胡子目击事件的持续时间";
var Be9cost = 1000000; //cost in money
var Be9req = 6;//Beard level required to purchase
var Be9num = 4; //seconds beard sightings are lengthened for
var Be10 = 0;
var Be10text = "增加胡子目击事件的持续时间";
var Be10cost = 30000000; //cost in money
var Be10req = 8;//Beard level required to purchase
var Be10num = 5; //seconds beard sightings are lengthened for
var Be11 = 0;
var Be11text = "糖浆胡子产量+1糖浆";
var Be11cost = 2000; //cost in money
var Be11req = 1;//Beard level required to purchase
var Be11num = 1; //additional syrup per syrup beard
var Be12 = 0;
var Be12text = "糖浆胡子产量+2糖浆";
var Be12cost = 20000; //cost in money
var Be12req = 2;//Beard level required to purchase
var Be12num = 2; //additional syrup per syrup beard
var Be13 = 0;
var Be13text = "糖浆胡子产量+3糖浆";
var Be13cost = 500000; //cost in money
var Be13req = 4;//Beard level required to purchase
var Be13num = 3; //additional syrup per syrup beard
var Be14 = 0;
var Be14text = "糖浆胡子产量+4糖浆";
var Be14cost = 2000000; //cost in money
var Be14req = 6;//Beard level required to purchase
var Be14num = 4; //additional syrup per syrup beard
var Be15 = 0;
var Be15text = "糖浆胡子产量+5糖浆";
var Be15cost = 20000000; //cost in money
var Be15req = 8;//Beard level required to purchase
var Be15num = 5; //additional syrup per syrup beard
var Be16 = 0;
var Be16text = "胡子目击事件的频率增加";
var Be16cost = 500000000; //cost in money
var Be16req = 11;//Beard level required to purchase
var Be16num = 7; //percent chance for beard
var Be17 = 0;
var Be17text = "胡子目击事件的频率增加";
var Be17cost = 8000000000; //cost in money
var Be17req = 14;//Beard level required to purchase
var Be17num = 8; //percent chance for beard
var Be18 = 0;
var Be18text = "增加胡子目击事件的持续时间";
var Be18cost = 700000000; //cost in money
var Be18req = 12;//Beard level required to purchase
var Be18num = 6; //seconds beard sightings are lengthened for
var Be19 = 0;
var Be19text = "增加胡子目击事件的持续时间";
var Be19cost = 20000000000; //cost in money
var Be19req = 15;//Beard level required to purchase
var Be19num = 7; //seconds beard sightings are lengthened for
var Be20 = 0;
var Be20text = "糖浆胡子产量+6糖浆";
var Be20cost = 200000000; //cost in money
var Be20req = 11;//Beard level required to purchase
var Be20num = 6; //additional syrup per syrup beard
var Be21 = 0;
var Be21text = "糖浆胡子产量+7糖浆";
var Be21cost = 2000000000; //cost in money
var Be21req = 13;//Beard level required to purchase
var Be21num = 7; //additional syrup per syrup beard
var Be22 = 0;
var Be22text = "增加 10% 胡子经验";
var Be22cost = 90000; //cost in money
var Be22req = 3;//Beard level required to purchase
var Be22num = 1.1; //经验 multiplier
var Be23 = 0;
var Be23text = "增加 20% 胡子经验";
var Be23cost = 800000; //cost in money
var Be23req = 5;//Beard level required to purchase
var Be23num = 1.2; //经验 multiplier
var Be24 = 0;
var Be24text = "增加 30% 胡子经验";
var Be24cost = 20000000; //cost in money
var Be24req = 7;//Beard level required to purchase
var Be24num = 1.3; //经验 multiplier
var Be25 = 0;
var Be25text = "增加 50% 胡子经验";
var Be25cost = 70000000; //cost in money
var Be25req = 9;//Beard level required to purchase
var Be25num = 1.5; //经验 multiplier
var Be26 = 0;
var Be26text = "增加 70% 胡子经验";
var Be26cost = 1000000000; //cost in money
var Be26req = 12;//Beard level required to purchase
var Be26num = 1.7; //经验 multiplier
var Be27 = 0;
var Be27text = "增加 90% 胡子经验";
var Be27cost = 12000000000; //cost in money
var Be27req = 14;//Beard level required to purchase
var Be27num = 1.9; //xp multiplier


//Fishing helpers
var isFishing = 0;//quantity of bait remaining to be fished
var FishingTime = 30;//number of seconds to consume each bait

var TroutXP = 5;
var SalmonXP = 15;
var CodXP = 40;
var CrabXP = 100;
var HalibutXP = 300;
var WhaleXP = 1000;
//Other variables


//Non-saved variables
//Level variables:  XP required for each level.
var L1 = 0;
var L2 = 50;
var L3 = 150;
var L4 = 450;
var L5 = 1350;
var L6 = 4050;
var L7 = 12150;
var L8 = 36450;
var L9 = 109350;
var L10 = 328050;
var L11 = Math.round(L10*2.5);
var L12 = Math.round(L11*2);
var L13 = Math.round(L12*1.8);
var L14 = Math.round(L13*1.6);
var L15 = Math.round(L14*1.5);
var L16 = Math.round(L15*1.4);
var L17 = Math.round(L16*1.3);
var L18 = Math.round(L17*1.25);
var L19 = Math.round(L18*1.2);
var L20 = Math.round(L19*1.15);



//Item money values
var PineValue = 1;
var SpruceValue = 5;
var MapleValue = 10;
var OakValue = 25;
var BirchValue = 200;
var AshValue = 4000;
	//Fish
var TroutValue = 200;
var SalmonValue = 500;
var CodValue = 1000;
var CrabValue = 4000;
var HalibutValue = 10000;
var WhaleValue = 100000;
	//Hockey
var PucksValue = 10;
var SticksValue = 100;
var GlovesValue = 1000;
var SkatesValue = 10000;
var GoalsValue = 100000;
var ZamboniesValue = 1000000;

//Unlock cost
	//Trees
var SpruceUnlockCost = 50;
var SpruceUnlockLevel = 1;
var MapleUnlockCost = 500;
var MapleUnlockLevel = 3;
var OakUnlockCost = 10000;
var OakUnlockLevel = 5;
var BirchUnlockCost = 50000000;
var BirchUnlockLevel = 8;
var AshUnlockCost = 2500000000;
var AshUnlockLevel = 12;
	//Fish
var SalmonUnlockCost = 50;
var SalmonUnlockLevel = 1;
var CodUnlockCost = 5000;
var CodUnlockLevel = 3;
var CrabUnlockCost = 100000;
var CrabUnlockLevel = 5;
var HalibutUnlockCost = 5000000;
var HalibutUnlockLevel = 8;
var WhaleUnlockCost = 250000000;
var WhaleUnlockLevel = 10;
	//Hockey
var SticksUnlockCost = 0;
var GlovesUnlockCost = 0;
var SkatesUnlockCost = 0;
var GoalsUnlockCost = 0;
var ZamboniesUnlockCost = 0;

//Ice Fishing upgrades
var Ic1 = 0;
var Ic1text = "一次放出的诱饵高达10个钩子";
var Ic1cost = 1000; //cost in money
var Ic1req = 1;//Ice fishing level required to purchase
var Ic1num = 10; //max baits
var Ic2 = 0;
var Ic2text = "一次放出的诱饵高达25个钩子";
var Ic2cost = 10000; //cost in money
var Ic2req = 3;//Ice fishing level required to purchase
var Ic2num = 25; //max baits
var Ic3 = 0;
var Ic3text = "一次放出的诱饵高达50个钩子";
var Ic3cost = 100000; //cost in money
var Ic3req = 5;//Ice fishing level required to purchase
var Ic3num = 50; //max baits
var Ic4 = 0;
var Ic4text = "一次放出的诱饵高达75个钩子";
var Ic4cost = 1000000; //cost in money
var Ic4req = 7;//Ice fishing level required to purchase
var Ic4num = 75; //max baits
var Ic5 = 0;
var Ic5text = "一次放出的诱饵高达100个钩子";
var Ic5cost = 10000000; //cost in money
var Ic5req = 9;//Ice fishing level required to purchase
var Ic5num = 100; //max baits
var Ic5 = 0;
var Ic5text = "一次放出的诱饵高达100个钩子";
var Ic5cost = 10000000; //cost in money
var Ic5req = 9;//Ice fishing level required to purchase
var Ic5num = 100; //max baits
var Ic6 = 0;
var Ic6text = "10% 几率一次抓到2条鱼";
var Ic6cost = 350; //cost in money
var Ic6req = 1;//Ice fishing level required to purchase
var Ic6num = 0.1; //increased chance to catch fish
var Ic7 = 0;
var Ic7text = "20%  几率一次抓到2条鱼";
var Ic7cost = 3500; //cost in money
var Ic7req = 2;//Ice fishing level required to purchase
var Ic7num = 0.2; //increased chance to catch fish
var Ic8 = 0;
var Ic8text = "30%  几率一次抓到2条鱼";
var Ic8cost = 35000; //cost in money
var Ic8req = 4;//Ice fishing level required to purchase
var Ic8num = 0.3; //increased chance to catch fish
var Ic9 = 0;
var Ic9text = "40%  几率一次抓到2条鱼";
var Ic9cost = 350000; //cost in money
var Ic9req = 6;//Ice fishing level required to purchase
var Ic9num = 0.4; //increased chance to catch fish
var Ic10 = 0;
var Ic10text = "50%  几率一次抓到2条鱼";
var Ic10cost = 3500000; //cost in money
var Ic10req = 8;//Ice fishing level required to purchase
var Ic10num = 0.5; //increased chance to catch fish
var Ic11 = 0;
var Ic11text = "10% 的冰上钓鱼经验增加";
var Ic11cost = 2500; //cost in money
var Ic11req = 2;//Ice fishing level required to purchase
var Ic11num = 0.1; //increased XP
var Ic12 = 0;
var Ic12text = "20% 的冰上钓鱼经验增加";
var Ic12cost = 25000; //cost in money
var Ic12req = 3;//Ice fishing level required to purchase
var Ic12num = 0.2; //increased XP
var Ic13 = 0;
var Ic13text = "30% 的冰上钓鱼经验增加";
var Ic13cost = 250000; //cost in money
var Ic13req = 5;//Ice fishing level required to purchase
var Ic13num = 0.3; //increased XP
var Ic14 = 0;
var Ic14text = "40% 的冰上钓鱼经验增加";
var Ic14cost = 2500000; //cost in money
var Ic14req = 7;//Ice fishing level required to purchase
var Ic14num = 0.4; //increased XP
var Ic15 = 0;
var Ic15text = "50% 的冰上钓鱼经验增加";
var Ic15cost = 25000000; //cost in money
var Ic15req = 9;//Ice fishing level required to purchase
var Ic15num = 0.5; //increased XP
var Ic16 = 0;
var Ic16text = "70% 的冰上钓鱼经验增加";
var Ic16cost = 500000000; //cost in money
var Ic16req = 11;//Ice fishing level required to purchase
var Ic16num = 0.7; //increased XP
var Ic17 = 0;
var Ic17text = "90% 的冰上钓鱼经验增加";
var Ic17cost = 2500000000; //cost in money
var Ic17req = 13;//Ice fishing level required to purchase
var Ic17num = 0.9; //increased XP
var Ic18 = 0;
var Ic18text = "60%  几率一次抓到2条鱼";
var Ic18cost = 350000000; //cost in money
var Ic18req = 12;//Ice fishing level required to purchase
var Ic18num = 0.6; //increased chance to catch fish
var Ic19 = 0;
var Ic19text = "70%  几率一次抓到2条鱼";
var Ic19cost = 15000000000; //cost in money
var Ic19req = 14;//Ice fishing level required to purchase
var Ic19num = 0.7; //increased chance to catch fish
var Ic20 = 0;
var Ic20text = "一次放出的诱饵高达200个钩子";
var Ic20cost = 100000000; //cost in money
var Ic20req = 10;//Ice fishing level required to purchase
var Ic20num = 200; //max baits
var Ic21 = 0;
var Ic21text = "一次放出的诱饵高达400个钩子";
var Ic21cost = 700000000; //cost in money
var Ic21req = 12;//Ice fishing level required to purchase
var Ic21num = 400; //max baits
var Ic22 = 0;
var Ic22text = "一次放出的诱饵高达750个钩子";
var Ic22cost = 18000000000; //cost in money
var Ic22req = 14;//Ice fishing level required to purchase
var Ic22num = 750; //max baits





//Beard variables

var BeardCooldown = 60;//default number of seconds that beard waits before becoming available again
var BeardProbability = 1;//percent chance (each second) that beard will appear again
var LastBeard = 0;//the time stamp of the last beard click or last beard disappearance
var BeardTime = 8;//default number of seconds that beard will be available to click before disappearing

//Beards to unlock. Brown is the default beard color
var BrownBeard = 1;
var BrownBeardText = "棕色胡子";
var BrownBeardCost = "免费";
var BrownBeardLevel = "无";//Beard Level required to purchase
var BrownBeardXP = 25;
var BlackBeard = 0;
var BlackBeardText = "黑色胡子";
var BlackBeardCost = 15000;
var BlackBeardLevel = 2;//Beard Level required to purchase
var BlackBeardXP = 100;
var SilverBeard = 0;
var SilverBeardText = "银色胡子";
var SilverBeardCost = 200000;
var SilverBeardLevel = 4;//Beard Level required to purchase
var SilverBeardXP = 500;
var GoldBeard = 0;
var GoldBeardText = "金色胡子";
var GoldBeardCost = 1000000;
var GoldBeardLevel = 6;//Beard Level required to purchase
var GoldBeardXP = 2500;
var RedBeard = 0;
var RedBeardText = "红色胡子";
var RedBeardCost = 50000000;
var RedBeardLevel = 8;//Beard Level required to purchase
var RedBeardXP = 7500;
var GrizzlyBeard = 0;
var GrizzlyBeardText = "灰胡子";
var GrizzlyBeardCost = 500000000;
var GrizzlyBeardLevel = 10;
var GrizzlyBeardXP = 25000;

var BrownBeardReward1 = 2;//x2 beard xp bonus
var BrownBeardReward2 = 10;//tree clicking xp multiplier for 30 seconds
var BrownBeardReward3 = 10;//tree clicking trees multiplier for 30 seconds
var BrownBeardReward4 = 10;//fish bait
var BrownBeardReward5 = 1;//syrup
var BlackBeardReward1 = 2;//x2 beard xp bonus
var BlackBeardReward2 = 15;//tree clicking xp multiplier for 30 seconds
var BlackBeardReward3 = 15;//tree clicking trees multiplier for 30 seconds
var BlackBeardReward4 = 50;//fish bait
var BlackBeardReward5 = 2;//syrup
var SilverBeardReward1 = 2;//x2 beard xp bonus
var SilverBeardReward2 = 20;//tree clicking xp multiplier for 30 seconds
var SilverBeardReward3 = 20;//tree clicking trees multiplier for 30 seconds
var SilverBeardReward4 = 100;//fish bait
var SilverBeardReward5 = 3;//syrup
var GoldBeardReward1 = 2;//x2 beard xp bonus
var GoldBeardReward2 = 25;//tree clicking xp multiplier for 30 seconds
var GoldBeardReward3 = 25;//tree clicking trees multiplier for 30 seconds
var GoldBeardReward4 = 300;//fish bait
var GoldBeardReward5 = 5;//syrup
var RedBeardReward1 = 2;//x2 beard xp bonus
var RedBeardReward2 = 50;//tree clicking xp multiplier for 30 seconds
var RedBeardReward3 = 50;//tree clicking trees multiplier for 30 seconds
var RedBeardReward4 = 1000;//fish bait
var RedBeardReward5 = 10;//syrup
var GrizzlyBeardReward1 = 2;//x2 beard xp bonus
var GrizzlyBeardReward2 = 100;//tree clicking xp multiplier for 30 seconds
var GrizzlyBeardReward3 = 100;//tree clicking trees multiplier for 30 seconds
var GrizzlyBeardReward4 = 10000;//fish bait
var GrizzlyBeardReward5 = 25;//syrup

var LumberjackXPMultiplier = 1;
var TreeMultiplier = 1;




//kindness variables
var kind1text = "建立收容所";
var kind1req = 1;//kindness level required
var kind1cost = 25;//Pine
var kind1costtext = "25 松树";
var kind1cooldown = 10;//seconds until available again
var kind1xp = 5; //xp gained from activity
var kind1time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind1inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind2text = "捐赠的鱼";
var kind2req = 2;//kindness level required
var kind2cost = 5;//Trout
var kind2costtext = "5 鳟鱼";
var kind2cooldown = 45;//seconds until available again
var kind2xp = 20; //xp gained from activity
var kind2time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind2inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind3text = "慈善曲棍球比赛";
var kind3req = 3;//kindness level required
var kind3cost = 5;//Pucks
var kind3costtext = "5 冰球";
var kind3cooldown = 120;//seconds until available again
var kind3xp = 50; //xp gained from activity
var kind3time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind3inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind4text = "为邻居举行派对";
var kind4req = 4;//kindness level required
var kind4cost = 10;//Salmon
var kind4costtext = "10 大马哈鱼";
var kind4cooldown = 300;//seconds until available again
var kind4xp = 100; //xp gained from activity
var kind4time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind4inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind5text = "种一片森林";
var kind5req = 5;//kindness level required
var kind5cost = 1000;//Oak
var kind5costtext = "1000 橡木";
var kind5cooldown = 600;//seconds until available again
var kind5xp = 175; //xp gained from activity
var kind5time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind5inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind6text = "巴迪的手很冷。 帮助他。";
var kind6req = 6;//kindness level required
var kind6cost = 4;//Gloves
var kind6costtext = "4 手套";
var kind6cooldown = 1800;//seconds until available again
var kind6xp = 500; //xp gained from activity
var kind6time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind6inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind7text = "主持人韦恩·格雷茨基的粉丝俱乐部";
var kind7req = 7;//kindness level required
var kind7cost = 2;//Skates
var kind7costtext = "2 冰鞋";
var kind7cooldown = 3600;//seconds until available again
var kind7xp = 900; //xp gained from activity
var kind7time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind7inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind8text = "桦树!";
var kind8req = 8;//kindness level required
var kind8cost = 5000;//Birch
var kind8costtext = "5,000 桦树";
var kind8cooldown = 7200;//seconds until available again
var kind8xp = 1750; //xp gained from activity
var kind8time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind8inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind9text = "大比目鱼宠物动物园";
var kind9req = 9;//kindness level required
var kind9cost = 30;//Halibut
var kind9costtext = "30 比目鱼";
var kind9cooldown = 14400;//seconds until available again
var kind9xp = 3400; //xp gained from activity
var kind9time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind9inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind10text = "准备冰。 这是游戏时间!";
var kind10req = 10;//kindness level required
var kind10cost = 1;//Zambonie
var kind10costtext = "1 赞博尼磨冰机";
var kind10cooldown = 28800;//seconds until available again
var kind10xp = 6500; //xp gained from activity
var kind10time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind10inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind11text = "开始一个糖浆农场";
var kind11req = 11;//kindness level required
var kind11cost = 15000;//Maple
var kind11costtext = "15,000 枫树";
var kind11cooldown = 86400;//seconds until available again
var kind11xp = 18750; //xp gained from activity
var kind11time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind11inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind12text = "涂上几条腿";
var kind12req = 12;//kindness level required
var kind12cost = 75;//Crab
var kind12costtext = "75 螃蟹";
var kind12cooldown = 172800;//seconds until available again
var kind12xp = 36250; //xp gained from activity
var kind12time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind12inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind13text = "建一个池塘溜冰场。";
var kind13req = 13;//kindness level required
var kind13cost = 125;//Sticks
var kind13costtext = "125 棍棒";
var kind13cooldown = 259200;//seconds until available again
var kind13xp = 50000; //xp gained from activity
var kind13time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind13inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind14text = "制造汽车空气清新剂。";
var kind14req = 14;//kindness level required
var kind14cost = 50000;//Spruce
var kind14costtext = "50,000 云杉";
var kind14cooldown = 345600;//seconds until available again
var kind14xp = 62500; //xp gained from activity
var kind14time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind14inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind15text = "溺爱是仅次于圣洁的。";
var kind15req = 15;//kindness level required
var kind15cost = 100;//Cod
var kind15costtext = "100 鳕鱼";
var kind15cooldown = 432000;//seconds until available again
var kind15xp = 72500; //xp gained from activity
var kind15time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind15inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind16text = "储存冬季木材堆。";
var kind16req = 16;//kindness level required
var kind16cost = 10000;//Ash
var kind16costtext = "10,000 岑树";
var kind16cooldown = 518400;//seconds until available again
var kind16xp = 81250; //xp gained from activity
var kind16time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind16inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind17text = "赞助加拿大奥运<br> 曲棍球队";
var kind17req = 17;//kindness level required
var kind17cost = 30;//Goals
var kind17costtext = "30 球门";
var kind17cooldown = 604800;//seconds until available again
var kind17xp = 91250; //xp gained from activity
var kind17time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind17inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var kind18text = "加拿大原住民家常便饭";
var kind18req = 18;//kindness level required
var kind18cost = 45;//Whale
var kind18costtext = "45 鲸鱼";
var kind18cooldown = 691200;//seconds until available again
var kind18xp = 100000; //xp gained from activity
var kind18time = 0;//saved variable.  placeholder for the time that item is clicked.
var kind18inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.




//Kindess Upgrades (saved) - binary - 0 locked, 1 unlocked;  additional upgrade variables not saved
//for each series of upgrades, each successive upgrade will be available once the previous is bought
var K1 = 0;
var K1text = "10% 善良经验增加";
var K1cost = 500; //cost in money
var K1req = 1;//Kindness level required to purchase
var K1num = 1.1; //Kindness XP multiplier
var K2 = 0;
var K2text = "20% 善良经验增加";
var K2cost = 50000; //cost in money
var K2req = 3;//Kindness level required to purchase
var K2num = 1.2; //Kindness XP multiplier
var K3 = 0;
var K3text = "30% 善良经验增加";
var K3cost = 500000; //cost in money
var K3req = 5;//Kindness level required to purchase
var K3num = 1.3; //Kindness XP multiplier
var K4 = 0;
var K4text = "40% 善良经验增加";
var K4cost = 5000000; //cost in money
var K4req = 7;//Kindness level required to purchase
var K4num = 1.4; //Kindness XP multiplier
var K5 = 0;
var K5text = "50% 善良经验增加";
var K5cost = 50000000; //cost in money
var K5req = 9;//Kindness level required to purchase
var K5num = 1.5; //Kindness XP multiplier
var K6 = 0;
var K6text = "10% 几率得到双倍经验";
var K6cost = 8000; //cost in money
var K6req = 2;//Kindness level required to purchase
var K6num = 0.1; //chance to get double XP
var K7 = 0;
var K7text = "20% 几率得到双倍经验";
var K7cost = 80000; //cost in money
var K7req = 4;//Kindness level required to purchase
var K7num = 0.2; //chance to get double XP
var K8 = 0;
var K8text = "30% 几率得到双倍经验";
var K8cost = 800000; //cost in money
var K8req = 6;//Kindness level required to purchase
var K8num = 0.3; //chance to get double XP
var K9 = 0;
var K9text = "40% 几率得到双倍经验";
var K9cost = 8000000; //cost in money
var K9req = 8;//Kindness level required to purchase
var K9num = 0.4; //chance to get double XP
var K10 = 0;
var K10text = "50% 几率得到双倍经验";
var K10cost = 80000000; //cost in money
var K10req = 10;//Kindness level required to purchase
var K10num = 0.5; //chance to get double XP
var K11 = 0;
var K11text = "5% 的机会，即时善良";
var K11cost = 9000; //cost in money
var K11req = 1;//Kindness level required to purchase
var K11num = 0.05; //chance to get double XP
var K12 = 0;
var K12text = "10% 的机会，即时善良";
var K12cost = 90000; //cost in money
var K12req = 3;//Kindness level required to purchase
var K12num = 0.1; //chance to get double XP
var K13 = 0;
var K13text = "15% 的机会，即时善良";
var K13cost = 900000; //cost in money
var K13req = 5;//Kindness level required to purchase
var K13num = 0.15; //chance to get double XP
var K14 = 0;
var K14text = "20% 的机会，即时善良";
var K14cost = 9000000; //cost in money
var K14req = 7;//Kindness level required to purchase
var K14num = 0.2; //chance to get double XP
var K15 = 0;
var K15text = "25% 的机会，即时善良";
var K15cost = 90000000; //cost in money
var K15req = 9;//Kindness level required to purchase
var K15num = 0.25; //chance to get double XP
var K16 = 0;
var K16text = "70% 善良经验增加";
var K16cost = 220000000; //cost in money
var K16req = 11;//Kindness level required to purchase
var K16num = 1.7; //Kindness XP multiplier
var K17 = 0;
var K17text = "90% 善良经验增加";
var K17cost = 900000000; //cost in money
var K17req = 13;//Kindness level required to purchase
var K17num = 1.9; //Kindness XP multiplier
var K18 = 0;
var K18text = "100% 善良经验增加";
var K18cost = 15000000000; //cost in money
var K18req = 15;//Kindness level required to purchase
var K18num = 2; //Kindness XP multiplier
var K19 = 0;
var K19text = "60% 几率得到双倍经验";
var K19cost = 600000000; //cost in money
var K19req = 12;//Kindness level required to purchase
var K19num = 0.5; //chance to get double XP
var K20 = 0;
var K20text = "70% 几率得到双倍经验";
var K20cost = 8000000000; //cost in money
var K20req = 14;//Kindness level required to purchase
var K20num = 0.5; //chance to get double XP
var K21 = 0;
var K21text = "80% 几率得到双倍经验";
var K21cost = 35000000000; //cost in money
var K21req = 16;//Kindness level required to purchase
var K21num = 0.5; //chance to get double XP


//Hockey Upgrades (saved) - binary - 0 locked, 1 unlocked;  additional upgrade variables not saved
//for each series of upgrades, each successive upgrade will be available once the previous is bought
var H1 = 0;
var H1text = "10%曲棍球经验增加";
var H1cost = 500; //cost in money
var H1req = 1;//Hockey level required to purchase
var H1num = 1.1; //Hockey XP multiplier
var H2 = 0;
var H2text = "20%曲棍球经验增加";
var H2cost = 50000; //cost in money
var H2req = 3;//Hockey level required to purchase
var H2num = 1.2; //Hockey XP multiplier
var H3 = 0;
var H3text = "30%曲棍球经验增加";
var H3cost = 500000; //cost in money
var H3req = 5;//Hockey level required to purchase
var H3num = 1.3; //Hockey XP multiplier
var H4 = 0;
var H4text = "40%曲棍球经验增加";
var H4cost = 5000000; //cost in money
var H4req = 7;//Hockey level required to purchase
var H4num = 1.4; //Hockey XP multiplier
var H5 = 0;
var H5text = "50%曲棍球经验增加";
var H5cost = 50000000; //cost in money
var H5req = 9;//Hockey level required to purchase
var H5num = 1.5; //Hockey XP multiplier
var H6 = 0;
var H6text = "10% 几率得到双倍经验";
var H6cost = 8000; //cost in money
var H6req = 2;//Hockey level required to purchase
var H6num = 0.1; //chance to get double XP
var H7 = 0;
var H7text = "20% 几率得到双倍经验";
var H7cost = 80000; //cost in money
var H7req = 4;//Hockey level required to purchase
var H7num = 0.2; //chance to get double XP
var H8 = 0;
var H8text = "30% 几率得到双倍经验";
var H8cost = 800000; //cost in money
var H8req = 6;//Hockey level required to purchase
var H8num = 0.3; //chance to get double XP
var H9 = 0;
var H9text = "40% 几率得到双倍经验";
var H9cost = 8000000; //cost in money
var H9req = 8;//Hockey level required to purchase
var H9num = 0.4; //chance to get double XP
var H10 = 0;
var H10text = "50% 几率得到双倍经验";
var H10cost = 400000000; //cost in money
var H10req = 10;//Hockey level required to purchase
var H10num = 0.5; //chance to get double XP
var H11 = 0;
var H11text = "5% 的机会，即时曲棍球";
var H11cost = 9000; //cost in money
var H11req = 1;//Hockey level required to purchase
var H11num = 0.05; //chance to get double XP
var H12 = 0;
var H12text = "10% 的机会，即时曲棍球";
var H12cost = 90000; //cost in money
var H12req = 3;//Hockey level required to purchase
var H12num = 0.1; //chance to get double XP
var H13 = 0;
var H13text = "15% 的机会，即时曲棍球";
var H13cost = 900000; //cost in money
var H13req = 5;//Hockey level required to purchase
var H13num = 0.15; //chance to get double XP
var H14 = 0;
var H14text = "20% 的机会，即时曲棍球";
var H14cost = 9000000; //cost in money
var H14req = 7;//Hockey level required to purchase
var H14num = 0.2; //chance to get double XP
var H15 = 0;
var H15text = "25% 的机会，即时曲棍球";
var H15cost = 90000000; //cost in money
var H15req = 9;//Hockey level required to purchase
var H15num = 0.25; //chance to get double XP
var H16 = 0;
var H16text = "10% 的机会得到双重奖励";
var H16cost = 5000; //cost in money
var H16req = 1;//Hockey level required to purchase
var H16num = 0.1; //Hockey XP multiplier
var H17 = 0;
var H17text = "20% 的机会得到双重奖励";
var H17cost = 50000; //cost in money
var H17req = 3;//Hockey level required to purchase
var H17num = 0.2; //Hockey XP multiplier
var H18 = 0;
var H18text = "30% 的机会得到双重奖励";
var H18cost = 500000; //cost in money
var H18req = 5;//Hockey level required to purchase
var H18num = 0.3; //Hockey XP multiplier
var H19 = 0;
var H19text = "40% 的机会得到双重奖励";
var H19cost = 5000000; //cost in money
var H19req = 7;//Hockey level required to purchase
var H19num = 0.4; //Hockey XP multiplier
var H20 = 0;
var H20text = "50% 的机会得到双重奖励";
var H20cost = 50000000; //cost in money
var H20req = 9;//Hockey level required to purchase
var H20num = 0.5; //Hockey XP multiplier
var H21 = 0;
var H21text = "60%曲棍球经验增加";
var H21cost = 500000000; //cost in money
var H21req = 11;//Hockey level required to purchase
var H21num = 1.6; //Hockey XP multiplier
var H22 = 0;
var H22text = "80%曲棍球经验增加";
var H22cost = 2000000000; //cost in money
var H22req = 13;//Hockey level required to purchase
var H22num = 1.8; //Hockey XP multiplier
var H23 = 0;
var H23text = "100%曲棍球经验增加";
var H23cost = 30000000000; //cost in money
var H23req = 15;//Hockey level required to purchase
var H23num = 2; //Hockey XP multiplier
var H24 = 0;
var H24text = "60% 几率得到双倍经验";
var H24cost = 900000000; //cost in money
var H24req = 12;//Hockey level required to purchase
var H24num = 0.6; //chance to get double XP
var H25 = 0;
var H25text = "70% 几率得到双倍经验";
var H25cost = 15000000000; //cost in money
var H25req = 14;//Hockey level required to purchase
var H25num = 0.7; //chance to get double XP
var H26 = 0;
var H26text = "60% 的机会得到双重奖励";
var H26cost = 500000000; //cost in money
var H26req = 11;//Hockey level required to purchase
var H26num = 0.6; //Hockey XP multiplier
var H27 = 0;
var H27text = "70% 的机会得到双重奖励";
var H27cost = 10000000000; //cost in money
var H27req = 14;//Hockey level required to purchase
var H27num = 0.7; //Hockey XP multiplier
var H28 = 0;
var H28text = "2 曲棍球活动在同一时间";
var H28cost = 250000; //cost in money
var H28req = 4;//Hockey level required to purchase
var H28num = 2; //# of hockey activities
var H29 = 0;
var H29text = "3 曲棍球活动在同一时间";
var H29cost = 50000000; //cost in money
var H29req = 8;//Hockey level required to purchase
var H29num = 3; //# of hockey activities



//hockey variables
var hockey1text = "拍击";
var hockey1req = 1;//hockey level required
var hockey1reward = 1;//Puck
var hockey1rewardtext = "1 冰球";
var hockey1cooldown = 10;//seconds until available again
var hockey1xp = 10; //xp gained from activity
var hockey1time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey1inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey2text = "球棒处理钻";
var hockey2req = 2;//hockey level required
var hockey2reward = 1;//Sticks
var hockey2rewardtext = "1 球棒";
var hockey2cooldown = 45;//seconds until available again
var hockey2xp = 40; //xp gained from activity
var hockey2time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey2inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey3text = "手腕射击";
var hockey3req = 3;//hockey level required
var hockey3reward = 5;//Pucks
var hockey3rewardtext = "5 冰球";
var hockey3cooldown = 120;//seconds until available again
var hockey3xp = 100; //xp gained from activity
var hockey3time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey3inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey4text = "三连假动作";
var hockey4req = 4;//hockey level required
var hockey4reward = 3;//Sticks
var hockey4rewardtext = "3 球棒";
var hockey4cooldown = 300;//seconds until available again
var hockey4xp = 200; //xp gained from activity
var hockey4time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey4inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey5text = "放下手套";
var hockey5req = 5;//hockey level required
var hockey5reward = 2;//Gloves
var hockey5rewardtext = "2 手套";
var hockey5cooldown = 600;//seconds until available again
var hockey5xp = 350; //xp gained from activity
var hockey5time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey5inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey6text = "右钩拳";
var hockey6req = 6;//hockey level required
var hockey6reward = 5;//Gloves
var hockey6rewardtext = "5 手套";
var hockey6cooldown = 1800;//seconds until available again
var hockey6xp = 1000; //xp gained from activity
var hockey6time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey6inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey7text = "速度滑冰";
var hockey7req = 7;//hockey level required
var hockey7reward = 2;//Skates
var hockey7rewardtext = "2 溜冰鞋";
var hockey7cooldown = 3600;//seconds until available again
var hockey7xp = 1800; //xp gained from activity
var hockey7time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey7inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey8text = "5 洞";
var hockey8req = 8;//hockey level required
var hockey8reward = 1;//Goals
var hockey8rewardtext = "1 射门";
var hockey8cooldown = 7200;//seconds until available again
var hockey8xp = 3500; //xp gained from activity
var hockey8time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey8inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey9text = "罚球";
var hockey9req = 9;//hockey level required
var hockey9reward = 3;//Goals
var hockey9rewardtext = "3 球门";
var hockey9cooldown = 14400;//seconds until available again
var hockey9xp = 6800; //xp gained from activity
var hockey9time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey9inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey10text = "把冰擦干净";
var hockey10req = 10;//hockey level required
var hockey10reward = 1;//Zambonie
var hockey10rewardtext = "1 赞博尼磨冰机";
var hockey10cooldown = 28800;//seconds until available again
var hockey10xp = 13000; //xp gained from activity
var hockey10time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey10inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey11text = "把刀锋放在队伍上。";
var hockey11req = 11;//hockey level required
var hockey11reward = 12;//Skates
var hockey11rewardtext = "12 溜冰鞋";
var hockey11cooldown = 86400;//seconds until available again
var hockey11xp = 37500; //xp gained from activity
var hockey11time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey11inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey12text = "射击练习";
var hockey12req = 12;//hockey level required
var hockey12reward = 100;//Pucks
var hockey12rewardtext = "100 冰球";
var hockey12cooldown = 172800;//seconds until available again
var hockey12xp = 72500; //xp gained from activity
var hockey12time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey12inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey13text = "交叉校验";
var hockey13req = 13;//hockey level required
var hockey13reward = 50;//Sticks
var hockey13rewardtext = "50 球棒";
var hockey13cooldown = 259200;//seconds until available again
var hockey13xp = 100000; //xp gained from activity
var hockey13time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey13inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey14text = "击掌吧!";
var hockey14req = 14;//hockey level required
var hockey14reward = 40;//Gloves
var hockey14rewardtext = "40 手套";
var hockey14cooldown = 345600;//seconds until available again
var hockey14xp = 125000; //xp gained from activity
var hockey14time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey14inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.
var hockey15text = "指挥中心舰队";
var hockey15req = 15;//hockey level required
var hockey15reward = 10;//zambonies
var hockey15rewardtext = "10 赞博尼磨冰机";
var hockey15cooldown = 432000;//seconds until available again
var hockey15xp = 145000; //xp gained from activity
var hockey15time = 0;//saved variable.  placeholder for the time that item is clicked.
var hockey15inprogress = 0;//saved variable.  binary to see if item is active.  this way i can award xp if the item is completed with the browser closed.





//achievements
var a1 = 0;
var a1text = "点击100次树";
var a1num = 100;//trees
var a1reward = 1;//flannel reward
var a2 = 0;
var a2text = "点击1000次树";
var a2num = 1000;//trees
var a2reward = 1;//flannel reward
var a3 = 0;
var a3text = "点击5000次树";
var a3num = 5000;//trees
var a3reward = 1;//flannel reward
var a4 = 0;
var a4text = "点击10000次树";
var a4num = 10000;//trees
var a4reward = 1;//flannel reward
var a5 = 0;
var a5text = "点击25000次树";
var a5num = 25000;//trees
var a5reward = 1;//flannel reward
var a6 = 0;
var a6text = "点击50000次树";
var a6num = 50000;//trees
var a6reward = 1;//flannel reward
var a7 = 0;
var a7text = "抓到 50 条鱼";
var a7num = 50;//fish
var a7reward = 1;//flannel reward
var a8 = 0;
var a8text = "抓到 500 条鱼";
var a8num = 500;//fish
var a8reward = 1;//flannel reward
var a9 = 0;
var a9text = "抓到 1000 条鱼";
var a9num = 1000;//fish
var a9reward = 1;//flannel reward
var a10 = 0;
var a10text = "抓到 5000 条鱼";
var a10num = 5000;//fish
var a10reward = 1;//flannel reward
var a11 = 0;
var a11text = "抓到 10000 条鱼";
var a11num = 10000;//fish
var a11reward = 1;//flannel reward
var a12 = 0;
var a12text = "抓到 25000 条鱼";
var a12num = 25000;//fish
var a12reward = 1;//flannel reward
var a13 = 0;
var a13text = "5 胡子";
var a13num = 5;//beards
var a13reward = 1;//flannel reward
var a14 = 0;
var a14text = "25 胡子";
var a14num = 25;//beards
var a14reward = 1;//flannel reward
var a15 = 0;
var a15text = "50 胡子";
var a15num = 50;//beards
var a15reward = 1;//flannel reward
var a16 = 0;
var a16text = "100 胡子";
var a16num = 100;//beards
var a16reward = 1;//flannel reward
var a17 = 0;
var a17text = "250 胡子";
var a17num = 250;//beards
var a17reward = 1;//flannel reward
var a18 = 0;
var a18text = "500 胡子";
var a18num = 500;//beards
var a18reward = 1;//flannel reward
var a19 = 0;
var a19text = "10 次善良活动";
var a19num = 10;//kindness activities
var a19reward = 1;//flannel reward
var a20 = 0;
var a20text = "50 次善良活动";
var a20num = 50;//kindness activities
var a20reward = 1;//flannel reward
var a21 = 0;
var a21text = "150 次善良活动";
var a21num = 150;//kindness activities
var a21reward = 1;//flannel reward
var a22 = 0;
var a22text = "500 次善良活动";
var a22num = 500;//kindness activities
var a22reward = 1;//flannel reward
var a23 = 0;
var a23text = "1,000 次善良活动";
var a23num = 1000;//kindness activities
var a23reward = 1;//flannel reward
var a24 = 0;
var a24text = "2,500 次善良活动";
var a24num = 2500;//kindness activities
var a24reward = 1;//flannel reward
var a25 = 0;
var a25text = "5 次曲棍球活动";
var a25num = 5;//Hockey activities
var a25reward = 1;//flannel reward
var a26 = 0;
var a26text = "25 次曲棍球活动";
var a26num = 25;//Hockey activities
var a26reward = 1;//flannel reward
var a27 = 0;
var a27text = "75 次曲棍球活动";
var a27num = 75;//Hockey activities
var a27reward = 1;//flannel reward
var a28 = 0;
var a28text = "250 次曲棍球活动";
var a28num = 250;//Hockey activities
var a28reward = 1;//flannel reward
var a29 = 0;
var a29text = "500 次曲棍球活动";
var a29num = 500;//Hockey activities
var a29reward = 1;//flannel reward
var a30 = 0;
var a30text = "1,250 次曲棍球活动";
var a30num = 1250;//Hockey activities
var a30reward = 1;//flannel reward
var a31 = 0;
var a31text = "购买3个升级";
var a31num = 3;//upgrades
var a31reward = 1;//flannel reward
var a32 = 0;
var a32text = "购买10个升级";
var a32num = 10;//upgrades
var a32reward = 1;//flannel reward
var a33 = 0;
var a33text = "购买25个升级";
var a33num = 25;//upgrades
var a33reward = 1;//flannel reward
var a34 = 0;
var a34text = "购买50个升级";
var a34num = 50;//upgrades
var a34reward = 1;//flannel reward
var a35 = 0;
var a35text = "购买75个升级";
var a35num = 75;//upgrades
var a35reward = 1;//flannel reward
var a36 = 0;
var a36text = "购买100个升级";
var a36num = 100;//upgrades
var a36reward = 1;//flannel reward
var a37 = 0;
var a37text = "玩游戏1分钟";
var a37num = 1;//Minutes played
var a37reward = 1;//flannel reward
var a38 = 0;
var a38text = "玩游戏60分钟";
var a38num = 60;//Minutes played
var a38reward = 1;//flannel reward
var a39 = 0;
var a39text = "玩游戏1000分钟";
var a39num = 1000;//Minutes played
var a39reward = 1;//flannel reward
var a40 = 0;
var a40text = "玩游戏10000分钟";
var a40num = 10000;//Minutes played
var a40reward = 1;//flannel reward
var a41 = 0;
var a41text = "玩游戏50000分钟";
var a41num = 50000;//Minutes played
var a41reward = 1;//flannel reward
var a42 = 0;
var a42text = "玩游戏250000分钟";
var a42num = 250000;//Minutes played
var a42reward = 1;//flannel reward
var a43 = 0;
var a43text = "收集500棵树";
var a43num = 500;//total trees
var a43reward = 1;//flannel reward
var a44 = 0;
var a44text = "收集5000棵树";
var a44num = 5000;//total trees
var a44reward = 1;//flannel reward
var a45 = 0;
var a45text = "收集50000棵树";
var a45num = 50000;//total trees
var a45reward = 1;//flannel reward
var a46 = 0;
var a46text = "收集100万棵树";
var a46num = 1000000;//total trees
var a46reward = 1;//flannel reward
var a47 = 0;
var a47text = "收集2500万棵树";
var a47num = 25000000;//total trees
var a47reward = 1;//flannel reward
var a48 = 0;
var a48text = "收集10亿棵树";
var a48num = 1000000000;//total trees
var a48reward = 1;//flannel reward
var a49 = 0;
var a49text = "赚取 $1";
var a49num = 1;//total money
var a49reward = 1;//flannel reward
var a50 = 0;
var a50text = "赚取 $1,000";
var a50num = 1000;//total money
var a50reward = 1;//flannel reward
var a51 = 0;
var a51text = "赚取 $1,000,000";
var a51num = 1000000;//total money
var a51reward = 1;//flannel reward
var a52 = 0;
var a52text = "赚取 $1,000,000,000";
var a52num = 1000000000;//total money
var a52reward = 1;//flannel reward
var a53 = 0;
var a53text = "赚取 $1,000,000,000,000";
var a53num = 1000000000000;//total money
var a53reward = 1;//flannel reward
var a54 = 0;
var a54text = "赚取 $1,000,000,000,000,000";
var a54num = 1000000000000000;//total money
var a54reward = 1;//flannel reward
var a55 = 0;
var a55text = "玩了3天游戏";
var a55num = 3;//days played
var a55reward = 1;//flannel reward
var a56 = 0;
var a56text = "玩了10天游戏";
var a56num = 10;//days played
var a56reward = 1;//flannel reward
var a57 = 0;
var a57text = "玩了25天游戏";
var a57num = 25;//days played
var a57reward = 1;//flannel reward
var a58 = 0;
var a58text = "玩了50天游戏";
var a58num = 50;//days played
var a58reward = 1;//flannel reward
var a59 = 0;
var a59text = "玩了100天游戏";
var a59num = 100;//days played
var a59reward = 1;//flannel reward
var a60 = 0;
var a60text = "玩了365天游戏";
var a60num = 365;//days played
var a60reward = 1;//flannel reward
var a61 = 0;
var a61text = "连续2天玩游戏。";
var a61num = 2;//days played in a row
var a61reward = 1;//flannel reward
var a62 = 0;
var a62text = "连续7天玩游戏";
var a62num = 7;//days played in a row
var a62reward = 1;//flannel reward
var a63 = 0;
var a63text = "连续14天玩游戏";
var a63num = 14;//days played in a row
var a63reward = 1;//flannel reward
var a64 = 0;
var a64text = "连续30天玩游戏";
var a64num = 30;//days played in a row
var a64reward = 1;//flannel reward
var a65 = 0;
var a65text = "连续60天玩游戏";
var a65num = 60;//days played in a row
var a65reward = 1;//flannel reward
var a66 = 0;
var a66text = "连续90天玩游戏";
var a66num = 90;//days played in a row
var a66reward = 1;//flannel reward
var a67 = 0;
var a67text = "查看加拿大点击的《关于》";
var a67num = 1;//NA
var a67reward = 1;//flannel reward
var a68 = 0;
var a68text = "访问 /r/CanadaClicker";
var a68num = 1;//NA
var a68reward = 1;//flannel reward
var a69 = 0;
var a69text = "幸运的你!百分之一的机会!";
var a69num = 100;//random odds 1:???
var a69reward = 1;//flannel reward
var a70 = 0;
var a70text = "幸运的你!千分之一的机会!";
var a70num = 1000;//random odds 1:???
var a70reward = 1;//flannel reward
var a71= 0;
var a71text = "幸运的你!万分之一的机会!";
var a71num = 10000;//random odds 1:???
var a71reward = 1;//flannel reward
var a72 = 0;
var a72text = "幸运的你!十万分之一的机会!";
var a72num = 100000;//random odds 1:???
var a72reward = 1;//flannel reward
var a73 = 0;
var a73text = "幸运的你!百万分之一的机会!";
var a73num = 1000000;//random odds 1:???
var a73reward = 1;//flannel reward
var a74 = 0;
var a74text = "幸运的你!千万分之一的机会!";
var a74num = 10000000;//random odds 1:???
var a74reward = 1;//flannel reward
var a75 = 0;
var a75text = "查看导入/导出页面";
var a75num = 1;//NA
var a75reward = 1;//flannel reward
var a76 = 0;
var a76text = "声望级别达到青铜!";
var a76num = 1;//Prestige level req
var a76reward = 1;//flannel reward
var a77 = 0;
var a77text = "声望级别达到白银!";
var a77num = 2;//Prestige level req
var a77reward = 1;//flannel reward
var a78 = 0;
var a78text = "声望级别达到黄金!";
var a78num = 3;//Prestige level req
var a78reward = 1;//flannel reward
var a79 = 0;
var a79text = "声望级别达到法兰绒!我的天 !";
var a79num = 4;//Prestige level req
var a79reward = 1;//flannel reward
var a80 = 0;
var a80text = "库存储备!";
var a80num = 18;//Number of inventory items > 0
var a80reward = 1;//flannel reward
var a81 = 0;
var a81text = "改变皮肤!";
var a81num = 1;//NA
var a81reward = 1;//flannel reward
var a82 = 0;
var a82text = "非常好!";
var a82num = 2;//Number of kindness activities active simultaneously
var a82reward = 1;//flannel reward
var a83 = 0;
var a83text = "非常非常好!";
var a83num = 5;//Number of kindness activities active simultaneously
var a83reward = 1;//flannel reward
var a84 = 0;
var a84text = "非常非常非常好!";
var a84num = 8;//Number of kindness activities active simultaneously
var a84reward = 1;//flannel reward
var a85 = 0;
var a85text = "非常非常非常非常好!";
var a85num = 12;//Number of kindness activities active simultaneously
var a85reward = 1;//flannel reward
var a86 = 0;
var a86text = "非常非常非常非常非常好!";
var a86num = 15;//Number of kindness activities active simultaneously
var a86reward = 1;//flannel reward
var a87 = 0;
var a87text = "善良超载!!!";
var a87num = 18;//Number of kindness activities active simultaneously
var a87reward = 1;//flannel reward
var a88 = 0;
var a88text = "越来越糖浆在这里！";
var a88num = 3;//Number of total syrup earned
var a88reward = 1;//flannel reward
var a89 = 0;
var a89text = "越来越糖浆在这里！";
var a89num = 25;//Number of total syrup earned
var a89reward = 1;//flannel reward
var a90 = 0;
var a90text = "越来越糖浆在这里！";
var a90num = 100;//Number of total syrup earned
var a90reward = 1;//flannel reward
var a91 = 0;
var a91text = "越来越糖浆在这里！";
var a91num = 500;//Number of total syrup earned
var a91reward = 1;//flannel reward
var a92 = 0;
var a92text = "越来越糖浆在这里！";
var a92num = 2000;//Number of total syrup earned
var a92reward = 1;//flannel reward
var a93 = 0;
var a93text = "越来越糖浆在这里！";
var a93num = 5000;//Number of total syrup earned
var a93reward = 1;//flannel reward
var a94 = 0;
var a94text = "得到灰熊!";
var a94num = 1;//Number of grizzly beards req
var a94reward = 1;//flannel reward
var a95 = 0;
var a95text = "得到一次鲸鱼!";
var a95num = 1;//Number of whales req
var a95reward = 1;//flannel reward
var a96 = 0;
var a96text = "曲棍球专业!";
var a96num = 15;//Number of different hockey tasks to complete
var a96reward = 1;//flannel reward
var a97 = 0;
var a97text = "加拿大国庆日!";
var a97num = 1;//NA
var a97reward = 1;//flannel reward






//Upgrades
//syrup upgrades: help you advance in the game
var su1 = 0;
var su1text = "+ $1/秒";
var su1cost = 1;//syrup cost
var su1num = 1;//money/second
var su2 = 0;
var su2text = "+ $5/秒";
var su2cost = 5;//syrup cost
var su2num = 5;//money/second
var su3 = 0;
var su3text = "+ $25/秒";
var su3cost = 25;//syrup cost
var su3num = 25;//money/second
var su4 = 0;
var su4text = "+ $100/秒";
var su4cost = 50;//syrup cost
var su4num = 100;//money/second
var su5 = 0;
var su5text = "+ $500/秒";
var su5cost = 100;//syrup cost
var su5num = 500;//money/second
var su6 = 0;
var su6text = "+ $2,000/秒";
var su6cost = 250;//syrup cost
var su6num = 2000;//money/second
var su7 = 0;
var su7text = "+ 1% 经验奖励";
var su7cost = 1;//syrup cost
var su7num = 1;//percent bonus XP
var su8 = 0;
var su8text = "+ 1% 经验奖励";
var su8cost = 5;//syrup cost
var su8num = 2;//percent bonus XP
var su9 = 0;
var su9text = "+ 1% 经验奖励";
var su9cost = 25;//syrup cost
var su9num = 3;//percent bonus XP
var su10 = 0;
var su10text = "+ 1% 经验奖励";
var su10cost = 50;//syrup cost
var su10num = 4;//percent bonus XP
var su11 = 0;
var su11text = "+ 1% 经验奖励";
var su11cost = 100;//syrup cost
var su11num = 5;//percent bonus XP
var su12 = 0;
var su12text = "+ 1% 经验奖励";
var su12cost = 250;//syrup cost
var su12num = 6;//percent bonus XP
var su13 = 0;
var su13text = "+ $8,000/秒";
var su13cost = 350;//syrup cost
var su13num = 8000;//money/second
var su14 = 0;
var su14text = "+ $25,000/秒";
var su14cost = 500;//syrup cost
var su14num = 25000;//money/second
var su15 = 0;
var su15text = "+ 1% 经验奖励";
var su15cost = 350;//syrup cost
var su15num = 7;//percent bonus XP
var su16 = 0;
var su16text = "+ 1% 经验奖励";
var su16cost = 500;//syrup cost
var su16num = 8;//percent bonus XP

//flannel upgrades: enhance game experience
var fu1 = 0;
var fu1text = "导入/导出存档功能";
var fu1cost = 5;//flannel cost
var fu2 = 0;
var fu2text = "冬令时节"; //skin for landscape and tree
var fu2cost = 10;//flannel cost
var fu3 = 0;
var fu3text = "熊";//skin for landscape and tree
var fu3cost = 10;//flannel cost
var fu4 = 0;
var fu4text = "曲棍球";//skin for landscape and tree
var fu4cost = 10;//flannel cost
var fu5 = 0;
var fu5text = "肉汁奶酪薯条";//skin for landscape and tree
var fu5cost = 10;//flannel cost
var fu6 = 0;
var fu6text = "克雷福晚餐";//skin for landscape and tree
var fu6cost = 10;//flannel cost
var fu7 = 0;
var fu7text = "蒂姆·霍顿斯";//skin for landscape and tree
var fu7cost = 10;//flannel cost
var fu8 = 0;
var fu8text = "北极熊";//skin for landscape and tree
var fu8cost = 10;//flannel cost
var fu9 = 0;
var fu9text = "驼鹿!";//skin for landscape and tree
var fu9cost = 10;//flannel cost
var fu10 = 0;
var fu10text = "加拿大骑警";//skin for landscape and tree
var fu10cost = 10;//flannel cost

var whatskin = 1;



//tutorial variables
var mainTutorial = 1;
var mainTutorialText = "<b>怎么玩加拿大点击?</b><br><ul align='left'><li>单击树开始砍树，开始填满您的库存。</li><li>卖东西赚钱。</li><li>看到了胡子就点一下它</li><li>探索其他选项卡来训练你的加拿大技能!</li>";
var inventoryTutorial = 1;
var inventoryTutorialText = "在这里您可以看到所有的项目。卖东西赚钱。";
var storeTutorial = 1;
var storeTutorialText = "<ul align='left'><li>把你的糖浆和法兰绒泡在这里!</li><li>获得更多的钱和经验和糖浆。</li><li>解锁游戏特征和图形与法兰绒。</li><li>升级你的声望</li>";
var statsTutorial = 1;
var statsTutorialText = "您的经验和级别在这里是可见的，还有一些额外的游戏属性。升级你的技能奖金!";
var achievementsTutorial = 1;
var achievementsTutorialText = "看看你所取得的成就。根据取得的成果，授予法兰绒";
var lumberjackTutorial = 1;
var lumberjackTutorialText = "<ul align='left'><li>通过点击树来提高你的伐木技能。</li><li>购买工人帮助你收集木材</li><li>解锁和升级伐木能力。</li><li>有些东西需要伐木工人等级。</li>";
var icefishingTutorial = 1;
var icefishingTutorialText = "<ul align='left'><li>购买鱼饵，开始钓鱼，获取鱼和经验。</li><li>解锁和升级冰上钓鱼技能。</li><li>有些东西需要通过冰上钓鱼获得。</li>";
var beardTutorial = 1;
var beardTutorialText = "<ul align='left'><li>当它出现在胡子经验的时候，点击左边的胡子</li><li>你可以从小胡子上弄到糖浆来在店里消费</li><li>解锁和提升胡须能力。</li><li>一些东西需要胡须等级。</li>";
var kindnessTutorial = 1;
var kindnessTutorialText = "<ul align='left'><li>使用你的库存来做一些好事，并得到善良的经验。</li><li>你一次可以激活不止一个的善良活动。</li><li>解锁和升级善良能力</li><li>一些事情需要的善良等级。</li>";
var hockeyTutorial = 1;
var hockeyTutorialText = "<ul align='left'><li>通过训练你的曲棍球技巧来获得曲棍球和项目。</li><li>你一次只能激活一个冰球活动。</li><li>解锁和升级曲棍球能力。</li><li>有些东西需要曲棍球等级。</li>";

//notification toggles
var IceFishingNotifyToggle = 1;
var KindnessNotifyToggle = 1;
var HockeyNotifyToggle = 1;

//prestige variables
var Prestige = 0;
var PrestigeXP = [1, 1.1, 1.2, 1.3, 1.4];//array position zero is a 1 multiplier:  no effect on XP
var PrestigeWorkerBonus = [1, 1.5, 2, 2.5, 3];//array position zero is a 1 multiplier:  no effect on WPS
var PrestigeNames = ["Red", "Bronze", "Silver", "Gold", "Flannel"];
var PrestigeReq = ["Unlock Ash", "Click 500 beards", "Catch 2000 fish", "Purchase 101 upgrades",  "Total skill levels"];
//PrestigeTotalLevelReq[Prestige]
var PrestigeTotalLevelReq = [60, 70, 80, 90, 100];
var PrestigeImage = ["mapleleaf", "PrestigeBronze", "PrestigeSilver", "PrestigeGold", "PrestigeFlannel"];
var PrestigeBeards = 0; //total beards at time of last prestige upgrade
var PrestigeFish = 0; //total fish caught at time of last prestige upgrade
var PrestigeUpgrades = 0;

var currentTab = 0;


//buff variables
var LumberjackBuff = 0;
var IceFishingBuff = 0;
var BeardBuff = 0;
var KindnessBuff = 0;
var HockeyBuff = 0;
var TotalLumberjackBuff = 0;
var TotalIceFishingBuff = 0;
var TotalBeardBuff = 0;
var TotalKindnessBuff = 0;
var TotalHockeyBuff = 0;
var NumberOfBuffs = [];
NumberOfBuffs["Lumberjack"] = 100;
NumberOfBuffs["IceFishing"] = 20;
NumberOfBuffs["Beard"] = 5;
NumberOfBuffs["Kindness"] = 10;
NumberOfBuffs["Hockey"] = 5;


var MakeItRain = 1;

//selling checkboxes
var PineCheck = 1;
var SpruceCheck = 1;
var MapleCheck = 1;
var OakCheck = 1;
var BirchCheck = 1;
var AshCheck = 1;
var TroutCheck = 1;
var SalmonCheck = 1;
var CodCheck = 1;
var CrabCheck = 1;
var HalibutCheck = 1;
var WhaleCheck = 1;
var PucksCheck = 1;
var SticksCheck = 1;
var GlovesCheck = 1;
var SkatesCheck = 1;
var GoalsCheck = 1;
var ZamboniesCheck = 1;

var changeSkins = 0;

var checkcanadaday = new Date();

function load(){ //loads saved game (from http://dhmholley.co.uk/incrementals-part-2.html)
	if (localStorage.getItem("SaveCanada") !== null){//check to see if saved game exists
	var savegame = JSON.parse(localStorage.getItem("SaveCanada"));
	if (typeof savegame.TreeClicks !== "undefined") TreeClicks = savegame.TreeClicks;
	if (typeof savegame.IceFishingClicks !== "undefined") IceFishingClicks = savegame.IceFishingClicks;
	if (typeof savegame.BaitFished !== "undefined") BaitFished = savegame.BaitFished;
	if (typeof savegame.BeardClicks !== "undefined") BeardClicks = savegame.BeardClicks;
	if (typeof savegame.KindnessClicks !== "undefined") KindnessClicks = savegame.KindnessClicks;
	if (typeof savegame.HockeyClicks !== "undefined") HockeyClicks = savegame.HockeyClicks;
	if (typeof savegame.MasterXP !== "undefined") MasterXP = savegame.MasterXP;
	if (typeof savegame.LumberjackXP !== "undefined") LumberjackXP = savegame.LumberjackXP;
	if (typeof savegame.IceFishingXP !== "undefined") IceFishingXP = savegame.IceFishingXP;
	if (typeof savegame.BeardXP !== "undefined") BeardXP = savegame.BeardXP;
	if (typeof savegame.KindnessXP !== "undefined") KindnessXP = savegame.KindnessXP;
	if (typeof savegame.HockeyXP !== "undefined") HockeyXP = savegame.HockeyXP;
	if (typeof savegame.Money !== "undefined") Money = savegame.Money;
	if (typeof savegame.Syrup !== "undefined") Syrup = savegame.Syrup;
	if (typeof savegame.Flannel !== "undefined") Flannel = savegame.Flannel;
	if (typeof savegame.Pine !== "undefined") Pine = savegame.Pine;
	if (typeof savegame.Spruce !== "undefined") Spruce = savegame.Spruce;
	if (typeof savegame.Maple !== "undefined") Maple = savegame.Maple;
	if (typeof savegame.Oak !== "undefined") Oak = savegame.Oak;
	if (typeof savegame.Birch !== "undefined") Birch = savegame.Birch;
	if (typeof savegame.Ash !== "undefined") Ash = savegame.Ash;
	if (typeof savegame.Trout !== "undefined") Trout = savegame.Trout;
	if (typeof savegame.Salmon !== "undefined") Salmon = savegame.Salmon;
	if (typeof savegame.Cod !== "undefined") Cod = savegame.Cod;
	if (typeof savegame.Crab !== "undefined") Crab = savegame.Crab;
	if (typeof savegame.Halibut !== "undefined") Halibut = savegame.Halibut;
	if (typeof savegame.Whale !== "undefined") Whale = savegame.Whale;
	if (typeof savegame.Pucks !== "undefined") Pucks = savegame.Pucks;
	if (typeof savegame.Sticks !== "undefined") Sticks = savegame.Sticks;
	if (typeof savegame.Gloves !== "undefined") Gloves = savegame.Gloves;
	if (typeof savegame.Skates !== "undefined") Skates = savegame.Skates;
	if (typeof savegame.Goals !== "undefined") Goals = savegame.Goals;
	if (typeof savegame.Zambonies !== "undefined") Zambonies = savegame.Zambonies;
	if (typeof savegame.SpruceUnlock !== "undefined") SpruceUnlock = savegame.SpruceUnlock;
	if (typeof savegame.MapleUnlock !== "undefined") MapleUnlock = savegame.MapleUnlock;
	if (typeof savegame.OakUnlock !== "undefined") OakUnlock = savegame.OakUnlock;
	if (typeof savegame.BirchUnlock !== "undefined") BirchUnlock = savegame.BirchUnlock;
	if (typeof savegame.AshUnlock !== "undefined") AshUnlock = savegame.AshUnlock;
	if (typeof savegame.SalmonUnlock !== "undefined") SalmonUnlock = savegame.SalmonUnlock;
	if (typeof savegame.CodUnlock !== "undefined") CodUnlock = savegame.CodUnlock;
	if (typeof savegame.CrabUnlock !== "undefined") CrabUnlock = savegame.CrabUnlock;
	if (typeof savegame.HalibutUnlock !== "undefined") HalibutUnlock = savegame.HalibutUnlock;
	if (typeof savegame.WhaleUnlock !== "undefined") WhaleUnlock = savegame.WhaleUnlock;
	if (typeof savegame.SticksUnlock !== "undefined") SticksUnlock = savegame.SticksUnlock;
	if (typeof savegame.GlovesUnlock !== "undefined") GlovesUnlock = savegame.GlovesUnlock;
	if (typeof savegame.SkatesUnlock !== "undefined") SkatesUnlock = savegame.SkatesUnlock;
	if (typeof savegame.GoalsUnlock !== "undefined") GoalsUnlock = savegame.GoalsUnlock;
	if (typeof savegame.ZamboniesUnlock !== "undefined") ZamboniesUnlock = savegame.ZamboniesUnlock;
	if (typeof savegame.Lu1 !== "undefined") Lu1 = savegame.Lu1;
	if (typeof savegame.Lu2 !== "undefined") Lu2 = savegame.Lu2;
	if (typeof savegame.Lu3 !== "undefined") Lu3 = savegame.Lu3;
	if (typeof savegame.Lu4 !== "undefined") Lu4 = savegame.Lu4;
	if (typeof savegame.Lu5 !== "undefined") Lu5 = savegame.Lu5;
	if (typeof savegame.Lu6 !== "undefined") Lu6 = savegame.Lu6;
	if (typeof savegame.Lu7 !== "undefined") Lu7 = savegame.Lu7;
	if (typeof savegame.Lu8 !== "undefined") Lu8 = savegame.Lu8;
	if (typeof savegame.Lu9 !== "undefined") Lu9 = savegame.Lu9;
	if (typeof savegame.Lu10 !== "undefined") Lu10 = savegame.Lu10;
	if (typeof savegame.Lu11 !== "undefined") Lu11 = savegame.Lu11;
	if (typeof savegame.Lu12 !== "undefined") Lu12 = savegame.Lu12;
	if (typeof savegame.Lu13 !== "undefined") Lu13 = savegame.Lu13;
	if (typeof savegame.Lu14 !== "undefined") Lu14 = savegame.Lu14;
	if (typeof savegame.Lu15 !== "undefined") Lu15 = savegame.Lu15;
	if (typeof savegame.Lu16 !== "undefined") Lu16 = savegame.Lu16;
	if (typeof savegame.Lu17 !== "undefined") Lu17 = savegame.Lu17;
	if (typeof savegame.Lu18 !== "undefined") Lu18 = savegame.Lu18;
	if (typeof savegame.Lu19 !== "undefined") Lu19 = savegame.Lu19;
	if (typeof savegame.Lu20 !== "undefined") Lu20 = savegame.Lu20;
	if (typeof savegame.Lu21 !== "undefined") Lu21 = savegame.Lu21;
	if (typeof savegame.Lu22 !== "undefined") Lu22 = savegame.Lu22;
	if (typeof savegame.Lu23 !== "undefined") Lu23 = savegame.Lu23;
	if (typeof savegame.Lu24 !== "undefined") Lu24 = savegame.Lu24;
	if (typeof savegame.AxeBud !== "undefined") AxeBud = savegame.AxeBud;
	if (typeof savegame.ChainsawPal !== "undefined") ChainsawPal = savegame.ChainsawPal;
	if (typeof savegame.FellerFriend !== "undefined") FellerFriend = savegame.FellerFriend;
	if (typeof savegame.TransportGuy !== "undefined") TransportGuy = savegame.TransportGuy;
	if (typeof savegame.Be1 !== "undefined") Be1 = savegame.Be1;
	if (typeof savegame.Be2 !== "undefined") Be2 = savegame.Be2;
	if (typeof savegame.Be3 !== "undefined") Be3 = savegame.Be3;
	if (typeof savegame.Be4 !== "undefined") Be4 = savegame.Be4;
	if (typeof savegame.Be5 !== "undefined") Be5 = savegame.Be5;
	if (typeof savegame.Be6 !== "undefined") Be6 = savegame.Be6;
	if (typeof savegame.Be7 !== "undefined") Be7 = savegame.Be7;
	if (typeof savegame.Be8 !== "undefined") Be8 = savegame.Be8;
	if (typeof savegame.Be9 !== "undefined") Be9 = savegame.Be9;
	if (typeof savegame.Be10 !== "undefined") Be10 = savegame.Be10;
	if (typeof savegame.Be11 !== "undefined") Be11 = savegame.Be11;
	if (typeof savegame.Be12 !== "undefined") Be12 = savegame.Be12;
	if (typeof savegame.Be13 !== "undefined") Be13 = savegame.Be13;
	if (typeof savegame.Be14 !== "undefined") Be14 = savegame.Be14;
	if (typeof savegame.Be15 !== "undefined") Be15 = savegame.Be15;
	if (typeof savegame.Be16 !== "undefined") Be16 = savegame.Be16;
	if (typeof savegame.Be17 !== "undefined") Be17 = savegame.Be17;
	if (typeof savegame.Be18 !== "undefined") Be18 = savegame.Be18;
	if (typeof savegame.Be19 !== "undefined") Be19 = savegame.Be19;
	if (typeof savegame.Be20 !== "undefined") Be20 = savegame.Be20;
	if (typeof savegame.Be21 !== "undefined") Be21 = savegame.Be21;
	if (typeof savegame.Be22 !== "undefined") Be22 = savegame.Be22;
	if (typeof savegame.Be23 !== "undefined") Be23 = savegame.Be23;
	if (typeof savegame.Be24 !== "undefined") Be24 = savegame.Be24;
	if (typeof savegame.Be25 !== "undefined") Be25 = savegame.Be25;
	if (typeof savegame.Be26 !== "undefined") Be26 = savegame.Be26;
	if (typeof savegame.Be27 !== "undefined") Be27 = savegame.Be27;
	if (typeof savegame.LastBeard !== "undefined") LastBeard = savegame.LastBeard;
	if (typeof savegame.BlackBeard !== "undefined") BlackBeard = savegame.BlackBeard;
	if (typeof savegame.SilverBeard !== "undefined") SilverBeard = savegame.SilverBeard;
	if (typeof savegame.GoldBeard !== "undefined") GoldBeard = savegame.GoldBeard;
	if (typeof savegame.RedBeard !== "undefined") RedBeard = savegame.RedBeard;
	if (typeof savegame.GrizzlyBeard !== "undefined") GrizzlyBeard = savegame.GrizzlyBeard;
	if (typeof savegame.Bait1 !== "undefined") Bait1 = savegame.Bait1;
	if (typeof savegame.Ic1 !== "undefined") Ic1 = savegame.Ic1;
	if (typeof savegame.Ic2 !== "undefined") Ic2 = savegame.Ic2;
	if (typeof savegame.Ic3 !== "undefined") Ic3 = savegame.Ic3;
	if (typeof savegame.Ic4 !== "undefined") Ic4 = savegame.Ic4;
	if (typeof savegame.Ic5 !== "undefined") Ic5 = savegame.Ic5;
	if (typeof savegame.Ic6 !== "undefined") Ic6 = savegame.Ic6;
	if (typeof savegame.Ic7 !== "undefined") Ic7 = savegame.Ic7;
	if (typeof savegame.Ic8 !== "undefined") Ic8 = savegame.Ic8;
	if (typeof savegame.Ic9 !== "undefined") Ic9 = savegame.Ic9;
	if (typeof savegame.Ic10 !== "undefined") Ic10 = savegame.Ic10;
	if (typeof savegame.Ic11 !== "undefined") Ic11 = savegame.Ic11;
	if (typeof savegame.Ic12 !== "undefined") Ic12 = savegame.Ic12;
	if (typeof savegame.Ic13 !== "undefined") Ic13 = savegame.Ic13;
	if (typeof savegame.Ic14 !== "undefined") Ic14 = savegame.Ic14;
	if (typeof savegame.Ic15 !== "undefined") Ic15 = savegame.Ic15;
	if (typeof savegame.Ic16 !== "undefined") Ic16 = savegame.Ic16;
	if (typeof savegame.Ic17 !== "undefined") Ic17 = savegame.Ic17;
	if (typeof savegame.Ic18 !== "undefined") Ic18 = savegame.Ic18;
	if (typeof savegame.Ic19 !== "undefined") Ic19 = savegame.Ic19;
	if (typeof savegame.Ic20 !== "undefined") Ic20 = savegame.Ic20;
	if (typeof savegame.Ic21 !== "undefined") Ic21 = savegame.Ic21;
	if (typeof savegame.Ic22 !== "undefined") Ic22 = savegame.Ic22;
	if (typeof savegame.kind1time !== "undefined") kind1time = savegame.kind1time;
	if (typeof savegame.kind1inprogress !== "undefined") kind1inprogress = savegame.kind1inprogress;
	if (typeof savegame.kind2time !== "undefined") kind2time = savegame.kind2time;
	if (typeof savegame.kind2inprogress !== "undefined") kind2inprogress = savegame.kind2inprogress;
	if (typeof savegame.kind3time !== "undefined") kind3time = savegame.kind3time;
	if (typeof savegame.kind3inprogress !== "undefined") kind3inprogress = savegame.kind3inprogress;
	if (typeof savegame.kind4time !== "undefined") kind4time = savegame.kind4time;
	if (typeof savegame.kind4inprogress !== "undefined") kind4inprogress = savegame.kind4inprogress;
	if (typeof savegame.kind5time !== "undefined") kind5time = savegame.kind5time;
	if (typeof savegame.kind5inprogress !== "undefined") kind5inprogress = savegame.kind5inprogress;
	if (typeof savegame.kind6time !== "undefined") kind6time = savegame.kind6time;
	if (typeof savegame.kind6inprogress !== "undefined") kind6inprogress = savegame.kind6inprogress;
	if (typeof savegame.kind7time !== "undefined") kind7time = savegame.kind7time;
	if (typeof savegame.kind7inprogress !== "undefined") kind7inprogress = savegame.kind7inprogress;
	if (typeof savegame.kind8time !== "undefined") kind8time = savegame.kind8time;
	if (typeof savegame.kind8inprogress !== "undefined") kind8inprogress = savegame.kind8inprogress;
	if (typeof savegame.kind9time !== "undefined") kind9time = savegame.kind9time;
	if (typeof savegame.kind9inprogress !== "undefined") kind9inprogress = savegame.kind9inprogress;
	if (typeof savegame.kind10time !== "undefined") kind10time = savegame.kind10time;
	if (typeof savegame.kind10inprogress !== "undefined") kind10inprogress = savegame.kind10inprogress;
	if (typeof savegame.kind11time !== "undefined") kind11time = savegame.kind11time;
	if (typeof savegame.kind11inprogress !== "undefined") kind11inprogress = savegame.kind11inprogress;
	if (typeof savegame.kind12time !== "undefined") kind12time = savegame.kind12time;
	if (typeof savegame.kind12inprogress !== "undefined") kind12inprogress = savegame.kind12inprogress;
	if (typeof savegame.kind13time !== "undefined") kind13time = savegame.kind13time;
	if (typeof savegame.kind13inprogress !== "undefined") kind13inprogress = savegame.kind13inprogress;
	if (typeof savegame.kind14time !== "undefined") kind14time = savegame.kind14time;
	if (typeof savegame.kind14inprogress !== "undefined") kind14inprogress = savegame.kind14inprogress;
	if (typeof savegame.kind15time !== "undefined") kind15time = savegame.kind15time;
	if (typeof savegame.kind15inprogress !== "undefined") kind15inprogress = savegame.kind15inprogress;
	if (typeof savegame.kind16time !== "undefined") kind16time = savegame.kind16time;
	if (typeof savegame.kind16inprogress !== "undefined") kind16inprogress = savegame.kind16inprogress;
	if (typeof savegame.kind17time !== "undefined") kind17time = savegame.kind17time;
	if (typeof savegame.kind17inprogress !== "undefined") kind17inprogress = savegame.kind17inprogress;
	if (typeof savegame.kind18time !== "undefined") kind18time = savegame.kind18time;
	if (typeof savegame.kind18inprogress !== "undefined") kind18inprogress = savegame.kind18inprogress;
	if (typeof savegame.K1 !== "undefined") K1 = savegame.K1;
	if (typeof savegame.K2 !== "undefined") K2 = savegame.K2;
	if (typeof savegame.K3 !== "undefined") K3 = savegame.K3;
	if (typeof savegame.K4 !== "undefined") K4 = savegame.K4;
	if (typeof savegame.K5 !== "undefined") K5 = savegame.K5;
	if (typeof savegame.K6 !== "undefined") K6 = savegame.K6;
	if (typeof savegame.K7 !== "undefined") K7 = savegame.K7;
	if (typeof savegame.K8 !== "undefined") K8 = savegame.K8;
	if (typeof savegame.K9 !== "undefined") K9 = savegame.K9;
	if (typeof savegame.K10 !== "undefined") K10 = savegame.K10;
	if (typeof savegame.K11 !== "undefined") K11 = savegame.K11;
	if (typeof savegame.K12 !== "undefined") K12 = savegame.K12;
	if (typeof savegame.K13 !== "undefined") K13 = savegame.K13;
	if (typeof savegame.K14 !== "undefined") K14 = savegame.K14;
	if (typeof savegame.K15 !== "undefined") K15 = savegame.K15;
	if (typeof savegame.K16 !== "undefined") K16 = savegame.K16;
	if (typeof savegame.K17 !== "undefined") K17 = savegame.K17;
	if (typeof savegame.K18 !== "undefined") K18 = savegame.K18;
	if (typeof savegame.K19 !== "undefined") K19 = savegame.K19;
	if (typeof savegame.K20 !== "undefined") K20 = savegame.K20;
	if (typeof savegame.K21 !== "undefined") K21 = savegame.K21;
	if (typeof savegame.hockey1time !== "undefined") hockey1time = savegame.hockey1time;
	if (typeof savegame.hockey1inprogress !== "undefined") hockey1inprogress = savegame.hockey1inprogress;
	if (typeof savegame.hockey2time !== "undefined") hockey2time = savegame.hockey2time;
	if (typeof savegame.hockey2inprogress !== "undefined") hockey2inprogress = savegame.hockey2inprogress;
	if (typeof savegame.hockey3time !== "undefined") hockey3time = savegame.hockey3time;
	if (typeof savegame.hockey3inprogress !== "undefined") hockey3inprogress = savegame.hockey3inprogress;
	if (typeof savegame.hockey4time !== "undefined") hockey4time = savegame.hockey4time;
	if (typeof savegame.hockey4inprogress !== "undefined") hockey4inprogress = savegame.hockey4inprogress;
	if (typeof savegame.hockey5time !== "undefined") hockey5time = savegame.hockey5time;
	if (typeof savegame.hockey5inprogress !== "undefined") hockey5inprogress = savegame.hockey5inprogress;
	if (typeof savegame.hockey6time !== "undefined") hockey6time = savegame.hockey6time;
	if (typeof savegame.hockey6inprogress !== "undefined") hockey6inprogress = savegame.hockey6inprogress;
	if (typeof savegame.hockey7time !== "undefined") hockey7time = savegame.hockey7time;
	if (typeof savegame.hockey7inprogress !== "undefined") hockey7inprogress = savegame.hockey7inprogress;
	if (typeof savegame.hockey8time !== "undefined") hockey8time = savegame.hockey8time;
	if (typeof savegame.hockey8inprogress !== "undefined") hockey8inprogress = savegame.hockey8inprogress;
	if (typeof savegame.hockey9time !== "undefined") hockey9time = savegame.hockey9time;
	if (typeof savegame.hockey9inprogress !== "undefined") hockey9inprogress = savegame.hockey9inprogress;
	if (typeof savegame.hockey10time !== "undefined") hockey10time = savegame.hockey10time;
	if (typeof savegame.hockey10inprogress !== "undefined") hockey10inprogress = savegame.hockey10inprogress;
	if (typeof savegame.hockey11time !== "undefined") hockey11time = savegame.hockey11time;
	if (typeof savegame.hockey11inprogress !== "undefined") hockey11inprogress = savegame.hockey11inprogress;
	if (typeof savegame.hockey12time !== "undefined") hockey12time = savegame.hockey12time;
	if (typeof savegame.hockey12inprogress !== "undefined") hockey12inprogress = savegame.hockey12inprogress;
	if (typeof savegame.hockey13time !== "undefined") hockey13time = savegame.hockey13time;
	if (typeof savegame.hockey13inprogress !== "undefined") hockey13inprogress = savegame.hockey13inprogress;
	if (typeof savegame.hockey14time !== "undefined") hockey14time = savegame.hockey14time;
	if (typeof savegame.hockey14inprogress !== "undefined") hockey14inprogress = savegame.hockey14inprogress;
	if (typeof savegame.hockey15time !== "undefined") hockey15time = savegame.hockey15time;
	if (typeof savegame.hockey15inprogress !== "undefined") hockey15inprogress = savegame.hockey15inprogress;
	if (typeof savegame.H1 !== "undefined") H1 = savegame.H1;
	if (typeof savegame.H2 !== "undefined") H2 = savegame.H2;
	if (typeof savegame.H3 !== "undefined") H3 = savegame.H3;
	if (typeof savegame.H4 !== "undefined") H4 = savegame.H4;
	if (typeof savegame.H5 !== "undefined") H5 = savegame.H5;
	if (typeof savegame.H6 !== "undefined") H6 = savegame.H6;
	if (typeof savegame.H7 !== "undefined") H7 = savegame.H7;
	if (typeof savegame.H8 !== "undefined") H8 = savegame.H8;
	if (typeof savegame.H9 !== "undefined") H9 = savegame.H9;
	if (typeof savegame.H10 !== "undefined") H10 = savegame.H10;
	if (typeof savegame.H11 !== "undefined") H11 = savegame.H11;
	if (typeof savegame.H12 !== "undefined") H12 = savegame.H12;
	if (typeof savegame.H13 !== "undefined") H13 = savegame.H13;
	if (typeof savegame.H14 !== "undefined") H14 = savegame.H14;
	if (typeof savegame.H15 !== "undefined") H15 = savegame.H15;
	if (typeof savegame.H16 !== "undefined") H16 = savegame.H16;
	if (typeof savegame.H17 !== "undefined") H17 = savegame.H17;
	if (typeof savegame.H18 !== "undefined") H18 = savegame.H18;
	if (typeof savegame.H19 !== "undefined") H19 = savegame.H19;
	if (typeof savegame.H20 !== "undefined") H20 = savegame.H20;
	if (typeof savegame.H21 !== "undefined") H21 = savegame.H21;
	if (typeof savegame.H22 !== "undefined") H22 = savegame.H22;
	if (typeof savegame.H23 !== "undefined") H23 = savegame.H23;
	if (typeof savegame.H24 !== "undefined") H24 = savegame.H24;
	if (typeof savegame.H25 !== "undefined") H25 = savegame.H25;
	if (typeof savegame.H26 !== "undefined") H26 = savegame.H26;
	if (typeof savegame.H27 !== "undefined") H27 = savegame.H27;
	if (typeof savegame.H28 !== "undefined") H28 = savegame.H28;
	if (typeof savegame.H29 !== "undefined") H29 = savegame.H29;
	if (typeof savegame.a1 !== "undefined") a1 = savegame.a1;
	if (typeof savegame.a2 !== "undefined") a2 = savegame.a2;
	if (typeof savegame.a3 !== "undefined") a3 = savegame.a3;
	if (typeof savegame.a4 !== "undefined") a4 = savegame.a4;
	if (typeof savegame.a5 !== "undefined") a5 = savegame.a5;
	if (typeof savegame.a6 !== "undefined") a6 = savegame.a6;
	if (typeof savegame.a7 !== "undefined") a7 = savegame.a7;
	if (typeof savegame.a8 !== "undefined") a8 = savegame.a8;
	if (typeof savegame.a9 !== "undefined") a9 = savegame.a9;
	if (typeof savegame.a10 !== "undefined") a10 = savegame.a10;
	if (typeof savegame.a11 !== "undefined") a11 = savegame.a11;
	if (typeof savegame.a12 !== "undefined") a12 = savegame.a12;
	if (typeof savegame.a13 !== "undefined") a13 = savegame.a13;
	if (typeof savegame.a14 !== "undefined") a14 = savegame.a14;
	if (typeof savegame.a15 !== "undefined") a15 = savegame.a15;
	if (typeof savegame.a16 !== "undefined") a16 = savegame.a16;
	if (typeof savegame.a17 !== "undefined") a17 = savegame.a17;
	if (typeof savegame.a18 !== "undefined") a18 = savegame.a18;
	if (typeof savegame.a19 !== "undefined") a19 = savegame.a19;
	if (typeof savegame.a20 !== "undefined") a20 = savegame.a20;
	if (typeof savegame.a21 !== "undefined") a21 = savegame.a21;
	if (typeof savegame.a22 !== "undefined") a22 = savegame.a22;
	if (typeof savegame.a23 !== "undefined") a23 = savegame.a23;
	if (typeof savegame.a24 !== "undefined") a24 = savegame.a24;
	if (typeof savegame.a25 !== "undefined") a25 = savegame.a25;
	if (typeof savegame.a26 !== "undefined") a26 = savegame.a26;
	if (typeof savegame.a27 !== "undefined") a27 = savegame.a27;
	if (typeof savegame.a28 !== "undefined") a28 = savegame.a28;
	if (typeof savegame.a29 !== "undefined") a29 = savegame.a29;
	if (typeof savegame.a30 !== "undefined") a30 = savegame.a30;
	if (typeof savegame.a31 !== "undefined") a31 = savegame.a31;
	if (typeof savegame.a32 !== "undefined") a32 = savegame.a32;
	if (typeof savegame.a33 !== "undefined") a33 = savegame.a33;
	if (typeof savegame.a34 !== "undefined") a34 = savegame.a34;
	if (typeof savegame.a35 !== "undefined") a35 = savegame.a35;
	if (typeof savegame.a36 !== "undefined") a36 = savegame.a36;
	if (typeof savegame.a37 !== "undefined") a37 = savegame.a37;
	if (typeof savegame.a38 !== "undefined") a38 = savegame.a38;
	if (typeof savegame.a39 !== "undefined") a39 = savegame.a39;
	if (typeof savegame.a40 !== "undefined") a40 = savegame.a40;
	if (typeof savegame.a41 !== "undefined") a41 = savegame.a41;
	if (typeof savegame.a42 !== "undefined") a42 = savegame.a42;
	if (typeof savegame.a43 !== "undefined") a43 = savegame.a43;
	if (typeof savegame.a44 !== "undefined") a44 = savegame.a44;
	if (typeof savegame.a45 !== "undefined") a45 = savegame.a45;
	if (typeof savegame.a46 !== "undefined") a46 = savegame.a46;
	if (typeof savegame.a47 !== "undefined") a47 = savegame.a47;
	if (typeof savegame.a48 !== "undefined") a48 = savegame.a48;
	if (typeof savegame.a49 !== "undefined") a49 = savegame.a49;
	if (typeof savegame.a50 !== "undefined") a50 = savegame.a50;
	if (typeof savegame.a51 !== "undefined") a51 = savegame.a51;
	if (typeof savegame.a52 !== "undefined") a52 = savegame.a52;
	if (typeof savegame.a53 !== "undefined") a53 = savegame.a53;
	if (typeof savegame.a54 !== "undefined") a54 = savegame.a54;
	if (typeof savegame.a55 !== "undefined") a55 = savegame.a55;
	if (typeof savegame.a56 !== "undefined") a56 = savegame.a56;
	if (typeof savegame.a57 !== "undefined") a57 = savegame.a57;
	if (typeof savegame.a58 !== "undefined") a58 = savegame.a58;
	if (typeof savegame.a59 !== "undefined") a59 = savegame.a59;
	if (typeof savegame.a60 !== "undefined") a60 = savegame.a60;
	if (typeof savegame.a61 !== "undefined") a61 = savegame.a61;
	if (typeof savegame.a62 !== "undefined") a62 = savegame.a62;
	if (typeof savegame.a63 !== "undefined") a63 = savegame.a63;
	if (typeof savegame.a64 !== "undefined") a64 = savegame.a64;
	if (typeof savegame.a65 !== "undefined") a65 = savegame.a65;
	if (typeof savegame.a66 !== "undefined") a66 = savegame.a66;
	if (typeof savegame.a67 !== "undefined") a67 = savegame.a67;
	if (typeof savegame.a68 !== "undefined") a68 = savegame.a68;
	if (typeof savegame.a69 !== "undefined") a69 = savegame.a69;
	if (typeof savegame.a70 !== "undefined") a70 = savegame.a70;
	if (typeof savegame.a71 !== "undefined") a71 = savegame.a71;
	if (typeof savegame.a72 !== "undefined") a72 = savegame.a72;
	if (typeof savegame.a73 !== "undefined") a73 = savegame.a73;
	if (typeof savegame.a74 !== "undefined") a74 = savegame.a74;
	if (typeof savegame.a75 !== "undefined") a75 = savegame.a75;
	if (typeof savegame.a76 !== "undefined") a76 = savegame.a76;
	if (typeof savegame.a77 !== "undefined") a77 = savegame.a77;
	if (typeof savegame.a78 !== "undefined") a78 = savegame.a78;
	if (typeof savegame.a79 !== "undefined") a79 = savegame.a79;
	if (typeof savegame.a80 !== "undefined") a80 = savegame.a80;
	if (typeof savegame.a81 !== "undefined") a81 = savegame.a81;
	if (typeof savegame.a82 !== "undefined") a82 = savegame.a82;
	if (typeof savegame.a83 !== "undefined") a83 = savegame.a83;
	if (typeof savegame.a84 !== "undefined") a84 = savegame.a84;
	if (typeof savegame.a85 !== "undefined") a85 = savegame.a85;
	if (typeof savegame.a86 !== "undefined") a86 = savegame.a86;
	if (typeof savegame.a87 !== "undefined") a87 = savegame.a87;
	if (typeof savegame.a88 !== "undefined") a88 = savegame.a88;
	if (typeof savegame.a89 !== "undefined") a89 = savegame.a89;
	if (typeof savegame.a90 !== "undefined") a90 = savegame.a90;
	if (typeof savegame.a91 !== "undefined") a91 = savegame.a91;
	if (typeof savegame.a92 !== "undefined") a92 = savegame.a92;
	if (typeof savegame.a93 !== "undefined") a93 = savegame.a93;
	if (typeof savegame.a94 !== "undefined") a94 = savegame.a94;
	if (typeof savegame.a95 !== "undefined") a95 = savegame.a95;
	if (typeof savegame.a96 !== "undefined") a96 = savegame.a96;
	if (typeof savegame.a97 !== "undefined") a97 = savegame.a97;
	if (typeof savegame.su1 !== "undefined") su1 = savegame.su1;
	if (typeof savegame.su2 !== "undefined") su2 = savegame.su2;
	if (typeof savegame.su3 !== "undefined") su3 = savegame.su3;
	if (typeof savegame.su4 !== "undefined") su4 = savegame.su4;
	if (typeof savegame.su5 !== "undefined") su5 = savegame.su5;
	if (typeof savegame.su6 !== "undefined") su6 = savegame.su6;
	if (typeof savegame.su7 !== "undefined") su7 = savegame.su7;
	if (typeof savegame.su8 !== "undefined") su8 = savegame.su8;
	if (typeof savegame.su9 !== "undefined") su9 = savegame.su9;
	if (typeof savegame.su10 !== "undefined") su10 = savegame.su10;
	if (typeof savegame.su11 !== "undefined") su11 = savegame.su11;
	if (typeof savegame.su12 !== "undefined") su12 = savegame.su12;
	if (typeof savegame.su13 !== "undefined") su13 = savegame.su13;
	if (typeof savegame.su14 !== "undefined") su14 = savegame.su14;
	if (typeof savegame.su15 !== "undefined") su15 = savegame.su15;
	if (typeof savegame.su16 !== "undefined") su16 = savegame.su16;
	if (typeof savegame.fu1 !== "undefined") fu1 = savegame.fu1;
	if (typeof savegame.fu2 !== "undefined") fu2 = savegame.fu2;
	if (typeof savegame.fu3 !== "undefined") fu3 = savegame.fu3;
	if (typeof savegame.fu4 !== "undefined") fu4 = savegame.fu4;
	if (typeof savegame.fu5 !== "undefined") fu5 = savegame.fu5;
	if (typeof savegame.fu6 !== "undefined") fu6 = savegame.fu6;
	if (typeof savegame.fu7 !== "undefined") fu7 = savegame.fu7;
	if (typeof savegame.fu8 !== "undefined") fu8 = savegame.fu8;
	if (typeof savegame.fu9 !== "undefined") fu9 = savegame.fu9;
	if (typeof savegame.fu10 !== "undefined") fu10 = savegame.fu10;
	if (typeof savegame.mainTutorial !== "undefined") mainTutorial = savegame.mainTutorial;
	if (typeof savegame.inventoryTutorial !== "undefined") inventoryTutorial = savegame.inventoryTutorial;
	if (typeof savegame.storeTutorial !== "undefined") storeTutorial = savegame.storeTutorial;
	if (typeof savegame.statsTutorial !== "undefined") statsTutorial = savegame.statsTutorial;
	if (typeof savegame.achievementsTutorial !== "undefined") achievementsTutorial = savegame.achievementsTutorial;
	if (typeof savegame.lumberjackTutorial !== "undefined") lumberjackTutorial = savegame.lumberjackTutorial;
	if (typeof savegame.icefishingTutorial !== "undefined") icefishingTutorial = savegame.icefishingTutorial;
	if (typeof savegame.beardTutorial !== "undefined") beardTutorial = savegame.beardTutorial;
	if (typeof savegame.kindnessTutorial !== "undefined") kindnessTutorial = savegame.kindnessTutorial;
	if (typeof savegame.hockeyTutorial !== "undefined") hockeyTutorial = savegame.hockeyTutorial;
	if (typeof savegame.totalPine !== "undefined") totalPine = savegame.totalPine;
	if (typeof savegame.totalSpruce !== "undefined") totalSpruce = savegame.totalSpruce;
	if (typeof savegame.totalMaple !== "undefined") totalMaple = savegame.totalMaple;
	if (typeof savegame.totalOak !== "undefined") totalOak = savegame.totalOak;
	if (typeof savegame.totalBirch !== "undefined") totalBirch = savegame.totalBirch;
	if (typeof savegame.totalAsh !== "undefined") totalAsh = savegame.totalAsh;
	if (typeof savegame.totalTrout !== "undefined") totalTrout = savegame.totalTrout;
	if (typeof savegame.totalSalmon !== "undefined") totalSalmon = savegame.totalSalmon;
	if (typeof savegame.totalCod !== "undefined") totalCod = savegame.totalCod;
	if (typeof savegame.totalCrab !== "undefined") totalCrab = savegame.totalCrab;
	if (typeof savegame.totalHalibut !== "undefined") totalHalibut = savegame.totalHalibut;
	if (typeof savegame.totalWhale !== "undefined") totalWhale = savegame.totalWhale;
	if (typeof savegame.totalPucks !== "undefined") totalPucks = savegame.totalPucks;
	if (typeof savegame.totalSticks !== "undefined") totalSticks = savegame.totalSticks;
	if (typeof savegame.totalGloves !== "undefined") totalGloves = savegame.totalGloves;
	if (typeof savegame.totalSkates !== "undefined") totalSkates = savegame.totalSkates;
	if (typeof savegame.totalGoals !== "undefined") totalGoals = savegame.totalGoals;
	if (typeof savegame.totalZambonies !== "undefined") totalZambonies = savegame.totalZambonies;
	if (typeof savegame.totalMinutes !== "undefined") totalMinutes = savegame.totalMinutes;
	if (typeof savegame.totalBrownBeard !== "undefined") totalBrownBeard = savegame.totalBrownBeard;
	if (typeof savegame.totalBlackBeard !== "undefined") totalBlackBeard = savegame.totalBlackBeard;
	if (typeof savegame.totalSilverBeard !== "undefined") totalSilverBeard = savegame.totalSilverBeard;
	if (typeof savegame.totalGoldBeard !== "undefined") totalGoldBeard = savegame.totalGoldBeard;
	if (typeof savegame.totalRedBeard !== "undefined") totalRedBeard = savegame.totalRedBeard;
	if (typeof savegame.totalGrizzlyBeard !== "undefined") totalGrizzlyBeard = savegame.totalGrizzlyBeard;
	if (typeof savegame.totalkind1 !== "undefined") totalkind1 = savegame.totalkind1;
	if (typeof savegame.totalkind2 !== "undefined") totalkind2 = savegame.totalkind2;
	if (typeof savegame.totalkind3 !== "undefined") totalkind3 = savegame.totalkind3;
	if (typeof savegame.totalkind4 !== "undefined") totalkind4 = savegame.totalkind4;
	if (typeof savegame.totalkind5 !== "undefined") totalkind5 = savegame.totalkind5;
	if (typeof savegame.totalkind6 !== "undefined") totalkind6 = savegame.totalkind6;
	if (typeof savegame.totalkind7 !== "undefined") totalkind7 = savegame.totalkind7;
	if (typeof savegame.totalkind8 !== "undefined") totalkind8 = savegame.totalkind8;
	if (typeof savegame.totalkind9 !== "undefined") totalkind9 = savegame.totalkind9;
	if (typeof savegame.totalkind10 !== "undefined") totalkind10 = savegame.totalkind10;
	if (typeof savegame.totalhockey1 !== "undefined") totalhockey1 = savegame.totalhockey1;
	if (typeof savegame.totalhockey2 !== "undefined") totalhockey2 = savegame.totalhockey2;
	if (typeof savegame.totalhockey3 !== "undefined") totalhockey3 = savegame.totalhockey3;
	if (typeof savegame.totalhockey4 !== "undefined") totalhockey4 = savegame.totalhockey4;
	if (typeof savegame.totalhockey5 !== "undefined") totalhockey5 = savegame.totalhockey5;
	if (typeof savegame.totalhockey6 !== "undefined") totalhockey6 = savegame.totalhockey6;
	if (typeof savegame.totalhockey7 !== "undefined") totalhockey7 = savegame.totalhockey7;
	if (typeof savegame.totalhockey8 !== "undefined") totalhockey8 = savegame.totalhockey8;
	if (typeof savegame.totalhockey9 !== "undefined") totalhockey9 = savegame.totalhockey9;
	if (typeof savegame.totalhockey10 !== "undefined") totalhockey10 = savegame.totalhockey10;
	if (typeof savegame.totalhockey11 !== "undefined") totalhockey11 = savegame.totalhockey11;
	if (typeof savegame.totalhockey12 !== "undefined") totalhockey12 = savegame.totalhockey12;
	if (typeof savegame.totalhockey13 !== "undefined") totalhockey13 = savegame.totalhockey13;
	if (typeof savegame.totalhockey14 !== "undefined") totalhockey14 = savegame.totalhockey14;
	if (typeof savegame.totalhockey15 !== "undefined") totalhockey15 = savegame.totalhockey15;
	if (typeof savegame.totalInstantKindness !== "undefined") totalInstantKindness = savegame.totalInstantKindness;
	if (typeof savegame.totalInstantHockey !== "undefined") totalInstantHockey = savegame.totalInstantHockey;
	if (typeof savegame.totalMoney !== "undefined") totalMoney = savegame.totalMoney;
	if (typeof savegame.totalSyrup !== "undefined") totalSyrup = savegame.totalSyrup;
	if (typeof savegame.totalFlannel !== "undefined") totalFlannel = savegame.totalFlannel;
	if (typeof savegame.yesterday !== "undefined") yesterday = savegame.yesterday;
	if (typeof savegame.totalDaysPlayed !== "undefined") totalDaysPlayed = savegame.totalDaysPlayed;
	if (typeof savegame.daysStreak !== "undefined") daysStreak = savegame.daysStreak;
	if (typeof savegame.bestdaysStreak !== "undefined") bestdaysStreak = savegame.bestdaysStreak;
	if (typeof savegame.upgradeCount !== "undefined") upgradeCount = savegame.upgradeCount;
	if (typeof savegame.aboot !== "undefined") aboot = savegame.aboot;
	if (typeof savegame.reddit !== "undefined") reddit = savegame.reddit;
	if (typeof savegame.importer !== "undefined") importer = savegame.importer;
	if (typeof savegame.IceFishingNotifyToggle !== "undefined") IceFishingNotifyToggle = savegame.IceFishingNotifyToggle;
	if (typeof savegame.KindnessNotifyToggle !== "undefined") KindnessNotifyToggle = savegame.KindnessNotifyToggle;
	if (typeof savegame.HockeyNotifyToggle !== "undefined") HockeyNotifyToggle = savegame.HockeyNotifyToggle;
	if (typeof savegame.Prestige !== "undefined") Prestige = savegame.Prestige;
	if (typeof savegame.PrestigeBeards !== "undefined") PrestigeBeards = savegame.PrestigeBeards;
	if (typeof savegame.PrestigeFish !== "undefined") PrestigeFish = savegame.PrestigeFish;
	if (typeof savegame.PrestigeUpgrades !== "undefined") PrestigeUpgrades = savegame.PrestigeUpgrades;
	if (typeof savegame.LumberjackBuff !== "undefined") LumberjackBuff = savegame.LumberjackBuff;
	if (typeof savegame.IceFishingBuff !== "undefined") IceFishingBuff = savegame.IceFishingBuff;
	if (typeof savegame.BeardBuff !== "undefined") BeardBuff = savegame.BeardBuff;
	if (typeof savegame.KindnessBuff !== "undefined") KindnessBuff = savegame.KindnessBuff;
	if (typeof savegame.HockeyBuff !== "undefined") HockeyBuff = savegame.HockeyBuff;
	if (typeof savegame.TotalLumberjackBuff !== "undefined") TotalLumberjackBuff = savegame.TotalLumberjackBuff;
	if (typeof savegame.TotalIceFishingBuff !== "undefined") TotalIceFishingBuff = savegame.TotalIceFishingBuff;
	if (typeof savegame.TotalBeardBuff !== "undefined") TotalBeardBuff = savegame.TotalBeardBuff;
	if (typeof savegame.TotalKindnessBuff !== "undefined") TotalKindnessBuff = savegame.TotalKindnessBuff;
	if (typeof savegame.TotalHockeyBuff !== "undefined") TotalHockeyBuff = savegame.TotalHockeyBuff;
	if (typeof savegame.MakeItRain !== "undefined") MakeItRain = savegame.MakeItRain;
	if (typeof savegame.PineCheck !== "undefined") PineCheck = savegame.PineCheck;
	if (typeof savegame.SpruceCheck !== "undefined") SpruceCheck = savegame.SpruceCheck;
	if (typeof savegame.MapleCheck !== "undefined") MapleCheck = savegame.MapleCheck;
	if (typeof savegame.OakCheck !== "undefined") OakCheck = savegame.OakCheck;
	if (typeof savegame.BirchCheck !== "undefined") BirchCheck = savegame.BirchCheck;
	if (typeof savegame.AshCheck !== "undefined") AshCheck = savegame.AshCheck;
	if (typeof savegame.TroutCheck !== "undefined") TroutCheck = savegame.TroutCheck;
	if (typeof savegame.SalmonCheck !== "undefined") SalmonCheck = savegame.SalmonCheck;
	if (typeof savegame.CodCheck !== "undefined") CodCheck = savegame.CodCheck;
	if (typeof savegame.CrabCheck !== "undefined") CrabCheck = savegame.CrabCheck;
	if (typeof savegame.HalibutCheck !== "undefined") HalibutCheck = savegame.HalibutCheck;
	if (typeof savegame.WhaleCheck !== "undefined") WhaleCheck = savegame.WhaleCheck;
	if (typeof savegame.PucksCheck !== "undefined") PucksCheck = savegame.PucksCheck;
	if (typeof savegame.SticksCheck !== "undefined") SticksCheck = savegame.SticksCheck;
	if (typeof savegame.GlovesCheck !== "undefined") GlovesCheck = savegame.GlovesCheck;
	if (typeof savegame.SkatesCheck !== "undefined") SkatesCheck = savegame.SkatesCheck;
	if (typeof savegame.GoalsCheck !== "undefined") GoalsCheck = savegame.GoalsCheck;
	if (typeof savegame.ZamboniesCheck !== "undefined") ZamboniesCheck = savegame.ZamboniesCheck;
	if (typeof savegame.isFishing !== "undefined") isFishing = savegame.isFishing;
	if (typeof savegame.changeSkins !== "undefined") changeSkins = savegame.changeSkins;
	if (typeof savegame.whatskin !== "undefined") whatskin = savegame.whatskin;
	
	}

}


$(function() {

$('#abootLink').click(function(){
    aboot=1;
	achievementProgress("aboot");
});

$('#importerLink').click(function(){
    importer=1;
	achievementProgress("importer");
});

$('#redditLink').click(function(){
    reddit=1;
	achievementProgress("reddit");
});

$('#moneyimage').click(function(){
    $('#moneyimage').notify("这个可以买到幸福", { position: 'top center', className: 'elemdemo'});
});

$('#syrupimage').click(function(){
    $('#syrupimage').notify("诸神的灵丹妙药", { position: 'top center', className: 'elemdemo'});
});

$('#flannelimage').click(function(){
    $('#flannelimage').notify("美。真正的美。", { position: 'top center', className: 'elemdemo'});
});


$("#coffeeButton").click(function(e) {
	if (MakeItRain){
	
    var obj = $("#clone").clone();
	var img = $("#"+PrestigeImage[Prestige]).clone(); 
	
    $("body").append(obj);
	$("body").append(img);
	
    obj.html("+"+ (Math.max(1, Lu6*Lu6num, Lu7*Lu7num, Lu8*Lu8num, Lu9*Lu9num, Lu10*Lu10num, Lu20*Lu20num)*TreeMultiplier));

    obj.css('position','absolute');
	obj.css('z-index', '1');
	img.css('position','absolute');
	img.css('z-index', '2');
	img.show();
	
	var rand = 1;
	if (TreeClicks%2 == 0){
		rand = Math.floor(40+Math.random()*50);
	}else{
		rand = Math.floor(240+Math.random()*50);
	}
	
    obj.offset({left: e.pageX-10, top: e.pageY-25});
	img.offset({left: rand, top: 210});
	
	
		obj.animate({"top": "-=80px"}, 1000, "linear", function() {
			$(this).remove();
		});     
	
	
	img.animate({"top": "+=165px"}, 1000, "linear", function() {
        $(this).remove();
    });
	
	}
});


});




function ExportGame(){
	var exportcode = JSON.stringify(btoa(localStorage.getItem("SaveCanada")));
	exportcode = exportcode.substring(1,exportcode.length-1);
	document.getElementById("ExportCode").innerHTML = exportcode;	
	document.getElementById("ExportCodeDisplay").innerHTML = exportcode;
}

function ImportButton(){
		var input = document.getElementById("ImportCode");
		ImportGame(atob(input.value));
		
}

function ImportGame(gamecode){

	Igame = JSON.parse(gamecode);
	if (Igame.TreeClicks != null) TreeClicks = Igame.TreeClicks;
	if (Igame.IceFishingClicks != null) IceFishingClicks = Igame.IceFishingClicks;
	if (Igame.BaitFished != null) BaitFished = Igame.BaitFished;
	if (Igame.BeardClicks != null) BeardClicks = Igame.BeardClicks;
	if (Igame.KindnessClicks != null) KindnessClicks = Igame.KindnessClicks;
	if (Igame.HockeyClicks != null) HockeyClicks = Igame.HockeyClicks;
	if (Igame.MasterXP != null) MasterXP = Igame.MasterXP;
	if (Igame.LumberjackXP != null) LumberjackXP = Igame.LumberjackXP;
	if (Igame.IceFishingXP != null) IceFishingXP = Igame.IceFishingXP;
	if (Igame.BeardXP != null) BeardXP = Igame.BeardXP;
	if (Igame.KindnessXP != null) KindnessXP = Igame.KindnessXP;
	if (Igame.HockeyXP != null) HockeyXP = Igame.HockeyXP;
	if (Igame.Money != null) Money = Igame.Money;
	if (Igame.Syrup != null) Syrup = Igame.Syrup;
	if (Igame.Flannel != null) Flannel = Igame.Flannel;
	if (Igame.Pine != null) Pine = Igame.Pine;
	if (Igame.Spruce != null) Spruce = Igame.Spruce;
	if (Igame.Maple != null) Maple = Igame.Maple;
	if (Igame.Oak != null) Oak = Igame.Oak;
	if (Igame.Birch != null) Birch = Igame.Birch;
	if (Igame.Ash != null) Ash = Igame.Ash;
	if (Igame.Trout != null) Trout = Igame.Trout;
	if (Igame.Salmon != null) Salmon = Igame.Salmon;
	if (Igame.Cod != null) Cod = Igame.Cod;
	if (Igame.Crab != null) Crab = Igame.Crab;
	if (Igame.Halibut != null) Halibut = Igame.Halibut;
	if (Igame.Whale != null) Whale = Igame.Whale;
	if (Igame.Pucks != null) Pucks = Igame.Pucks;
	if (Igame.Sticks != null) Sticks = Igame.Sticks;
	if (Igame.Gloves != null) Gloves = Igame.Gloves;
	if (Igame.Skates != null) Skates = Igame.Skates;
	if (Igame.Goals != null) Goals = Igame.Goals;
	if (Igame.Zambonies != null) Zambonies = Igame.Zambonies;
	if (Igame.SpruceUnlock != null) SpruceUnlock = Igame.SpruceUnlock;
	if (Igame.MapleUnlock != null) MapleUnlock = Igame.MapleUnlock;
	if (Igame.OakUnlock != null) OakUnlock = Igame.OakUnlock;
	if (Igame.BirchUnlock != null) BirchUnlock = Igame.BirchUnlock;
	if (Igame.AshUnlock != null) AshUnlock = Igame.AshUnlock;
	if (Igame.SalmonUnlock != null) SalmonUnlock = Igame.SalmonUnlock;
	if (Igame.CodUnlock != null) CodUnlock = Igame.CodUnlock;
	if (Igame.CrabUnlock != null) CrabUnlock = Igame.CrabUnlock;
	if (Igame.HalibutUnlock != null) HalibutUnlock = Igame.HalibutUnlock;
	if (Igame.WhaleUnlock != null) WhaleUnlock = Igame.WhaleUnlock;
	if (Igame.SticksUnlock != null) SticksUnlock = Igame.SticksUnlock;
	if (Igame.GlovesUnlock != null) GlovesUnlock = Igame.GlovesUnlock;
	if (Igame.SkatesUnlock != null) SkatesUnlock = Igame.SkatesUnlock;
	if (Igame.GoalsUnlock != null) GoalsUnlock = Igame.GoalsUnlock;
	if (Igame.ZamboniesUnlock != null) ZamboniesUnlock = Igame.ZamboniesUnlock;
	if (Igame.Lu1 != null) Lu1 = Igame.Lu1;
	if (Igame.Lu2 != null) Lu2 = Igame.Lu2;
	if (Igame.Lu3 != null) Lu3 = Igame.Lu3;
	if (Igame.Lu4 != null) Lu4 = Igame.Lu4;
	if (Igame.Lu5 != null) Lu5 = Igame.Lu5;
	if (Igame.Lu6 != null) Lu6 = Igame.Lu6;
	if (Igame.Lu7 != null) Lu7 = Igame.Lu7;
	if (Igame.Lu8 != null) Lu8 = Igame.Lu8;
	if (Igame.Lu9 != null) Lu9 = Igame.Lu9;
	if (Igame.Lu10 != null) Lu10 = Igame.Lu10;
	if (Igame.Lu11 != null) Lu11 = Igame.Lu11;
	if (Igame.Lu12 != null) Lu12 = Igame.Lu12;
	if (Igame.Lu13 != null) Lu13 = Igame.Lu13;
	if (Igame.Lu14 != null) Lu14 = Igame.Lu14;
	if (Igame.Lu15 != null) Lu15 = Igame.Lu15;
	if (Igame.Lu16 != null) Lu16 = Igame.Lu16;
	if (Igame.Lu17 != null) Lu17 = Igame.Lu17;
	if (Igame.Lu18 != null) Lu18 = Igame.Lu18;
	if (Igame.Lu19 != null) Lu19 = Igame.Lu19;
	if (Igame.Lu20 != null) Lu20 = Igame.Lu20;
	if (Igame.Lu21 != null) Lu21 = Igame.Lu21;
	if (Igame.Lu22 != null) Lu22 = Igame.Lu22;
	if (Igame.Lu23 != null) Lu23 = Igame.Lu23;
	if (Igame.Lu24 != null) Lu24 = Igame.Lu24;
	if (Igame.AxeBud != null) AxeBud = Igame.AxeBud;
	if (Igame.ChainsawPal != null) ChainsawPal = Igame.ChainsawPal;
	if (Igame.FellerFriend != null) FellerFriend = Igame.FellerFriend;
	if (Igame.TransportGuy != null) TransportGuy = Igame.TransportGuy;
	if (Igame.Be1 != null) Be1 = Igame.Be1;
	if (Igame.Be2 != null) Be2 = Igame.Be2;
	if (Igame.Be3 != null) Be3 = Igame.Be3;
	if (Igame.Be4 != null) Be4 = Igame.Be4;
	if (Igame.Be5 != null) Be5 = Igame.Be5;
	if (Igame.Be6 != null) Be6 = Igame.Be6;
	if (Igame.Be7 != null) Be7 = Igame.Be7;
	if (Igame.Be8 != null) Be8 = Igame.Be8;
	if (Igame.Be9 != null) Be9 = Igame.Be9;
	if (Igame.Be10 != null) Be10 = Igame.Be10;
	if (Igame.Be11 != null) Be11 = Igame.Be11;
	if (Igame.Be12 != null) Be12 = Igame.Be12;
	if (Igame.Be13 != null) Be13 = Igame.Be13;
	if (Igame.Be14 != null) Be14 = Igame.Be14;
	if (Igame.Be15 != null) Be15 = Igame.Be15;
	if (Igame.Be16 != null) Be16 = Igame.Be16;
	if (Igame.Be17 != null) Be17 = Igame.Be17;
	if (Igame.Be18 != null) Be18 = Igame.Be18;
	if (Igame.Be19 != null) Be19 = Igame.Be19;
	if (Igame.Be20 != null) Be20 = Igame.Be20;
	if (Igame.Be21 != null) Be21 = Igame.Be21;
	if (Igame.Be22 != null) Be22 = Igame.Be22;
	if (Igame.Be23 != null) Be23 = Igame.Be23;
	if (Igame.Be24 != null) Be24 = Igame.Be24;
	if (Igame.Be25 != null) Be25 = Igame.Be25;
	if (Igame.Be26 != null) Be26 = Igame.Be26;
	if (Igame.Be27 != null) Be27 = Igame.Be27;
	if (Igame.LastBeard != null) LastBeard = Igame.LastBeard;
	if (Igame.BlackBeard != null) BlackBeard = Igame.BlackBeard;
	if (Igame.SilverBeard != null) SilverBeard = Igame.SilverBeard;
	if (Igame.GoldBeard != null) GoldBeard = Igame.GoldBeard;
	if (Igame.RedBeard != null) RedBeard = Igame.RedBeard;
	if (Igame.GrizzlyBeard != null) GrizzlyBeard = Igame.GrizzlyBeard;
	if (Igame.Bait1 != null) Bait1 = Igame.Bait1;
	if (Igame.Ic1 != null) Ic1 = Igame.Ic1;
	if (Igame.Ic2 != null) Ic2 = Igame.Ic2;
	if (Igame.Ic3 != null) Ic3 = Igame.Ic3;
	if (Igame.Ic4 != null) Ic4 = Igame.Ic4;
	if (Igame.Ic5 != null) Ic5 = Igame.Ic5;
	if (Igame.Ic6 != null) Ic6 = Igame.Ic6;
	if (Igame.Ic7 != null) Ic7 = Igame.Ic7;
	if (Igame.Ic8 != null) Ic8 = Igame.Ic8;
	if (Igame.Ic9 != null) Ic9 = Igame.Ic9;
	if (Igame.Ic10 != null) Ic10 = Igame.Ic10;
	if (Igame.Ic11 != null) Ic11 = Igame.Ic11;
	if (Igame.Ic12 != null) Ic12 = Igame.Ic12;
	if (Igame.Ic13 != null) Ic13 = Igame.Ic13;
	if (Igame.Ic14 != null) Ic14 = Igame.Ic14;
	if (Igame.Ic15 != null) Ic15 = Igame.Ic15;
	if (Igame.Ic16 != null) Ic16 = Igame.Ic16;
	if (Igame.Ic17 != null) Ic17 = Igame.Ic17;
	if (Igame.Ic18 != null) Ic18 = Igame.Ic18;
	if (Igame.Ic19 != null) Ic19 = Igame.Ic19;
	if (Igame.Ic20 != null) Ic20 = Igame.Ic20;
	if (Igame.Ic21 != null) Ic21 = Igame.Ic21;
	if (Igame.Ic22 != null) Ic22 = Igame.Ic22;
	if (Igame.kind1time != null) kind1time = Igame.kind1time;
	if (Igame.kind1inprogress != null) kind1inprogress = Igame.kind1inprogress;
	if (Igame.kind2time != null) kind2time = Igame.kind2time;
	if (Igame.kind2inprogress != null) kind2inprogress = Igame.kind2inprogress;
	if (Igame.kind3time != null) kind3time = Igame.kind3time;
	if (Igame.kind3inprogress != null) kind3inprogress = Igame.kind3inprogress;
	if (Igame.kind4time != null) kind4time = Igame.kind4time;
	if (Igame.kind4inprogress != null) kind4inprogress = Igame.kind4inprogress;
	if (Igame.kind5time != null) kind5time = Igame.kind5time;
	if (Igame.kind5inprogress != null) kind5inprogress = Igame.kind5inprogress;
	if (Igame.kind6time != null) kind6time = Igame.kind6time;
	if (Igame.kind6inprogress != null) kind6inprogress = Igame.kind6inprogress;
	if (Igame.kind7time != null) kind7time = Igame.kind7time;
	if (Igame.kind7inprogress != null) kind7inprogress = Igame.kind7inprogress;
	if (Igame.kind8time != null) kind8time = Igame.kind8time;
	if (Igame.kind8inprogress != null) kind8inprogress = Igame.kind8inprogress;
	if (Igame.kind9time != null) kind9time = Igame.kind9time;
	if (Igame.kind9inprogress != null) kind9inprogress = Igame.kind9inprogress;
	if (Igame.kind10time != null) kind10time = Igame.kind10time;
	if (Igame.kind10inprogress != null) kind10inprogress = Igame.kind10inprogress;
	if (Igame.kind11time != null) kind11time = Igame.kind11time;
	if (Igame.kind11inprogress != null) kind11inprogress = Igame.kind11inprogress;
	if (Igame.kind12time != null) kind12time = Igame.kind12time;
	if (Igame.kind12inprogress != null) kind12inprogress = Igame.kind12inprogress;
	if (Igame.kind13time != null) kind13time = Igame.kind13time;
	if (Igame.kind13inprogress != null) kind13inprogress = Igame.kind13inprogress;
	if (Igame.kind14time != null) kind14time = Igame.kind14time;
	if (Igame.kind14inprogress != null) kind14inprogress = Igame.kind14inprogress;
	if (Igame.kind15time != null) kind15time = Igame.kind15time;
	if (Igame.kind15inprogress != null) kind15inprogress = Igame.kind15inprogress;
	if (Igame.kind16time != null) kind16time = Igame.kind16time;
	if (Igame.kind16inprogress != null) kind16inprogress = Igame.kind16inprogress;
	if (Igame.kind17time != null) kind17time = Igame.kind17time;
	if (Igame.kind17inprogress != null) kind17inprogress = Igame.kind17inprogress;
	if (Igame.kind18time != null) kind18time = Igame.kind18time;
	if (Igame.kind18inprogress != null) kind18inprogress = Igame.kind18inprogress;
	if (Igame.K1 != null) K1 = Igame.K1;
	if (Igame.K2 != null) K2 = Igame.K2;
	if (Igame.K3 != null) K3 = Igame.K3;
	if (Igame.K4 != null) K4 = Igame.K4;
	if (Igame.K5 != null) K5 = Igame.K5;
	if (Igame.K6 != null) K6 = Igame.K6;
	if (Igame.K7 != null) K7 = Igame.K7;
	if (Igame.K8 != null) K8 = Igame.K8;
	if (Igame.K9 != null) K9 = Igame.K9;
	if (Igame.K10 != null) K10 = Igame.K10;
	if (Igame.K11 != null) K11 = Igame.K11;
	if (Igame.K12 != null) K12 = Igame.K12;
	if (Igame.K13 != null) K13 = Igame.K13;
	if (Igame.K14 != null) K14 = Igame.K14;
	if (Igame.K15 != null) K15 = Igame.K15;
	if (Igame.K16 != null) K16 = Igame.K16;
	if (Igame.K17 != null) K17 = Igame.K17;
	if (Igame.K18 != null) K18 = Igame.K18;
	if (Igame.K19 != null) K19 = Igame.K19;
	if (Igame.K20 != null) K20 = Igame.K20;
	if (Igame.K21 != null) K21 = Igame.K21;
	if (Igame.hockey1time != null) hockey1time = Igame.hockey1time;
	if (Igame.hockey1inprogress != null) hockey1inprogress = Igame.hockey1inprogress;
	if (Igame.hockey2time != null) hockey2time = Igame.hockey2time;
	if (Igame.hockey2inprogress != null) hockey2inprogress = Igame.hockey2inprogress;
	if (Igame.hockey3time != null) hockey3time = Igame.hockey3time;
	if (Igame.hockey3inprogress != null) hockey3inprogress = Igame.hockey3inprogress;
	if (Igame.hockey4time != null) hockey4time = Igame.hockey4time;
	if (Igame.hockey4inprogress != null) hockey4inprogress = Igame.hockey4inprogress;
	if (Igame.hockey5time != null) hockey5time = Igame.hockey5time;
	if (Igame.hockey5inprogress != null) hockey5inprogress = Igame.hockey5inprogress;
	if (Igame.hockey6time != null) hockey6time = Igame.hockey6time;
	if (Igame.hockey6inprogress != null) hockey6inprogress = Igame.hockey6inprogress;
	if (Igame.hockey7time != null) hockey7time = Igame.hockey7time;
	if (Igame.hockey7inprogress != null) hockey7inprogress = Igame.hockey7inprogress;
	if (Igame.hockey8time != null) hockey8time = Igame.hockey8time;
	if (Igame.hockey8inprogress != null) hockey8inprogress = Igame.hockey8inprogress;
	if (Igame.hockey9time != null) hockey9time = Igame.hockey9time;
	if (Igame.hockey9inprogress != null) hockey9inprogress = Igame.hockey9inprogress;
	if (Igame.hockey10time != null) hockey10time = Igame.hockey10time;
	if (Igame.hockey10inprogress != null) hockey10inprogress = Igame.hockey10inprogress;
	if (Igame.hockey11time != null) hockey11time = Igame.hockey11time;
	if (Igame.hockey11inprogress != null) hockey11inprogress = Igame.hockey11inprogress;
	if (Igame.hockey12time != null) hockey12time = Igame.hockey12time;
	if (Igame.hockey12inprogress != null) hockey12inprogress = Igame.hockey12inprogress;
	if (Igame.hockey13time != null) hockey13time = Igame.hockey13time;
	if (Igame.hockey13inprogress != null) hockey13inprogress = Igame.hockey13inprogress;
	if (Igame.hockey14time != null) hockey14time = Igame.hockey14time;
	if (Igame.hockey14inprogress != null) hockey14inprogress = Igame.hockey14inprogress;
	if (Igame.hockey15time != null) hockey15time = Igame.hockey15time;
	if (Igame.hockey15inprogress != null) hockey15inprogress = Igame.hockey15inprogress;
	if (Igame.H1 != null) H1 = Igame.H1;
	if (Igame.H2 != null) H2 = Igame.H2;
	if (Igame.H3 != null) H3 = Igame.H3;
	if (Igame.H4 != null) H4 = Igame.H4;
	if (Igame.H5 != null) H5 = Igame.H5;
	if (Igame.H6 != null) H6 = Igame.H6;
	if (Igame.H7 != null) H7 = Igame.H7;
	if (Igame.H8 != null) H8 = Igame.H8;
	if (Igame.H9 != null) H9 = Igame.H9;
	if (Igame.H10 != null) H10 = Igame.H10;
	if (Igame.H11 != null) H11 = Igame.H11;
	if (Igame.H12 != null) H12 = Igame.H12;
	if (Igame.H13 != null) H13 = Igame.H13;
	if (Igame.H14 != null) H14 = Igame.H14;
	if (Igame.H15 != null) H15 = Igame.H15;
	if (Igame.H16 != null) H16 = Igame.H16;
	if (Igame.H17 != null) H17 = Igame.H17;
	if (Igame.H18 != null) H18 = Igame.H18;
	if (Igame.H19 != null) H19 = Igame.H19;
	if (Igame.H20 != null) H20 = Igame.H20;
	if (Igame.H21 != null) H21 = Igame.H21;
	if (Igame.H22 != null) H22 = Igame.H22;
	if (Igame.H23 != null) H23 = Igame.H23;
	if (Igame.H24 != null) H24 = Igame.H24;
	if (Igame.H25 != null) H25 = Igame.H25;
	if (Igame.H26 != null) H26 = Igame.H26;
	if (Igame.H27 != null) H27 = Igame.H27;
	if (Igame.H28 != null) H28 = Igame.H28;
	if (Igame.H29 != null) H29 = Igame.H29;
	if (Igame.a1 != null) a1 = Igame.a1;
	if (Igame.a2 != null) a2 = Igame.a2;
	if (Igame.a3 != null) a3 = Igame.a3;
	if (Igame.a4 != null) a4 = Igame.a4;
	if (Igame.a5 != null) a5 = Igame.a5;
	if (Igame.a6 != null) a6 = Igame.a6;
	if (Igame.a7 != null) a7 = Igame.a7;
	if (Igame.a8 != null) a8 = Igame.a8;
	if (Igame.a9 != null) a9 = Igame.a9;
	if (Igame.a10 != null) a10 = Igame.a10;
	if (Igame.a11 != null) a11 = Igame.a11;
	if (Igame.a12 != null) a12 = Igame.a12;
	if (Igame.a13 != null) a13 = Igame.a13;
	if (Igame.a14 != null) a14 = Igame.a14;
	if (Igame.a15 != null) a15 = Igame.a15;
	if (Igame.a16 != null) a16 = Igame.a16;
	if (Igame.a17 != null) a17 = Igame.a17;
	if (Igame.a18 != null) a18 = Igame.a18;
	if (Igame.a19 != null) a19 = Igame.a19;
	if (Igame.a20 != null) a20 = Igame.a20;
	if (Igame.a21 != null) a21 = Igame.a21;
	if (Igame.a22 != null) a22 = Igame.a22;
	if (Igame.a23 != null) a23 = Igame.a23;
	if (Igame.a24 != null) a24 = Igame.a24;
	if (Igame.a25 != null) a25 = Igame.a25;
	if (Igame.a26 != null) a26 = Igame.a26;
	if (Igame.a27 != null) a27 = Igame.a27;
	if (Igame.a28 != null) a28 = Igame.a28;
	if (Igame.a29 != null) a29 = Igame.a29;
	if (Igame.a30 != null) a30 = Igame.a30;
	if (Igame.a31 != null) a31 = Igame.a31;
	if (Igame.a32 != null) a32 = Igame.a32;
	if (Igame.a33 != null) a33 = Igame.a33;
	if (Igame.a34 != null) a34 = Igame.a34;
	if (Igame.a35 != null) a35 = Igame.a35;
	if (Igame.a36 != null) a36 = Igame.a36;
	if (Igame.a37 != null) a37 = Igame.a37;
	if (Igame.a38 != null) a38 = Igame.a38;
	if (Igame.a39 != null) a39 = Igame.a39;
	if (Igame.a40 != null) a40 = Igame.a40;
	if (Igame.a41 != null) a41 = Igame.a41;
	if (Igame.a42 != null) a42 = Igame.a42;
	if (Igame.a43 != null) a43 = Igame.a43;
	if (Igame.a44 != null) a44 = Igame.a44;
	if (Igame.a45 != null) a45 = Igame.a45;
	if (Igame.a46 != null) a46 = Igame.a46;
	if (Igame.a47 != null) a47 = Igame.a47;
	if (Igame.a48 != null) a48 = Igame.a48;
	if (Igame.a49 != null) a49 = Igame.a49;
	if (Igame.a50 != null) a50 = Igame.a50;
	if (Igame.a51 != null) a51 = Igame.a51;
	if (Igame.a52 != null) a52 = Igame.a52;
	if (Igame.a53 != null) a53 = Igame.a53;
	if (Igame.a54 != null) a54 = Igame.a54;
	if (Igame.a55 != null) a55 = Igame.a55;
	if (Igame.a56 != null) a56 = Igame.a56;
	if (Igame.a57 != null) a57 = Igame.a57;
	if (Igame.a58 != null) a58 = Igame.a58;
	if (Igame.a59 != null) a59 = Igame.a59;
	if (Igame.a60 != null) a60 = Igame.a60;
	if (Igame.a61 != null) a61 = Igame.a61;
	if (Igame.a62 != null) a62 = Igame.a62;
	if (Igame.a63 != null) a63 = Igame.a63;
	if (Igame.a64 != null) a64 = Igame.a64;
	if (Igame.a65 != null) a65 = Igame.a65;
	if (Igame.a66 != null) a66 = Igame.a66;
	if (Igame.a67 != null) a67 = Igame.a67;
	if (Igame.a68 != null) a68 = Igame.a68;
	if (Igame.a69 != null) a69 = Igame.a69;
	if (Igame.a70 != null) a70 = Igame.a70;
	if (Igame.a71 != null) a71 = Igame.a71;
	if (Igame.a72 != null) a72 = Igame.a72;
	if (Igame.a73 != null) a73 = Igame.a73;
	if (Igame.a74 != null) a74 = Igame.a74;
	if (Igame.a75 != null) a75 = Igame.a75;
	if (Igame.a76 != null) a76 = Igame.a76;
	if (Igame.a77 != null) a77 = Igame.a77;
	if (Igame.a78 != null) a78 = Igame.a78;
	if (Igame.a79 != null) a79 = Igame.a79;
	if (Igame.a80 != null) a80 = Igame.a80;
	if (Igame.a81 != null) a81 = Igame.a81;
	if (Igame.a82 != null) a82 = Igame.a82;
	if (Igame.a83 != null) a83 = Igame.a83;
	if (Igame.a84 != null) a84 = Igame.a84;
	if (Igame.a85 != null) a85 = Igame.a85;
	if (Igame.a86 != null) a86 = Igame.a86;
	if (Igame.a87 != null) a87 = Igame.a87;
	if (Igame.a88 != null) a88 = Igame.a88;
	if (Igame.a89 != null) a89 = Igame.a89;
	if (Igame.a90 != null) a90 = Igame.a90;
	if (Igame.a91 != null) a91 = Igame.a91;
	if (Igame.a92 != null) a92 = Igame.a92;
	if (Igame.a93 != null) a93 = Igame.a93;
	if (Igame.a94 != null) a94 = Igame.a94;
	if (Igame.a95 != null) a95 = Igame.a95;
	if (Igame.a96 != null) a96 = Igame.a96;
	if (Igame.a97 != null) a97 = Igame.a97;
	if (Igame.su1 != null) su1 = Igame.su1;
	if (Igame.su2 != null) su2 = Igame.su2;
	if (Igame.su3 != null) su3 = Igame.su3;
	if (Igame.su4 != null) su4 = Igame.su4;
	if (Igame.su5 != null) su5 = Igame.su5;
	if (Igame.su6 != null) su6 = Igame.su6;
	if (Igame.su7 != null) su7 = Igame.su7;
	if (Igame.su8 != null) su8 = Igame.su8;
	if (Igame.su9 != null) su9 = Igame.su9;
	if (Igame.su10 != null) su10 = Igame.su10;
	if (Igame.su11 != null) su11 = Igame.su11;
	if (Igame.su12 != null) su12 = Igame.su12;
	if (Igame.su13 != null) su13 = Igame.su13;
	if (Igame.su14 != null) su14 = Igame.su14;
	if (Igame.su15 != null) su15 = Igame.su15;
	if (Igame.su16 != null) su16 = Igame.su16;
	if (Igame.fu1 != null) fu1 = Igame.fu1;
	if (Igame.fu2 != null) fu2 = Igame.fu2;
	if (Igame.fu3 != null) fu3 = Igame.fu3;
	if (Igame.fu4 != null) fu4 = Igame.fu4;
	if (Igame.fu5 != null) fu5 = Igame.fu5;
	if (Igame.fu6 != null) fu6 = Igame.fu6;
	if (Igame.fu7 != null) fu7 = Igame.fu7;
	if (Igame.fu8 != null) fu8 = Igame.fu8;
	if (Igame.fu9 != null) fu9 = Igame.fu9;
	if (Igame.fu10 != null) fu10 = Igame.fu10;
	if (Igame.mainTutorial != null) mainTutorial = Igame.mainTutorial;
	if (Igame.inventoryTutorial != null) inventoryTutorial = Igame.inventoryTutorial;
	if (Igame.storeTutorial != null) storeTutorial = Igame.storeTutorial;
	if (Igame.statsTutorial != null) statsTutorial = Igame.statsTutorial;
	if (Igame.achievementsTutorial != null) achievementsTutorial = Igame.achievementsTutorial;
	if (Igame.lumberjackTutorial != null) lumberjackTutorial = Igame.lumberjackTutorial;
	if (Igame.icefishingTutorial != null) icefishingTutorial = Igame.icefishingTutorial;
	if (Igame.beardTutorial != null) beardTutorial = Igame.beardTutorial;
	if (Igame.kindnessTutorial != null) kindnessTutorial = Igame.kindnessTutorial;
	if (Igame.hockeyTutorial != null) hockeyTutorial = Igame.hockeyTutorial;
	if (Igame.totalPine != null) totalPine = Igame.totalPine;
	if (Igame.totalSpruce != null) totalSpruce = Igame.totalSpruce;
	if (Igame.totalMaple != null) totalMaple = Igame.totalMaple;
	if (Igame.totalOak != null) totalOak = Igame.totalOak;
	if (Igame.totalBirch != null) totalBirch = Igame.totalBirch;
	if (Igame.totalAsh != null) totalAsh = Igame.totalAsh;
	if (Igame.totalTrout != null) totalTrout = Igame.totalTrout;
	if (Igame.totalSalmon != null) totalSalmon = Igame.totalSalmon;
	if (Igame.totalCod != null) totalCod = Igame.totalCod;
	if (Igame.totalCrab != null) totalCrab = Igame.totalCrab;
	if (Igame.totalHalibut != null) totalHalibut = Igame.totalHalibut;
	if (Igame.totalWhale != null) totalWhale = Igame.totalWhale;
	if (Igame.totalPucks != null) totalPucks = Igame.totalPucks;
	if (Igame.totalSticks != null) totalSticks = Igame.totalSticks;
	if (Igame.totalGloves != null) totalGloves = Igame.totalGloves;
	if (Igame.totalSkates != null) totalSkates = Igame.totalSkates;
	if (Igame.totalGoals != null) totalGoals = Igame.totalGoals;
	if (Igame.totalZambonies != null) totalZambonies = Igame.totalZambonies;
	if (Igame.totalMinutes != null) totalMinutes = Igame.totalMinutes;
	if (Igame.totalBrownBeard != null) totalBrownBeard = Igame.totalBrownBeard;
	if (Igame.totalBlackBeard != null) totalBlackBeard = Igame.totalBlackBeard;
	if (Igame.totalSilverBeard != null) totalSilverBeard = Igame.totalSilverBeard;
	if (Igame.totalGoldBeard != null) totalGoldBeard = Igame.totalGoldBeard;
	if (Igame.totalRedBeard != null) totalRedBeard = Igame.totalRedBeard;
	if (Igame.totalGrizzlyBeard != null) totalGrizzlyBeard = Igame.totalGrizzlyBeard;
	if (Igame.totalkind1 != null) totalkind1 = Igame.totalkind1;
	if (Igame.totalkind2 != null) totalkind2 = Igame.totalkind2;
	if (Igame.totalkind3 != null) totalkind3 = Igame.totalkind3;
	if (Igame.totalkind4 != null) totalkind4 = Igame.totalkind4;
	if (Igame.totalkind5 != null) totalkind5 = Igame.totalkind5;
	if (Igame.totalkind6 != null) totalkind6 = Igame.totalkind6;
	if (Igame.totalkind7 != null) totalkind7 = Igame.totalkind7;
	if (Igame.totalkind8 != null) totalkind8 = Igame.totalkind8;
	if (Igame.totalkind9 != null) totalkind9 = Igame.totalkind9;
	if (Igame.totalkind10 != null) totalkind10 = Igame.totalkind10;
	if (Igame.totalhockey1 != null) totalhockey1 = Igame.totalhockey1;
	if (Igame.totalhockey2 != null) totalhockey2 = Igame.totalhockey2;
	if (Igame.totalhockey3 != null) totalhockey3 = Igame.totalhockey3;
	if (Igame.totalhockey4 != null) totalhockey4 = Igame.totalhockey4;
	if (Igame.totalhockey5 != null) totalhockey5 = Igame.totalhockey5;
	if (Igame.totalhockey6 != null) totalhockey6 = Igame.totalhockey6;
	if (Igame.totalhockey7 != null) totalhockey7 = Igame.totalhockey7;
	if (Igame.totalhockey8 != null) totalhockey8 = Igame.totalhockey8;
	if (Igame.totalhockey9 != null) totalhockey9 = Igame.totalhockey9;
	if (Igame.totalhockey10 != null) totalhockey10 = Igame.totalhockey10;
	if (Igame.totalhockey11 != null) totalhockey11 = Igame.totalhockey11;
	if (Igame.totalhockey12 != null) totalhockey12 = Igame.totalhockey12;
	if (Igame.totalhockey13 != null) totalhockey13 = Igame.totalhockey13;
	if (Igame.totalhockey14 != null) totalhockey14 = Igame.totalhockey14;
	if (Igame.totalhockey15 != null) totalhockey15 = Igame.totalhockey15;
	if (Igame.totalInstantKindness != null) totalInstantKindness = Igame.totalInstantKindness;
	if (Igame.totalInstantHockey != null) totalInstantHockey = Igame.totalInstantHockey;
	if (Igame.totalMoney != null) totalMoney = Igame.totalMoney;
	if (Igame.totalSyrup != null) totalSyrup = Igame.totalSyrup;
	if (Igame.totalFlannel != null) totalFlannel = Igame.totalFlannel;
	if (Igame.yesterday != null) yesterday = Igame.yesterday;
	if (Igame.totalDaysPlayed != null) totalDaysPlayed = Igame.totalDaysPlayed;
	if (Igame.daysStreak != null) daysStreak = Igame.daysStreak;
	if (Igame.bestdaysStreak != null) bestdaysStreak = Igame.bestdaysStreak;
	if (Igame.upgradeCount != null) upgradeCount = Igame.upgradeCount;
	if (Igame.aboot != null) aboot = Igame.aboot;
	if (Igame.reddit != null) reddit = Igame.reddit;
	if (Igame.importer != null) importer = Igame.importer;
	if (Igame.IceFishingNotifyToggle != null) IceFishingNotifyToggle = Igame.IceFishingNotifyToggle;
	if (Igame.KindnessNotifyToggle != null) KindnessNotifyToggle = Igame.KindnessNotifyToggle;
	if (Igame.HockeyNotifyToggle != null) HockeyNotifyToggle = Igame.HockeyNotifyToggle;
	if (Igame.Prestige != null) Prestige = Igame.Prestige;
	if (Igame.PrestigeBeards != null) PrestigeBeards = Igame.PrestigeBeards;
	if (Igame.PrestigeFish != null) PrestigeFish = Igame.PrestigeFish;
	if (Igame.PrestigeUpgrades != null) PrestigeUpgrades = Igame.PrestigeUpgrades;
	if (Igame.LumberjackBuff != null) LumberjackBuff = Igame.LumberjackBuff;
	if (Igame.IceFishingBuff != null) IceFishingBuff = Igame.IceFishingBuff;
	if (Igame.BeardBuff != null) BeardBuff = Igame.BeardBuff;
	if (Igame.KindnessBuff != null) KindnessBuff = Igame.KindnessBuff;
	if (Igame.HockeyBuff != null) HockeyBuff = Igame.HockeyBuff;
	if (Igame.TotalLumberjackBuff != null) TotalLumberjackBuff = Igame.TotalLumberjackBuff;
	if (Igame.TotalIceFishingBuff != null) TotalIceFishingBuff = Igame.TotalIceFishingBuff;
	if (Igame.TotalBeardBuff != null) TotalBeardBuff = Igame.TotalBeardBuff;
	if (Igame.TotalKindnessBuff != null) TotalKindnessBuff = Igame.TotalKindnessBuff;
	if (Igame.TotalHockeyBuff != null) TotalHockeyBuff = Igame.TotalHockeyBuff;
	if (Igame.MakeItRain != null) MakeItRain = Igame.MakeItRain;
	if (Igame.PineCheck != null) PineCheck = Igame.PineCheck;
	if (Igame.SpruceCheck != null) SpruceCheck = Igame.SpruceCheck;
	if (Igame.MapleCheck != null) MapleCheck = Igame.MapleCheck;
	if (Igame.OakCheck != null) OakCheck = Igame.OakCheck;
	if (Igame.BirchCheck != null) BirchCheck = Igame.BirchCheck;
	if (Igame.AshCheck != null) AshCheck = Igame.AshCheck;
	if (Igame.TroutCheck != null) TroutCheck = Igame.TroutCheck;
	if (Igame.SalmonCheck != null) SalmonCheck = Igame.SalmonCheck;
	if (Igame.CodCheck != null) CodCheck = Igame.CodCheck;
	if (Igame.CrabCheck != null) CrabCheck = Igame.CrabCheck;
	if (Igame.HalibutCheck != null) HalibutCheck = Igame.HalibutCheck;
	if (Igame.WhaleCheck != null) WhaleCheck = Igame.WhaleCheck;
	if (Igame.PucksCheck != null) PucksCheck = Igame.PucksCheck;
	if (Igame.SticksCheck != null) SticksCheck = Igame.SticksCheck;
	if (Igame.GlovesCheck != null) GlovesCheck = Igame.GlovesCheck;
	if (Igame.SkatesCheck != null) SkatesCheck = Igame.SkatesCheck;
	if (Igame.GoalsCheck != null) GoalsCheck = Igame.GoalsCheck;
	if (Igame.ZamboniesCheck != null) ZamboniesCheck = Igame.ZamboniesCheck;
	if (Igame.isFishing != null) isFishing = Igame.isFishing;
	if (Igame.changeSkins != null) changeSkins = Igame.changeSkins;
	if (Igame.whatskin != null) whatskin = Igame.whatskin;
	
	save();
	window.location = "http://www.canadaclicker.com";
	//return false;

}


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
			if (currentTab == 0){
				openTab(8);
			}else{
				openTab((currentTab-1));
			}
            break;
        case 39:
            if (currentTab == 8){
				openTab(0);
			}else{
				openTab((currentTab+1));
			}
            break;
		default:
			break;
    }
};


//tab management functions
function openTab(val, ele){	
	hideAllTabs();
	if(val == 0){
		document.getElementById("inventory-tab").style.display = "block";
		$('#tab1').attr('class',"tabActive");
		currentTab = 0;
		}
	if(val == 1){
		document.getElementById("store-tab").style.display = "block";
		$('#tab2').attr('class',"tabActive");
		currentTab = 1;
		}
	if(val == 2){
		document.getElementById("levels-tab").style.display = "block";
		$('#tab3').attr('class',"tabActive");
		currentTab = 2;
		}
	if(val == 3){
		document.getElementById("achievements-tab").style.display = "block";
		$('#tab4').attr('class',"tabActive");
		currentTab = 3;
		}
	if(val == 4){
		document.getElementById("lumberjack-tab").style.display = "block";
		$('#tab5').attr('class',"tabActive");
		currentTab = 4;
		}
	if(val == 5){
		document.getElementById("icefishing-tab").style.display = "block";
		$('#tab6').attr('class',"tabActive");
		currentTab = 5;
		}
	if(val == 6){
		document.getElementById("beard-tab").style.display = "block";
		$('#tab7').attr('class',"tabActive");
		currentTab = 6;
		}
	if(val == 7){
		document.getElementById("kindness-tab").style.display = "block";
		$('#tab8').attr('class',"tabActive");
		currentTab = 7;
		}
	if(val == 8){
		document.getElementById("hockey-tab").style.display = "block";
		$('#tab9').attr('class',"tabActive");
		currentTab = 8;
		}
}


function hideAllTabs(){
	document.getElementById("inventory-tab").style.display = "none";
	document.getElementById("store-tab").style.display = "none";
	document.getElementById("levels-tab").style.display = "none";
	document.getElementById("achievements-tab").style.display = "none";
	document.getElementById("lumberjack-tab").style.display = "none";
	document.getElementById("icefishing-tab").style.display = "none";
	document.getElementById("beard-tab").style.display = "none";
	document.getElementById("kindness-tab").style.display = "none";
	document.getElementById("hockey-tab").style.display = "none";
	$('#tab1').attr('class',"tab");
	$('#tab2').attr('class',"tab");
	$('#tab3').attr('class',"tab");
	$('#tab4').attr('class',"tab");
	$('#tab5').attr('class',"tab");
	$('#tab6').attr('class',"tab");
	$('#tab7').attr('class',"tab");
	$('#tab8').attr('class',"tab");
	$('#tab9').attr('class',"tab");
}

//tutorial functions
function Tutorial(tutor){
	if (window[tutor]){
		document.getElementById(tutor).style.display = "block";
		document.getElementById(tutor).innerHTML = "<table border=0><tr><td>"+window[tutor+"Text"]+"</td><td valign='top' style='padding:0px 5px 0px 5px'><img src='images/blackx2.png' onClick=toggleTutorial('"+tutor+"');></td></tr></table>";
	}else{
		document.getElementById(tutor).style.display = "none";
	}
}

function toggleTutorial(tutor){//turns on or off tutorials
	window[tutor]=!window[tutor];
	Tutorial(tutor);
	isTutorial(tutor);
}

function isTutorial(tutor){
	if (window[tutor]){
		document.getElementById(tutor+"Button").innerHTML = "Turn Tutorial Off";
	}else{
		document.getElementById(tutor+"Button").innerHTML = "Turn Tutorial On";
	}
}




//selling functions
function sellAll(item){
	InventoryItems = ["Pine", "Spruce", "Maple", "Oak", "Birch", "Ash", "Trout", "Salmon", "Cod", "Crab", "Halibut", "Whale", "Pucks", "Sticks", "Gloves", "Skates", "Goals", "Zambonies"];
	if (item == "Everything"){
		for (i=0; i<InventoryItems.length; i++){
			Money += window[InventoryItems[i]]*window[InventoryItems[i]+"Value"];
			totalMoney += window[InventoryItems[i]]*window[InventoryItems[i]+"Value"];
			window[InventoryItems[i]] = 0;
			DisplayStuff(InventoryItems[i]);
		}
	}else{
		Money += window[item]*window[item+"Value"];
		totalMoney += window[item]*window[item+"Value"];
		window[item] = 0;
		DisplayStuff(item);
	}
	DisplayStuff('Money');
	DisplayStuff('totalMoney');
	achievementProgress("moreMoney");
}

function sellSelected(frm){
	InventoryItems = ["Pine", "Spruce", "Maple", "Oak", "Birch", "Ash", "Trout", "Salmon", "Cod", "Crab", "Halibut", "Whale", "Pucks", "Sticks", "Gloves", "Skates", "Goals", "Zambonies"];	
	for (i=0; i<InventoryItems.length; i++){	
		if (document.forms["inventory"][InventoryItems[i]].checked){			
			Money += window[InventoryItems[i]]*window[InventoryItems[i]+"Value"];
			totalMoney += window[InventoryItems[i]]*window[InventoryItems[i]+"Value"];
			window[InventoryItems[i]] = 0;
			DisplayStuff(InventoryItems[i]);

		}		
	}
}

function CheckToSell(item){

		if (document.forms["inventory"][item].checked){
			window[item+"Check"]=1;
		}else{
			window[item+"Check"]=0;
		}
}

function loadInventoryCheckbox(item){
	
	if (window[item+"Check"]){
		document.getElementById(item+"Checkbox").innerHTML = "<input type='checkbox' class='inventory' name='"+item+"' value='"+item+"' onClick=CheckToSell('"+item+"') checked>";
	}else{
		document.getElementById(item+"Checkbox").innerHTML = "<input type='checkbox' class='inventory' name='"+item+"' value='"+item+"' onClick=CheckToSell('"+item+"') >";
	}
		
}


//Buying lumberjack crew
function BuyCrew(dude){
	if (Money >= window[dude+"Cost"]){
		Money -= window[dude+"Cost"];
		window[dude]++;
		DisplayStuff(dude);
		CrewCost(dude);
		DisplayStuff('Money');
		DisplayWoodPerSecond();
	}
}

function CrewCost(dude){//calculates the cost of the next crew addition
	
	window[dude+"Cost"] = Math.floor(window[dude+"CostInitial"] * Math.pow(1.09,window[dude]));
	DisplayStuff(dude+"Cost");
}

function updateWPS(){ //updates the WPS values of each worker.  also updates wood per click and xp 每次点击
	Axenumber = AxeBudSpeed*Math.max(1, Lu11*Lu11num, Lu12*Lu12num, Lu19*Lu19num)*PrestigeWorkerBonus[Prestige];
	Axenumber = parseFloat((Axenumber).toFixed(3));
	
	Chainsawnumber = ChainsawPalSpeed*Math.max(1, Lu13*Lu13num, Lu14*Lu14num, Lu21*Lu21num)*PrestigeWorkerBonus[Prestige];
	Chainsawnumber = parseFloat((Chainsawnumber).toFixed(3));
	
	Fellernumber = FellerFriendSpeed*Math.max(1, Lu15*Lu15num, Lu16*Lu16num, Lu23*Lu23num)*PrestigeWorkerBonus[Prestige];
	Fellernumber = parseFloat((Fellernumber).toFixed(3));
	
	Transportnumber = TransportGuySpeed*Math.max(1, Lu17*Lu17num, Lu18*Lu18num, Lu24*Lu24num)*PrestigeWorkerBonus[Prestige];
	Transportnumber = parseFloat((Transportnumber).toFixed(3));	
	
	document.getElementById("AxeBudWPS").innerHTML = "+" + Axenumber + " WPS";
	document.getElementById("ChainsawPalWPS").innerHTML = "+" + Chainsawnumber + " WPS";
	document.getElementById("FellerFriendWPS").innerHTML = "+" + Fellernumber + " WPS";
	document.getElementById("TransportGuyWPS").innerHTML = "+" + Transportnumber + " WPS";
	
	LumberjackXPperClick = 0.5*Math.max(1, Lu1*Lu1num, Lu2*Lu2num, Lu3*Lu3num, Lu4*Lu4num, Lu5*Lu5num, Lu22*Lu22num)*LumberjackXPMultiplier*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*PrestigeXP[Prestige];
	LumberjackXPperClick = parseFloat((LumberjackXPperClick).toFixed(2));
	number = Math.max(1, Lu6*Lu6num, Lu7*Lu7num, Lu8*Lu8num, Lu9*Lu9num, Lu10*Lu10num, Lu20*Lu20num)*TreeMultiplier;
	document.getElementById("LumberjackXPperClick").innerHTML = "+" + number + " 木头 每次点击<br>+" + LumberjackXPperClick + " 伐木工人经验 每次点击";
}





//Tree clicking functions
function TreeClick(e){//called when tree is clicked manually
	BuffXP=1;
	if (LumberjackBuff > 0){
		BuffXP=1.25;
		LumberjackBuff--;
	}
	
	LumberjackXP += 0.5*BuffXP*Math.max(1, Lu1*Lu1num, Lu2*Lu2num, Lu3*Lu3num, Lu4*Lu4num, Lu5*Lu5num, Lu22*Lu22num)*LumberjackXPMultiplier*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*PrestigeXP[Prestige];
	number = Math.max(1, Lu6*Lu6num, Lu7*Lu7num, Lu8*Lu8num, Lu9*Lu9num, Lu10*Lu10num, Lu20*Lu20num)*TreeMultiplier;
	DisplayLumberjackXP();
	getWood(number);
	TreeClicks++;
	DisplayStuff('TreeClicks');
	BuffXP=1;
	BuffRemaining("Lumberjack");
	
	
	LumberjackProgress();
	achievementProgress("clicking");
	achievementProgress("trees");
}




function getWood(x){//randomly assigns wood to inventory
	y = 0;
	if (x>=100){
		y = Math.floor(x/10);
		x = x - (y*10);
	}

	cycles = Math.max(x,y);

	for (i=0; i<cycles; i++){
	var rand = Math.round(Math.random()*1000000);
	
	getX = 0;
	getY = 0;
	if (i < x){
		getX = 1;
	}
	if (i < y){
		getY = 10;
	}
	
	//each tree will be allotted a certain part of the random number between 0 and 1,000,000 inclusive
	//to get something other than pine, the wood must be unlocked.
	switch (true){
		case(rand<300000):
			if (SpruceUnlock){
				Spruce += getX;
				Spruce += getY;
				DisplayStuff('Spruce');
				totalSpruce += getX + getY;
				DisplayStuff('totalSpruce');
			}else{
			Pine += getX;
			Pine += getY;
			totalPine += getX + getY;
			DisplayStuff('totalPine');
			DisplayStuff('Pine');
			}
			break;
		case((rand>=300000)&&(rand<400000)):
			if (MapleUnlock){
				Maple += getX;
				Maple += getY;
				DisplayStuff('Maple');
				totalMaple += getX + getY;
				DisplayStuff('totalMaple');
			}else{
			Pine += getX;
			Pine += getY;
			DisplayStuff('Pine');
			totalPine += getX + getY;
			DisplayStuff('totalPine');
			}
			break;
		case((rand>=400000)&&(rand<450000)):
			if (OakUnlock){
				Oak += getX;
				Oak += getY;
				DisplayStuff('Oak');
				totalOak += getX + getY;
				DisplayStuff('totalOak');
			}else{
			Pine += getX;
			Pine += getY;
			DisplayStuff('Pine');
			totalPine += getX + getY;
			DisplayStuff('totalPine');
			}
			break;
		case((rand>=450000)&&(rand<470000)):
			if (BirchUnlock){
				Birch += getX;
				Birch += getY;
				DisplayStuff('Birch');
				totalBirch += getX + getY;
				DisplayStuff('totalBirch');
			}else{
			Pine += getX;
			Pine += getY;
			DisplayStuff('Pine');
			totalPine += getX + getY;
			DisplayStuff('totalPine');
			}
			break;
		case((rand>=470000)&&(rand<470200)):
			if (AshUnlock){
				Ash += getX;
				Ash += getY;
				DisplayStuff('Ash');
				totalAsh += getX + getY;
				DisplayStuff('totalAsh');
			}else{
			Pine += getX;
			Pine += getY;
			DisplayStuff('Pine');
			totalPine += getX + getY;
			DisplayStuff('totalPine');
			}
			break;
		case(rand>=470200):
			Pine += getX;
			Pine += getY;
			DisplayStuff('Pine');
			totalPine += getX + getY;
			DisplayStuff('totalPine');
			break;
		default:
			break;
	}	
	}
	totalTrees=totalPine+totalSpruce+totalMaple+totalOak+totalBirch+totalAsh;
	DisplayStuff('totalTrees');
}

function WoodPerSecond(){
	test = (AxeBud*AxeBudSpeed*Math.max(1, Lu11*Lu11num, Lu12*Lu12num, Lu19*Lu19num) + 
	ChainsawPal*ChainsawPalSpeed*Math.max(1, Lu13*Lu13num, Lu14*Lu14num, Lu21*Lu21num) + 
	FellerFriend*FellerFriendSpeed*Math.max(1, Lu15*Lu15num, Lu16*Lu16num, Lu23*Lu23num) + 
	TransportGuy*TransportGuySpeed*Math.max(1, Lu17*Lu17num, Lu18*Lu18num, Lu24*Lu24num))*PrestigeWorkerBonus[Prestige];	
	test = Math.round(10*test,1)/10;
	return test;
}



//Display functions
function DisplayStuff(item){//displays a variable to the same named span tag
	var check = eval(item);
	if (item.substring(item.length-8, item.length) == 'cooldown'){
		check = minutesAndSeconds2(check);
	}
	else {
	if (!isNaN(check)){
		check = Math.round(check);
		check = numberWithCommas(check);
	}
	}
	document.getElementById(item).innerHTML = check;
}


function DisplayWoodPerSecond(){
	document.getElementById("WoodPerSecond").innerHTML = WoodPerSecond();
}
function DisplayMasterXP(){
	//MasterXP = LumberjackXP+IceFishingXP+BeardXP+KindnessXP+HockeyXP;
	//document.getElementById("MasterXP").innerHTML = "Level: "+getLevel(MasterXP)+", XP: " + numberWithCommas(Math.round(MasterXP));
}
function DisplayLumberjackXP(){
	//document.getElementById("LumberjackXP").innerHTML = "Level: "+getLevel(LumberjackXP)+", XP: " + numberWithCommas(Math.round(LumberjackXP));
	//DisplayMasterXP();
}
function DisplayIceFishingXP(){
	//document.getElementById("IceFishingXP").innerHTML = "Level: "+getLevel(IceFishingXP)+", XP: " + numberWithCommas(Math.round(IceFishingXP));
	//DisplayMasterXP();
}
function DisplayBeardXP(){
	//document.getElementById("BeardXP").innerHTML = "Level: "+getLevel(BeardXP)+", XP: " + numberWithCommas(Math.round(BeardXP));
	//DisplayMasterXP();
}
function DisplayKindnessXP(){
	//document.getElementById("KindnessXP").innerHTML = "Level: "+getLevel(KindnessXP)+", XP: " + numberWithCommas(Math.round(KindnessXP));
	//DisplayMasterXP();
}
function DisplayHockeyXP(){
	//document.getElementById("HockeyXP").innerHTML = "Level: "+getLevel(HockeyXP)+", XP: " + numberWithCommas(Math.round(HockeyXP));
	//DisplayMasterXP();
}
function DisplayBait1(){
	document.getElementById("baitupdate").innerHTML = "鱼饵: "+Bait1;
}

//Unlock functions
function Unlock(item){
	switch(item){
		case "Spruce":
			if ((getLevel(LumberjackXP)>=SpruceUnlockLevel)&& (Money >= SpruceUnlockCost)){
				Money = Money - SpruceUnlockCost;
				SpruceUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'SpruceUnlock']);
			}
			break;
		case "Maple":
			if ((getLevel(LumberjackXP)>=MapleUnlockLevel)&& (Money >= MapleUnlockCost)){
				Money = Money - MapleUnlockCost;
				MapleUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'MapleUnlock']);
			}
			break;
		case "Oak":
			if ((getLevel(LumberjackXP)>=OakUnlockLevel)&& (Money >= OakUnlockCost)){
				Money = Money - OakUnlockCost;
				OakUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'OakUnlock']);
			}
			break;
		case "Birch":
			if ((getLevel(LumberjackXP)>=BirchUnlockLevel)&& (Money >= BirchUnlockCost)){
				Money = Money - BirchUnlockCost;
				BirchUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'BirchUnlock']);
			}
			break;
		case "Ash":
			if ((getLevel(LumberjackXP)>=AshUnlockLevel)&& (Money >= AshUnlockCost)){
				Money = Money - AshUnlockCost;
				AshUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'AshUnlock']);
			}
			break;
		case "Lu1":
			if (Money >= Lu1cost){
				Money = Money - Lu1cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu1']);
			}
			break;
		case "Lu2":
			if ((Money >= Lu2cost)&& Lu1){//have enough money and if previous upgrade is bought
				Money = Money - Lu1cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu2']);
			}
			break;
		case "Lu3":
			if ((Money >= Lu3cost)&& Lu2){//have enough money and if previous upgrade is bought
				Money = Money - Lu3cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu3']);
			}
			break;
		case "Lu4":
			if ((Money >= Lu4cost)&& Lu3){//have enough money and if previous upgrade is bought
				Money = Money - Lu4cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu4']);
			}
			break;
		case "Lu5":
			if ((Money >= Lu5cost)&& Lu4){//have enough money and if previous upgrade is bought
				Money = Money - Lu5cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu5']);
			}
			break;
		case "Lu6":
			if (Money >= Lu6cost){//have enough money and if previous upgrade is bought
				Money = Money - Lu6cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu6']);
			}
			break;
		case "Lu7":
			if ((Money >= Lu7cost)&& Lu6){//have enough money and if previous upgrade is bought
				Money = Money - Lu7cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu7']);
			}
			break;
		case "Lu8":
			if ((Money >= Lu8cost)&& Lu7){//have enough money and if previous upgrade is bought
				Money = Money - Lu8cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu8']);
			}
			break;
		case "Lu9":
			if ((Money >= Lu9cost)&& Lu8){//have enough money and if previous upgrade is bought
				Money = Money - Lu9cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu9']);
			}
			break;
		case "Lu10":
			if ((Money >= Lu10cost)&& Lu9){//have enough money and if previous upgrade is bought
				Money = Money - Lu10cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu10']);
			}
			break;
		case "Lu11":
			if (Money >= Lu11cost){//have enough money and if previous upgrade is bought
				Money = Money - Lu11cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu11']);
			}
			break;
		case "Lu12":
			if ((Money >= Lu12cost)&& Lu11){//have enough money and if previous upgrade is bought
				Money = Money - Lu12cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu12']);
			}
			break;
		case "Lu13":
			if (Money >= Lu13cost){//have enough money and if previous upgrade is bought
				Money = Money - Lu13cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu13']);
			}
			break;
		case "Lu14":
			if ((Money >= Lu14cost)&& Lu13){//have enough money and if previous upgrade is bought
				Money = Money - Lu14cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu14']);
			}
			break;
		case "Lu15":
			if (Money >= Lu15cost){//have enough money and if previous upgrade is bought
				Money = Money - Lu15cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu15']);
			}
			break;
		case "Lu16":
			if ((Money >= Lu16cost)&& Lu15){//have enough money and if previous upgrade is bought
				Money = Money - Lu16cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu16']);
			}
			break;
		case "Lu17":
			if (Money >= Lu17cost){//have enough money and if previous upgrade is bought
				Money = Money - Lu17cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu17']);
			}
			break;
		case "Lu18":
			if ((Money >= Lu18cost)&& Lu17){//have enough money and if previous upgrade is bought
				Money = Money - Lu18cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu18']);
			}
			break;
		case "Lu19":
			if ((Money >= Lu19cost)&& Lu12){//have enough money and if previous upgrade is bought
				Money = Money - Lu19cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu19']);
			}
			break;
		case "Lu20":
			if ((Money >= Lu20cost)&& Lu10){//have enough money and if previous upgrade is bought
				Money = Money - Lu20cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu20']);
			}
			break;
		case "Lu21":
			if ((Money >= Lu21cost)&& Lu14){//have enough money and if previous upgrade is bought
				Money = Money - Lu21cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu21']);
			}
			break;
		case "Lu22":
			if ((Money >= Lu22cost)&& Lu5){//have enough money and if previous upgrade is bought
				Money = Money - Lu22cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu22']);
			}
			break;
		case "Lu23":
			if ((Money >= Lu23cost)&& Lu16){//have enough money and if previous upgrade is bought
				Money = Money - Lu23cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu23']);
			}
			break;
		case "Lu24":
			if ((Money >= Lu24cost)&& Lu18){//have enough money and if previous upgrade is bought
				Money = Money - Lu24cost;
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Lu24']);
			}
			break;
		case "Be1":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be1']);
			}
			break;
		case "Be2":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be1){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be2']);
			}
			break;
		case "Be3":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be2){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be3']);
			}
			break;
		case "Be4":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be3){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be4']);
			}
			break;
		case "Be5":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be4){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be5']);
			}
			break;
		case "Be6":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be6']);
			}
			break;
		case "Be7":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be6){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be7']);
			}
			break;
		case "Be8":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be7){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be8']);
			}
			break;
		case "Be9":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be8){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be9']);
			}
			break;
		case "Be10":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be9){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be10']);
			}
			break;
		case "Be11":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be11']);
			}
			break;
		case "Be12":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be11){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be12']);
			}
			break;
		case "Be13":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be12){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be13']);
			}
			break;
		case "Be14":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be13){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be14']);
			}
			break;
		case "Be15":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be14){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be15']);
			}
			break;
		case "Be16":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be5){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be16']);
			}
			break;
		case "Be17":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be16){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be17']);
			}
			break;
		case "Be18":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be10){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be18']);
			}
			break;
		case "Be19":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be18){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be19']);
			}
			break;
		case "Be20":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be15){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be20']);
			}
			break;
		case "Be21":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be20){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be21']);
			}
			break;
		case "Be22":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be22']);
			}
			break;
		case "Be23":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be22){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be23']);
			}
			break;
		case "Be24":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be23){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be24']);
			}
			break;
		case "Be25":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be24){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be25']);
			}
			break;
		case "Be26":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be25){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be26']);
			}
			break;
		case "Be27":
			if ((Money >= window[item+"cost"]) && (getLevel(BeardXP)>=window[item+"req"]) && Be26){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Be27']);
			}
			break;
		case "BlackBeard":
			if ((Money >= window[item+"Cost"]) && (getLevel(BeardXP)>=window[item+"Level"])){//have enough money and if level is high enough
				Money = Money - window[item+"Cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'BlackBeardUnlock']);
			}
			break;
		case "SilverBeard":
			if ((Money >= window[item+"Cost"]) && (getLevel(BeardXP)>=window[item+"Level"])){//have enough money and if level is high enough
				Money = Money - window[item+"Cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'SilverBeardUnlock']);
			}
			break;
		case "GoldBeard":
			if ((Money >= window[item+"Cost"]) && (getLevel(BeardXP)>=window[item+"Level"])){//have enough money and if level is high enough
				Money = Money - window[item+"Cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'GoldBeardUnlock']);
			}
			break;
		case "RedBeard":
			if ((Money >= window[item+"Cost"]) && (getLevel(BeardXP)>=window[item+"Level"])){//have enough money and if level is high enough
				Money = Money - window[item+"Cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'RedBeardUnlock']);
			}
			break;
		case "GrizzlyBeard":
			if ((Money >= window[item+"Cost"]) && (getLevel(BeardXP)>=window[item+"Level"])){//have enough money and if level is high enough
				Money = Money - window[item+"Cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'GrizzlyBeardUnlock']);
			}
			break;
		case "Salmon":
			if ((getLevel(IceFishingXP)>=SalmonUnlockLevel)&& (Money >= SalmonUnlockCost)){
				Money = Money - SalmonUnlockCost;
				SalmonUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'SalmonUnlock']);
			}
			break;
		case "Cod":
			if ((getLevel(IceFishingXP)>=CodUnlockLevel)&& (Money >= CodUnlockCost)){
				Money = Money - CodUnlockCost;
				CodUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'CodUnlock']);
			}
			break;
		case "Crab":
			if ((getLevel(IceFishingXP)>=CrabUnlockLevel)&& (Money >= CrabUnlockCost)){
				Money = Money - CrabUnlockCost;
				CrabUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'CrabUnlock']);
			}
			break;
		case "Halibut":
			if ((getLevel(IceFishingXP)>=HalibutUnlockLevel)&& (Money >= HalibutUnlockCost)){
				Money = Money - HalibutUnlockCost;
				HalibutUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'HalibutUnlock']);
			}
			break;
		case "Whale":
			if ((getLevel(IceFishingXP)>=WhaleUnlockLevel)&& (Money >= WhaleUnlockCost)){
				Money = Money - WhaleUnlockCost;
				WhaleUnlock=1;
				IsLocked(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'WhaleUnlock']);
			}
			break;
		case "K1":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K1']);
			}
			break;
		case "K2":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K1){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K2']);
			}
			break;
		case "K3":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K2){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K3']);
			}
			break;
		case "K4":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K3){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K4']);
			}
			break;
		case "K5":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K4){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K5']);
			}
			break;
		case "K6":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K6']);
			}
			break;
		case "K7":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K6){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K7']);
			}
			break;
		case "K8":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K7){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K8']);
			}
			break;
		case "K9":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K8){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K9']);
			}
			break;
		case "K10":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K9){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K10']);
			}
			break;
		case "K11":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K11']);
			}
			break;
		case "K12":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K11){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K12']);
			}
			break;
		case "K13":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K12){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K13']);
			}
			break;
		case "K14":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K13){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K14']);
			}
			break;
		case "K15":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K14){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K15']);
			}
			break;
		case "K16":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K5){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K16']);
			}
			break;
		case "K17":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K16){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K17']);
			}
			break;
		case "K18":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K17){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K18']);
			}
			break;
		case "K19":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K10){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K19']);
			}
			break;
		case "K20":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K19){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K20']);
			}
			break;
		case "K21":
			if ((Money >= window[item+"cost"]) && (getLevel(KindnessXP)>=window[item+"req"]) && K20){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'K21']);
			}
			break;
		case "H1":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H1']);
			}
			break;
		case "H2":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H1){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H2']);
			}
			break;
		case "H3":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H2){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H3']);
			}
			break;
		case "H4":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H3){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H4']);
			}
			break;
		case "H5":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H4){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H5']);
			}
			break;
		case "H6":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H6']);
			}
			break;
		case "H7":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H6){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H7']);
			}
			break;
		case "H8":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H7){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H8']);
			}
			break;
		case "H9":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H8){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H9']);
			}
			break;
		case "H10":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H9){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H10']);
			}
			break;
		case "H11":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H11']);
			}
			break;
		case "H12":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H11){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H12']);
			}
			break;
		case "H13":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H12){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H13']);
			}
			break;
		case "H14":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H13){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H14']);
			}
			break;
		case "H15":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H14){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H15']);
			}
			break;
		case "H16":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H16']);
			}
			break;
		case "H17":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H16){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H17']);
			}
			break;
		case "H18":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H17){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H18']);
			}
			break;
		case "H19":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H18){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H19']);
			}
			break;
		case "H20":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H19){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H20']);
			}
			break;
		case "H21":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H5){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H21']);
			}
			break;
		case "H22":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H21){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H22']);
			}
			break;
		case "H23":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H22){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H23']);
			}
			break;
		case "H24":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H10){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H24']);
			}
			break;
		case "H25":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H24){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H25']);
			}
			break;
		case "H26":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H20){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H26']);
			}
			break;
		case "H27":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H26){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H27']);
			}
			break;
		case "H28":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H28']);
			}
			break;
		case "H29":
			if ((Money >= window[item+"cost"]) && (getLevel(HockeyXP)>=window[item+"req"]) && H28){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'H29']);
			}
			break;
		case "Ic1":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				BaitText();
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic1']);
			}
			break;
		case "Ic2":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic1){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				BaitText();
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic2']);
			}
			break;
		case "Ic3":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic2){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				BaitText();
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic3']);
			}
			break;
		case "Ic4":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic3){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				BaitText();
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic4']);
			}
			break;
		case "Ic5":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic4){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				BaitText();
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic5']);
			}
			break;
		case "Ic6":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic6']);
			}
			break;
		case "Ic7":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic6){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic7']);
			}
			break;
		case "Ic8":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic7){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic8']);
			}
			break;
		case "Ic9":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic8){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic9']);
			}
			break;
		case "Ic10":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic9){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic10']);
			}
			break;
		case "Ic11":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"])){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic11']);
			}
			break;
		case "Ic12":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic11){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic12']);
			}
			break;
		case "Ic13":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic12){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic13']);
			}
			break;
		case "Ic14":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic13){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic14']);
			}
			break;
		case "Ic15":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic14){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic15']);
			}
			break;
		case "Ic16":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic15){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic16']);
			}
			break;
		case "Ic17":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic16){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic17']);
			}
			break;
		case "Ic18":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic10){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic18']);
			}
			break;
		case "Ic19":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic18){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic19']);
			}
			break;
		case "Ic20":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic5){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				BaitText();
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic20']);
			}
			break;
		case "Ic21":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic20){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				BaitText();
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic21']);
			}
			break;
		case "Ic22":
			if ((Money >= window[item+"cost"]) && (getLevel(IceFishingXP)>=window[item+"req"]) && Ic21){//have enough money and if level is high enough
				Money = Money - window[item+"cost"];
				window[item]=1;
				BaitText();
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Ic22']);
			}
			break;
		case "su1":
			if (Syrup >= window[item+"cost"]){//have enough syrup 
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su1']);
			}
			break;
		case "su2":
			if ((Syrup >= window[item+"cost"]) && su1){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su2']);
			}
			break;
		case "su3":
			if ((Syrup >= window[item+"cost"]) && su2){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su3']);
			}
			break;
		case "su4":
			if ((Syrup >= window[item+"cost"]) && su3){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su4']);
			}
			break;
		case "su5":
			if ((Syrup >= window[item+"cost"]) && su4){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su5']);
			}
			break;
		case "su6":
			if ((Syrup >= window[item+"cost"]) && su5){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su6']);
			}
			break;
		case "su7":
			if (Syrup >= window[item+"cost"]){//have enough syrup 
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su7']);
			}
			break;
		case "su8":
			if ((Syrup >= window[item+"cost"]) && su7){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su8']);
			}
			break;
		case "su9":
			if ((Syrup >= window[item+"cost"]) && su8){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su9']);
			}
			break;
		case "su10":
			if ((Syrup >= window[item+"cost"]) && su9){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su10']);
			}
			break;
		case "su11":
			if ((Syrup >= window[item+"cost"]) && su10){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su11']);
			}
			break;
		case "su12":
			if ((Syrup >= window[item+"cost"]) && su11){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su12']);
			}
			break;
		case "su13":
			if ((Syrup >= window[item+"cost"]) && su6){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su13']);
			}
			break;
		case "su14":
			if ((Syrup >= window[item+"cost"]) && su13){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su14']);
			}
			break;
		case "su15":
			if ((Syrup >= window[item+"cost"]) && su12){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su15']);
			}
			break;
		case "su16":
			if ((Syrup >= window[item+"cost"]) && su15){//have enough syrup and previous upgrade bought
				Syrup -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'su16']);
			}
			break;
		case "fu1":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				IsLockedUpgrade(item);
				ImportExport();
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu1']);
			}
			break;
		case "fu2":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu2']);
			}
			break;
		case "fu3":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu3']);
			}
			break;
		case "fu4":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu4']);
			}
			break;
		case "fu5":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu5']);
			}
			break;
		case "fu6":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu6']);
			}
			break;
		case "fu7":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu7']);
			}
			break;
		case "fu8":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu8']);
			}
			break;
		case "fu9":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu9']);
			}
			break;
		case "fu10":
			if (Flannel >= window[item+"cost"]){//have enough flannel 
				Flannel -= window[item+"cost"];
				window[item]=1;
				skinActive(item);
				upgradeCount++;
				_gaq.push(['_trackEvent', 'Canada Clicker', 'fu10']);
			}
			break;
		default:
			break;

	}	
	DisplayStuff('Money');
	DisplayStuff('Syrup');
	DisplayStuff('Flannel');
	DisplayWoodPerSecond();
	updateHockeyXP();
	updateKindnessXP();
}


function IsLocked(item){
	if (window[item+"Unlock"]){
			document.getElementById("Unlock"+item).innerHTML = "已解锁!";
		}else{
			//lumberjack
			if (((item=="Spruce") || (item=="Maple") || (item=="Oak") || (item=="Birch") || (item=="Ash")) && (getLevel(LumberjackXP)>=window[item+"UnlockLevel"])){
			document.getElementById("Unlock"+item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
			}else{
			document.getElementById("Unlock"+item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
			
			//ice fishing
			if (((item=="Salmon") || (item=="Cod") || (item=="Crab") || (item=="Halibut") || (item=="Whale")) && (getLevel(IceFishingXP)>=window[item+"UnlockLevel"])){
			document.getElementById("Unlock"+item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
			}else{
			document.getElementById("Unlock"+item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
			}

			}
		}
}

function IsLockedUpgrade(item){
	if (eval(item)){
			if ((item.substring(0,2)=="fu") && (item != "fu1")){
				skinActive(item);
			}
			else{
				document.getElementById(item).innerHTML = "已解锁!";
			}
		}else{
			
			switch (true){
				case(item.substring(0,2)=="Lu"):
					if (getLevel(LumberjackXP)>=window[item+"req"]){
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					}else{
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
					}
					break;
				case(item.substring(0,2)=="Be"):
					if (getLevel(BeardXP)>=window[item+"req"]){
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					}else{
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
					}
					break;
				case(item.substring(0,2)=="Ic"):
					if (getLevel(IceFishingXP)>=window[item+"req"]){
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					}else{
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
					}
					break;
				case(item.substring(0,1)=="K"):
					if (getLevel(KindnessXP)>=window[item+"req"]){
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					}else{
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
					}
					break;
				case(item.substring(0,1)=="H"):
					if (getLevel(HockeyXP)>=window[item+"req"]){
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					}else{
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
					}
					break;
				case(item.substring(0,2)=="su"):
					document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					break;
				case(item.substring(0,2)=="fu"):
					document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					break;
				case (item.slice(-5)=="Beard"):
					if (getLevel(BeardXP)>=window[item+"Level"]){
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
					}else{
						document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"') disabled>解锁</button>";
					}
					break;
				default:
					break;
			}
		}
}


function checkAllUpgrades(){
	stuff = ["Spruce", "Maple", "Oak", "Birch", "Ash", "Salmon", "Cod", "Crab", "Halibut", "Whale"];
	for (i=1; i<= stuff.length; i++){
		IsLocked(stuff[i-1]);
	}
	//ice fishing
	for (i=1; i<=22; i++){
		IsLockedUpgrade("Ic"+i);
	}
	
	beards = ["Black", "Silver", "Gold", "Red", "Grizzly"];
	for (i=1; i<=beards.length; i++){
		IsLockedUpgrade(beards[i-1]+"Beard");
	}
	
	//lumberjack
	for (i=1; i<=24; i++){
		IsLockedUpgrade("Lu"+i);
	}
	
	//beard
	for (i=1; i<=27; i++){
		IsLockedUpgrade("Be"+i);
	}
	//kindness
	for (i=1; i<=21; i++){
		IsLockedUpgrade("K"+i);
	}
	//kindness activities
	for (i=1; i<=18; i++){
		KindnessButton("kind"+i);
	}
	//hockey
	for (i=1; i<=29; i++){
		IsLockedUpgrade("H"+i);
	}
	//hockey activities
	for (i=1; i<=15; i++){
		HockeyButton("hockey"+i);
	}
	

}



//Ice Fishing functions

function BaitLimit(){
	BaitLimit = Math.max(5, Ic1*Ic1num, Ic2*Ic2num, Ic3*Ic3num, Ic4*Ic4num, Ic5*Ic5num, Ic20*Ic20num, Ic21*Ic21num, Ic22*Ic22num);
	return BaitLimit;
}

function StartFishing(quantity){
	limit = Math.max(5, Ic1*Ic1num, Ic2*Ic2num, Ic3*Ic3num, Ic4*Ic4num, Ic5*Ic5num, Ic20*Ic20num, Ic21*Ic21num, Ic22*Ic22num);
	if((quantity !=null) && !isNaN(quantity) && (quantity > 0) && (quantity%1==0) && (Bait1>=quantity)){
		if (quantity > limit){
			isFishing = limit;	
		}else{
			isFishing = quantity;
		}
	}else{
		document.getElementById('FishingDisplay').innerHTML = "Invalid Ice Fishing Attempt.";
	}
}

function fishMax(){
	limit = Math.max(5, Ic1*Ic1num, Ic2*Ic2num, Ic3*Ic3num, Ic4*Ic4num, Ic5*Ic5num, Ic20*Ic20num, Ic21*Ic21num, Ic22*Ic22num);
	if (Bait1 >= limit){
		StartFishing(limit);	
	}else{
		StartFishing(Bait1);
	}
}

function BaitText(){
	BaitLimit = Math.max(5, Ic1*Ic1num, Ic2*Ic2num, Ic3*Ic3num, Ic4*Ic4num, Ic5*Ic5num, Ic20*Ic20num, Ic21*Ic21num, Ic22*Ic22num);
	document.getElementById('BaitTextBox').innerHTML = "<input type='text' id='BaitHooks' placeholder='挂诱饵到 " + BaitLimit + " 钩子上'>";
}

function getFish(){//returns the fish caught

	BuffXP=1;
	if (IceFishingBuff > 0){
		BuffXP=1.25;
		IceFishingBuff--;
	}
		BuffRemaining("IceFishing");


	var rand = Math.round(Math.random()*1000000);
	//each fish will be allotted a certain part of the random number between 0 and 1,000,000 inclusive
	//to get something other than pine, the wood must be unlocked.
	switch (true){
		case(rand<300000):
			if (SalmonUnlock){
				Salmon++;
				totalSalmon++;
				IceFishingXPearned = SalmonXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
				IceFishingXP += IceFishingXPearned;
				IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
				if (IceFishingNotifyToggle){
				$.notify("你刚抓到一条 大马哈鱼!\n+" + IceFishingXPearned + " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
				}
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Salmon']);
			}else{
			Trout++;
			totalTrout++;
			IceFishingXPearned = TroutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
			IceFishingXP += IceFishingXPearned;
			IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
			if (IceFishingNotifyToggle){
			$.notify("你刚抓到一条 鳟鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
			}
			_gaq.push(['_trackEvent', 'Canada Clicker', 'Trout']);
			}
			break;
		case((rand>=300000)&&(rand<500000)):
			if (CodUnlock){
				Cod++;
				totalCod++;
				IceFishingXPearned = CodXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
				IceFishingXP += IceFishingXPearned;
				IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
				if (IceFishingNotifyToggle){
				$.notify("你刚抓到一条 鳕鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
				}
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Cod']);
			}else{
			Trout++;
			totalTrout++;
			IceFishingXPearned = TroutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
			IceFishingXP += IceFishingXPearned;
			IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
			if (IceFishingNotifyToggle){
			$.notify("你刚抓到一条 鳟鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
			}
			_gaq.push(['_trackEvent', 'Canada Clicker', 'Trout']);
			}
			break;
		case((rand>=500000)&&(rand<600000)):
			if (CrabUnlock){
				Crab++;
				totalCrab++;
				IceFishingXPearned = CrabXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
				IceFishingXP += IceFishingXPearned;
				IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
				if (IceFishingNotifyToggle){
				$.notify("你刚抓到一只 螃蟹!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
				}
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Crab']);
			}else{
			Trout++;
			totalTrout++;
			IceFishingXPearned = TroutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
			IceFishingXP += IceFishingXPearned;
			IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
			if (IceFishingNotifyToggle){
			$.notify("你刚抓到一条 鳟鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
			}
			_gaq.push(['_trackEvent', 'Canada Clicker', 'Trout']);
			}
			break;
		case((rand>=600000)&&(rand<650000)):
			if (HalibutUnlock){
				Halibut++;
				totalHalibut++;
				IceFishingXPearned = HalibutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
				IceFishingXP += IceFishingXPearned;
				IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
				if (IceFishingNotifyToggle){
				$.notify("你刚抓到一条 大比目鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
				}
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Halibut']);
			}else{
			Trout++;
			totalTrout++;
			IceFishingXPearned = TroutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
			IceFishingXP += IceFishingXPearned;
			IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
			if (IceFishingNotifyToggle){
			$.notify("你刚抓到一条 鳟鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
			}
			_gaq.push(['_trackEvent', 'Canada Clicker', 'Trout']);
			}
			break;
		case((rand>=650000)&&(rand<670000)):
			if (WhaleUnlock){
				Whale++;
				totalWhale++;
				achievementProgress("catchawhale");
				IceFishingXPearned = WhaleXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
				IceFishingXP += IceFishingXPearned;
				IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
				if (IceFishingNotifyToggle){
				$.notify("你刚抓到一条 鲸鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
				}
				_gaq.push(['_trackEvent', 'Canada Clicker', 'Whale']);
			}else{
			Trout++;
			totalTrout++;
			IceFishingXPearned = TroutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
			IceFishingXP += IceFishingXPearned;
			IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
			if (IceFishingNotifyToggle){
			$.notify("你刚抓到一条 鳟鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
			}
			_gaq.push(['_trackEvent', 'Canada Clicker', 'Trout']);
			}
			break;
		case(rand>=670000):
			Trout++;
			totalTrout++;
			IceFishingXPearned = TroutXP*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(1+Math.max(0, Ic11*Ic11num, Ic12*Ic12num, Ic13*Ic13num, Ic14*Ic14num, Ic15*Ic15num, Ic16*Ic16num, Ic17*Ic17num));
			IceFishingXP += IceFishingXPearned;
			IceFishingXPearned = parseFloat((IceFishingXPearned).toFixed(2));
			if (IceFishingNotifyToggle){
			$.notify("你刚抓到一条 鳟鱼!\n+"+IceFishingXPearned+ " 经验", {style:'fish', className:'fish', position: 'top right', autoHide: true});
			}
			_gaq.push(['_trackEvent', 'Canada Clicker', 'Trout']);
			break;
		default:
			break;
	}
	DisplayStuff('Trout');
	DisplayStuff('Salmon');
	DisplayStuff('Cod');
	DisplayStuff('Crab');
	DisplayStuff('Halibut');
	DisplayStuff('Whale');
	DisplayStuff('totalTrout');
	DisplayStuff('totalSalmon');
	DisplayStuff('totalCod');
	DisplayStuff('totalCrab');
	DisplayStuff('totalHalibut');
	DisplayStuff('totalWhale');
	DisplayIceFishingXP();
	Bait1--;
	//DisplayStuff('Bait1');
	document.getElementById("baitupdate").innerHTML = "诱饵: "+Bait1;
	
	IceFishingClicks++;
	DisplayStuff('IceFishingClicks');
	DisplayStuff('BaitFished');
	IcefishingProgress();
	
	achievementProgress("baitFishing");
	
}





//Beard functions
function BeardClick(item){
	BuffXP=1;
	if (BeardBuff > 0){
		BuffXP=1.25;
		BeardBuff--;
	}
		BuffRemaining("Beard");
		
		LastBeard = RightNow.getTime();
		BeardClicks++;
		_gaq.push(['_trackEvent', 'Canada Clicker', item]);
		window["total"+item]++;
		DisplayStuff("total"+item);
		achievementProgress("getgrizzly");
		document.getElementById("BeardBox").innerHTML = "";
		document.getElementById("BeardBoxReward").innerHTML = "";
		document.getElementById("BeardBoxXP").innerHTML = "";
		
		rand = getRandomInt(1,6);//random integer between 1 (inclusive) and 6 (exclusive)
		switch (true){
			case (rand==1)://xp multiplier
				BeardXPearned = window[item+"XP"]*BuffXP*PrestigeXP[Prestige]*window[item+"Reward"+rand]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(Math.max(1, Be22*Be22num, Be23*Be23num, Be24*Be24num, Be25*Be25num, Be26*Be26num, Be27*Be27num));
				BeardXP += BeardXPearned;
				BeardXPearned = parseFloat((BeardXPearned).toFixed(2));
				document.getElementById("BeardBoxReward").innerHTML = "胡子双倍经验!";
				document.getElementById("BeardBoxXP").innerHTML = "+" + BeardXPearned + " 胡子经验";
				BeardRewardCountdown = 10;//displays message for number of seconds
				break;
			case (rand==2):
				BeardXPearned = window[item+"XP"]*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(Math.max(1, Be22*Be22num, Be23*Be23num, Be24*Be24num, Be25*Be25num, Be26*Be26num, Be27*Be27num));
				BeardXP += BeardXPearned;
				BeardXPearned = parseFloat((BeardXPearned).toFixed(2));
				LumberjackXPMultiplier = window[item+"Reward"+rand];
				document.getElementById("BeardBoxReward").innerHTML = LumberjackXPMultiplier;
				document.getElementById("BeardBoxXP").innerHTML = "+" + BeardXPearned + " 胡子经验";
				BeardRewardCountdown = 30;//sets the multiplier countdown
				document.getElementById("BeardBoxReward").innerHTML = "Times "+LumberjackXPMultiplier+" 伐木工人经验每次点击，剩余"+BeardRewardCountdown+" 秒";

				break;
			case (rand==3):
				BeardXPearned = window[item+"XP"]*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(Math.max(1, Be22*Be22num, Be23*Be23num, Be24*Be24num, Be25*Be25num, Be26*Be26num, Be27*Be27num));
				BeardXP += BeardXPearned;
				BeardXPearned = parseFloat((BeardXPearned).toFixed(2));
				TreeMultiplier = window[item+"Reward"+rand];
				BeardRewardCountdown = 30;//sets the multiplier countdown
				document.getElementById("BeardBoxReward").innerHTML = "每次点击得到 "+TreeMultiplier+" 树，剩余 "+BeardRewardCountdown+" 秒";
				document.getElementById("BeardBoxXP").innerHTML = "+" + BeardXPearned + " 胡子经验";
				break;
			case (rand==4)://add bait
				BeardXPearned = window[item+"XP"]*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(Math.max(1, Be22*Be22num, Be23*Be23num, Be24*Be24num, Be25*Be25num, Be26*Be26num, Be27*Be27num));
				BeardXP += BeardXPearned;
				BeardXPearned = parseFloat((BeardXPearned).toFixed(2));
				Bait1 += window[item+"Reward"+rand];
				document.getElementById("BeardBoxReward").innerHTML = "你得到了 "+window[item+"Reward"+rand]+" 钓鱼诱饵!";
				document.getElementById("BeardBoxXP").innerHTML = "+" + BeardXPearned + " 胡子经验";
				//DisplayStuff('Bait1');
				document.getElementById("baitupdate").innerHTML = "鱼饵: "+Bait1;
				BeardRewardCountdown = 10;//displays message for number of seconds
				break;
			case (rand==5)://add syrup
				BeardXPearned = window[item+"XP"]*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*(Math.max(1, Be22*Be22num, Be23*Be23num, Be24*Be24num, Be25*Be25num, Be26*Be26num, Be27*Be27num));
				BeardXP += BeardXPearned;
				BeardXPearned = parseFloat((BeardXPearned).toFixed(2));
				bonusSyrup = Math.max(0, Be11*Be11num, Be12*Be12num, Be13*Be13num, Be14*Be14num, Be15*Be15num, Be20*Be20num, Be21*Be21num);
				Syrup += window[item+"Reward"+rand]+bonusSyrup;
				DisplayStuff('Syrup');
				totalSyrup += window[item+"Reward"+rand]+bonusSyrup;
				DisplayStuff('totalSyrup');
				achievementProgress("somuchsyrup");
				document.getElementById("BeardBoxReward").innerHTML = "你获得了 "+(window[item+"Reward"+rand]+bonusSyrup)+" 糖浆";
				document.getElementById("BeardBoxXP").innerHTML = "+" + BeardXPearned + " 胡子经验";
				BeardRewardCountdown = 10;//displays message for number of seconds
				break;
			default:
			break;
		
		}
		DisplayMasterXP();
		DisplayBeardXP();
		DisplayStuff('BeardClicks');
		BeardProgress();
		achievementProgress("manly");
		
}

//purchase function
function BuyStuff(quantity, item){
	if ((quantity !=null) && !isNaN(quantity) && (quantity > 0) && (quantity%1==0) && (Money >= quantity*window[item+"Cost"])){
		quantity = Math.floor(quantity);
		Money -= quantity*window[item+"Cost"];
		window[item] += quantity;
		document.getElementById("baitupdate").innerHTML = "诱饵: "+window[item];
		DisplayStuff('Money');
		DisplayStuff(item);
		//document.getElementById("invalidpurchase").innerHTML = "You bought some Bait!";
	}else{
	document.getElementById("invalidpurchase").innerHTML = "抱歉，兄弟，那个输入不准确。";
	}
}

function SellStuff(quantity, item){
	if ((quantity !=null) && !isNaN(quantity) && (quantity > 0) && (quantity%1==0) && (quantity <= window[item])){
		quantity = Math.floor(quantity);
		Money += quantity*window[item+"Sell"];
		window[item] -= quantity;
		document.getElementById("baitupdate").innerHTML = "诱饵: "+window[item];
		DisplayStuff('Money');
		DisplayStuff(item);
		//document.getElementById("invalidpurchase").innerHTML = "You bought some Bait!";
	}else{
	document.getElementById("invalidpurchase").innerHTML = "抱歉，兄弟，那个输入不准确。";
	}
}


function getBeard(){//returns the Beard to be displayed
	var rand = Math.round(Math.random()*1000000);
	//each tree will be allotted a certain part of the random number between 0 and 1,000,000 inclusive
	//to get something other than pine, the wood must be unlocked.
	switch (true){
		case(rand<300000):
			if (BlackBeard){
				return "BlackBeard";
			}else{
			return "BrownBeard";
			}
			break;
		case((rand>=300000)&&(rand<500000)):
			if (SilverBeard){
				return "SilverBeard";
			}else{
			return "BrownBeard";
			}
			break;
		case((rand>=500000)&&(rand<600000)):
			if (GoldBeard){
				return "GoldBeard";
			}else{
			return "BrownBeard";
			}
			break;
		case((rand>=600000)&&(rand<650000)):
			if (RedBeard){
				return "RedBeard";
			}else{
			return "BrownBeard";
			}
			break;
		case((rand>=650000)&&(rand<670000)):
			if (GrizzlyBeard){
				return "GrizzlyBeard";
			}else{
			return "BrownBeard";
			}
			break;
		case(rand>=670000):
			return "BrownBeard";
			break;
		default:
			break;
	}
}

//kindness functions
function KindnessButton(item){//function to show kindness button
	if (!window[item+"inprogress"]){
				//Kindness activities
			if (getLevel(KindnessXP)>=window[item+"req"]){
				document.getElementById(item).innerHTML = "<button onClick=beKind('"+item+"')>做慈善!</button>";
			}else{
				document.getElementById(item).innerHTML = "<button onClick=beKind('"+item+"') disabled>做慈善!</button>";
			}
	
	}
}

var soKind = 0;

function beKind(item){//function called when kindness button is clicked.  check all conditionals, then initiate kindness
	instantKindness = 0;
	instantkindnessChance = Math.max(0, K11*K11num, K12*K12num, K13*K13num, K14*K14num, K15*K15num);
	if (instantkindnessChance > Math.random()){
		instantKindness = 1;
		totalInstantKindness++;
		DisplayStuff('totalInstantKindness');
		
	}

	switch (item){
		case 'kind1':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Pine>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Pine -= window[item+"cost"];
				DisplayStuff('Pine');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind1']);
			}
			break;
		case 'kind2':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Trout>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{				
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}				
				Trout -= window[item+"cost"];
				DisplayStuff('Trout');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind2']);
			}
			break;
		case 'kind3':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Pucks>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{	
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Pucks -= window[item+"cost"];
				DisplayStuff('Pucks');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind3']);
			}
			break;
		case 'kind4':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Salmon>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{	
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Salmon -= window[item+"cost"];
				DisplayStuff('Salmon');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind4']);
			}
			break;
		case 'kind5':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Oak>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{	
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Oak -= window[item+"cost"];
				DisplayStuff('Oak');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind5']);
			}
			break;
		case 'kind6':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Gloves>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{	
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Gloves -= window[item+"cost"];
				DisplayStuff('Gloves');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind6']);
			}
			break;
		case 'kind7':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Skates>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Skates -= window[item+"cost"];
				DisplayStuff('Skates');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind7']);
			}
			break;
		case 'kind8':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Birch>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Birch -= window[item+"cost"];
				DisplayStuff('Birch');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind8']);
			}
			break;
		case 'kind9':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Halibut>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Halibut -= window[item+"cost"];
				DisplayStuff('Halibut');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind9']);
			}
			break;
		case 'kind10':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Zambonies>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Zambonies -= window[item+"cost"];
				DisplayStuff('Zambonies');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind10']);
				
			}
			break;
		case 'kind11':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Maple>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Maple -= window[item+"cost"];
				DisplayStuff('Maple');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind11']);
			}
			break;
		case 'kind12':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Crab>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Crab -= window[item+"cost"];
				DisplayStuff('Crab');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind12']);
			}
			break;
		case 'kind13':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Sticks>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Sticks -= window[item+"cost"];
				DisplayStuff('Sticks');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind13']);
			}
			break;
		case 'kind14':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Spruce>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Spruce -= window[item+"cost"];
				DisplayStuff('Spruce');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind14']);
			}
			break;
		case 'kind15':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Cod>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Cod -= window[item+"cost"];
				DisplayStuff('Cod');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind15']);
			}
			break;
		case 'kind16':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Ash>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Ash -= window[item+"cost"];
				DisplayStuff('Ash');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind16']);
			}
			break;
		case 'kind17':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Goals>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Goals -= window[item+"cost"];
				DisplayStuff('Goals');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind17']);
			}
			break;
		case 'kind18':
			if ((getLevel(KindnessXP)>=window[item+"req"])&&(Whale>=window[item+"cost"])){
				if (instantKindness){
					soKind = 1;
					kindXP(item);
					KindnessButton(item);
				}else{
					document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
					window[item+"time"] = RightNow.getTime();
					window[item+"inprogress"] = 1;
				}
				Whale -= window[item+"cost"];
				DisplayStuff('Whale');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'kind18']);
			}
			break;
		default:
			break;
	}
	

}

function kindXP(item){
	window[item+"inprogress"]=0;
	xptimestwo=Math.max(0, K6*K6num, K7*K7num, K8*K8num, K9*K9num, K10*K10num, K19*K19num, K20*K20num, K21*K21num);
	multiplier = 1;
	if (xptimestwo > Math.random()){
		multiplier = 2;
	}
	
	BuffXP=1;
	if (KindnessBuff > 0){
		BuffXP=1.25;
		KindnessBuff--;
	}
		BuffRemaining("Kindness");
	
	
	KindnessXP += getKindnessXP(item)*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*multiplier;
	DisplayMasterXP();
	DisplayKindnessXP();
	KindnessProgress();
	bonusText="";
	if (multiplier == 2){
		bonusText=" x2 经验!";
	}
	if (soKind){
		bonusText=bonusText+" 即时善良!";
		soKind=0;
		
		_gaq.push(['_trackEvent', 'Canada Clicker', 'InstantKindness']);
	}
	if (KindnessNotifyToggle){
		$.notify(window[item+"text"]+bonusText, {style:'kindness', className:'kindness', position: 'top right', autoHide: true});
	}
	
	KindnessClicks++;
	DisplayStuff('KindnessClicks');
	achievementProgress("caring");
	
	
	window["total"+item]++;
	DisplayStuff("total"+item);
	
	
}

function updateKindnessXP(){
	for (i=1; i<=18; i++){
		xpValue = window["kind"+i+"xp"]*PrestigeXP[Prestige]*Math.max(1,K1*K1num, K2*K2num, K3*K3num, K4*K4num, K5*K5num, K16*K16num, K17*K17num, K18*K18num);
		xpValue = numberWithCommas(Math.round(xpValue));
		//return xpValue;
		document.getElementById("kind"+i+"xp").innerHTML = xpValue;
	}
}

function getKindnessXP(item){
	xpValue = window[item+"xp"]*PrestigeXP[Prestige]*Math.max(1,K1*K1num, K2*K2num, K3*K3num, K4*K4num, K5*K5num, K16*K16num, K17*K17num, K18*K18num);
	return xpValue;
}


//hockey functions
function HockeyButton(item){//function to show hockey button
	if (!window[item+"inprogress"]){
			//Hockey activities
			if (getLevel(HockeyXP)>=window[item+"req"]){
				document.getElementById(item).innerHTML = "<button onClick=doHockey('"+item+"')>做曲棍球!</button>";
			}else{
				document.getElementById(item).innerHTML = "<button onClick=doHockey('"+item+"') disabled>做曲棍球!</button>";
			}
	}
}

var soHockey = 0;//instant hockey variable

function doHockey(item){//function called when hockey button is clicked.  check all conditionals, then initiate hockey

	//check for instant hockey
	instantHockey = 0;
	instanthockeyChance = Math.max(0, H11*H11num, H12*H12num, H13*H13num, H14*K14num, H15*H15num);
	if (instanthockeyChance > Math.random()){
		instantHockey = 1;
		soHockey=1;
		totalInstantHockey++;
		DisplayStuff('totalInstantHockey');
		_gaq.push(['_trackEvent', 'Canada Clicker', 'InstantHockey']);
	}

	isHockeying = 0;
	for (h=1;h<=15;h++){//checks to see if any items are in progress
		if (window["hockey"+h+"inprogress"]){
			isHockeying++;
		}
	}
	
	if ((getLevel(HockeyXP)>=window[item+"req"]) && (isHockeying<Math.max(1, H28*H28num, H29*H29num))){
		if (instantHockey){
			hockeyXP(item);
			HockeyButton(item);
		}else{
		document.getElementById(item).innerHTML = minutesAndSecondsAlt(window[item+"cooldown"]);
		window[item+"time"] = RightNow.getTime();
		window[item+"inprogress"] = 1;
		}
		
	}

}

function updateHockeyXP(){
	for (i=1; i<=15; i++){
		xpValue = window["hockey"+i+"xp"]*PrestigeXP[Prestige]*Math.max(1,H1*H1num, H2*H2num, H3*H3num, H4*H4num, H5*H5num, H21*H21num, H22*H22num, H23*H23num);
		xpValue = numberWithCommas(Math.round(xpValue));
		//return xpValue;
		document.getElementById("hockey"+i+"xp").innerHTML = xpValue;
	}
}

function getHockeyXP(item){
	xpValue = window[item+"xp"]*PrestigeXP[Prestige]*Math.max(1,H1*H1num, H2*H2num, H3*H3num, H4*H4num, H5*H5num, H21*H21num, H22*H22num, H23*H23num);
	return xpValue;
}

function hockeyXP(item){//awards XP and hockey reward
	window[item+"inprogress"]=0;
	bonusText = "";
	
	doubleXP = 1;//xp multiplier
	if (Math.max(0, H6*H6num, H7*H7num, H8*H8num, H9*H9num, H10*H10num, H24*H24num, H25*H25num)>Math.random()){
		doubleXP = 2;
		bonusText = " x2 经验!";
	}
	
	doubleReward = 1;//xp multiplier
	if (Math.max(0, H16*H16num, H17*H17num, H18*H18num, H19*H19num, H20*H20num, H26*H26num, H27*H27num)>Math.random()){
		doubleReward = 2;
		bonusText =bonusText+ " x2 奖励!";
	}
	
	if (soHockey){
		soHockey=0;
		bonusText =bonusText+ " 即时曲棍球!";
	}
	
	BuffXP=1;
	if (HockeyBuff > 0){
		BuffXP=1.25;
		HockeyBuff--;
	}
		BuffRemaining("Hockey");
	
	
	HockeyXP += getHockeyXP(item)*BuffXP*PrestigeXP[Prestige]*(1+Math.max(0, su7*su7num, su8*su8num, su9*su9num, su10*su10num, su11*su11num, su12*su12num, su15*su15num, su16*su16num)/100)*doubleXP;
	DisplayMasterXP();
	DisplayHockeyXP();
	HockeyProgress();
	
	if (HockeyNotifyToggle){
		$.notify(window[item+"text"]+bonusText, {style:'hockey', className:'hockey', position: 'top right', autoHide: true});
	}
	
	switch (item){
		case 'hockey1':
				Pucks += window[item+"reward"]*doubleReward;
				DisplayStuff('Pucks');
				totalPucks += window[item+"reward"]*doubleReward;
				DisplayStuff('totalPucks');
				totalhockey1++;
				DisplayStuff('totalhockey1');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey1']);
			break;
		case 'hockey2':
				Sticks += window[item+"reward"]*doubleReward;
				DisplayStuff('Sticks');
				totalSticks += window[item+"reward"]*doubleReward;
				DisplayStuff('totalSticks');
				totalhockey2++;
				DisplayStuff('totalhockey2');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey2']);
			break;
		case 'hockey3':
				Pucks += window[item+"reward"]*doubleReward;
				DisplayStuff('Pucks');
				totalPucks += window[item+"reward"]*doubleReward;
				DisplayStuff('totalPucks');
				totalhockey3++;
				DisplayStuff('totalhockey3');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey3']);
			break;
		case 'hockey4':
				Sticks += window[item+"reward"]*doubleReward;
				DisplayStuff('Sticks');
				totalSticks += window[item+"reward"]*doubleReward;
				DisplayStuff('totalSticks');
				totalhockey4++;
				DisplayStuff('totalhockey4');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey4']);
			break;
		case 'hockey5':
				Gloves += window[item+"reward"]*doubleReward;
				DisplayStuff('Gloves');
				totalGloves += window[item+"reward"]*doubleReward;
				DisplayStuff('totalGloves');
				totalhockey5++;
				DisplayStuff('totalhockey5');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey5']);
			break;
		case 'hockey6':
				Gloves += window[item+"reward"]*doubleReward;
				DisplayStuff('Gloves');
				totalGloves += window[item+"reward"]*doubleReward;
				DisplayStuff('totalGloves');
				totalhockey6++;
				DisplayStuff('totalhockey6');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey6']);
			break;
		case 'hockey7':
				Skates += window[item+"reward"]*doubleReward;
				DisplayStuff('Skates');
				totalSkates += window[item+"reward"]*doubleReward;
				DisplayStuff('totalSkates');
				totalhockey7++;
				DisplayStuff('totalhockey7');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey7']);
			break;
		case 'hockey8':
				Goals += window[item+"reward"]*doubleReward;
				DisplayStuff('Goals');
				totalGoals += window[item+"reward"]*doubleReward;
				DisplayStuff('totalGoals');
				totalhockey8++;
				DisplayStuff('totalhockey8');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey8']);
			break;
		case 'hockey9':
				Goals += window[item+"reward"]*doubleReward;
				DisplayStuff('Goals');
				totalGoals += window[item+"reward"]*doubleReward;
				DisplayStuff('totalGoals');
				totalhockey9++;
				DisplayStuff('totalhockey9');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey9']);
			break;
		case 'hockey10':
				Zambonies += window[item+"reward"]*doubleReward;
				DisplayStuff('Zambonies');
				totalZambonies += window[item+"reward"]*doubleReward;
				DisplayStuff('totalZambonies');
				totalhockey10++;
				DisplayStuff('totalhockey10');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey10']);
			break;
		case 'hockey11':
				Skates += window[item+"reward"]*doubleReward;
				DisplayStuff('Skates');
				totalSkates += window[item+"reward"]*doubleReward;
				DisplayStuff('totalSkates');
				totalhockey11++;
				DisplayStuff('totalhockey11');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey11']);
			break;
		case 'hockey12':
				Pucks += window[item+"reward"]*doubleReward;
				DisplayStuff('Pucks');
				totalPucks += window[item+"reward"]*doubleReward;
				DisplayStuff('totalPucks');
				totalhockey12++;
				DisplayStuff('totalhockey12');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey12']);
			break;
		case 'hockey13':
				Sticks += window[item+"reward"]*doubleReward;
				DisplayStuff('Sticks');
				totalSticks += window[item+"reward"]*doubleReward;
				DisplayStuff('totalSticks');
				totalhockey13++;
				DisplayStuff('totalhockey13');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey13']);
			break;
		case 'hockey14':
				Gloves += window[item+"reward"]*doubleReward;
				DisplayStuff('Gloves');
				totalGloves += window[item+"reward"]*doubleReward;
				DisplayStuff('totalGloves');
				totalhockey14++;
				DisplayStuff('totalhockey14');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey14']);
			break;
		case 'hockey15':
				Zambonies += window[item+"reward"]*doubleReward;//fix
				DisplayStuff('Zambonies');
				totalZambonies += window[item+"reward"]*doubleReward;
				DisplayStuff('totalZambonies');
				totalhockey15++;
				DisplayStuff('totalhockey15');
				_gaq.push(['_trackEvent', 'Canada Clicker', 'hockey15']);
			break;
		default:
			break;
	}
	HockeyClicks++;
	DisplayStuff('HockeyClicks');
	achievementProgress("hoser");
}



//Leveling
function getLevel(xp){//takes in the xp and returns what level
	if (xp >= L20){
	return 20;
	}else if (xp >= L19){
	return 19;
	}else if (xp >= L18){
	return 18;
	}else if (xp >= L17){
	return 17;
	}else if (xp >= L16){
	return 16;
	}else if (xp >= L15){
	return 15;
	}else if (xp >= L14){
	return 14;
	}else if (xp >= L13){
	return 13;
	}else if (xp >= L12){
	return 12;
	}else if (xp >= L11){
	return 11;
	}else if (xp >= L10){
	return 10;
	}else if (xp >= L9){
	return 9;
	}else if (xp >= L8){
	return 8;
	}else if (xp >= L7){
	return 7;
	}else if (xp >= L6){
	return 6;
	}else if (xp >= L5){
	return 5;
	}else if (xp >= L4){
	return 4;
	}else if (xp >= L3){
	return 3;
	}else if (xp >= L2){
	return 2;
	}else if (xp >= L1){
	return 1;
	}
}

var LumberjackLvl1 = 0;
var LumberjackLvl2 = 999;
var IceFishingLvl1 = 0;
var IceFishingLvl2 = 999;
var BeardLvl1 = 0;
var BeardLvl2 = 999;
var KindnessLvl1 = 0;
var KindnessLvl2 = 999;
var HockeyLvl1 = 0;
var HockeyLvl2 = 999;

var LowestLevel = 1;
function checkLevels(){//called in the game interval.  checks to see if you've leveled up in any category.  gives alert if you have.
	skillz = ["Lumberjack", "IceFishing", "Beard", "Kindness", "Hockey"];
	skillLevels = [1, 1, 1, 1, 1];
	
	for (i=1;i<=5;i++){
		window[skillz[i-1]+"Lvl1"] = getLevel(window[skillz[i-1]+"XP"]);
		skillLevels[i-1] = getLevel(window[skillz[i-1]+"XP"]);
		if (window[skillz[i-1]+"Lvl1"] > window[skillz[i-1]+"Lvl2"]){
			$.notify(cnSkill(skillz[i-1])+" 升级!", {style:'level', className:'achievement', position: 'bottom center', autoHide: true});
		}
		window[skillz[i-1]+"Lvl2"] = eval(window[skillz[i-1]+"Lvl1"]);
	}
	
	LowestLevel = Math.min.apply(Math, skillLevels);
	
	if (LowestLevel == 1){
		document.getElementById("LowestLevel").innerHTML = LowestLevel + "。  升级所有技能以获得奖金。!";
	}else{
	document.getElementById("LowestLevel").innerHTML = LowestLevel + "。  <b>奖励 " + Math.round(Math.pow((LowestLevel-1),2)) + " 木头产量每秒!</b>";
	document.getElementById("BonusWPS").innerHTML = "+" + Math.round(Math.pow((LowestLevel-1),2)) + " 木头产量每秒的奖励";
	}
}



//achievements
function achievementProgress(series){//updates progress bars on achievement tabs.  the input is the achievement series name
	switch (series){
		case "clicking":
			if (!a1){
				XPbetweenLevels = a1num;
			}
			if (a1){
				XPbetweenLevels = a2num;
			}
			if (a2){
				XPbetweenLevels = a3num;
			}
			if (a3){
				XPbetweenLevels = a4num;
			}
			if (a4){
				XPbetweenLevels = a5num;
			}
			if (a5){
				XPbetweenLevels = a6num;
			}
			if (a6){
				XPbetweenLevels = a6num;
			}
			percent = (Math.round(TreeClicks/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#clickingProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("clicking").innerHTML = TreeClicks+"/"+XPbetweenLevels;
			break;
		case "baitFishing":
			if (!a7){
				XPbetweenLevels = a7num;
			}
			if (a7){
				XPbetweenLevels = a8num;
			}
			if (a8){
				XPbetweenLevels = a9num;
			}
			if (a9){
				XPbetweenLevels = a10num;
			}
			if (a10){
				XPbetweenLevels = a11num;
			}
			if (a11){
				XPbetweenLevels = a12num;
			}
			if (a12){
				XPbetweenLevels = a12num;
			}
			percent = (Math.round(IceFishingClicks/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#baitFishingProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("baitFishing").innerHTML = IceFishingClicks+"/"+XPbetweenLevels;
			break;
		case "manly":
			if (!a13){
				XPbetweenLevels = a13num;
			}
			if (a13){
				XPbetweenLevels = a14num;
			}
			if (a14){
				XPbetweenLevels = a15num;
			}
			if (a15){
				XPbetweenLevels = a16num;
			}
			if (a16){
				XPbetweenLevels = a17num;
			}
			if (a17){
				XPbetweenLevels = a18num;
			}
			if (a18){
				XPbetweenLevels = a18num;
			}
			percent = (Math.round(BeardClicks/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#manlyProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("manly").innerHTML = BeardClicks+"/"+XPbetweenLevels;
			break;
		case "caring":
			if (!a19){
				XPbetweenLevels = a19num;
			}
			if (a19){
				XPbetweenLevels = a20num;
			}
			if (a20){
				XPbetweenLevels = a21num;
			}
			if (a21){
				XPbetweenLevels = a22num;
			}
			if (a22){
				XPbetweenLevels = a23num;
			}
			if (a23){
				XPbetweenLevels = a24num;
			}
			if (a24){
				XPbetweenLevels = a24num;
			}
			percent = (Math.round(KindnessClicks/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#caringProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("caring").innerHTML = KindnessClicks+"/"+XPbetweenLevels;
			break;
		case "hoser":
			if (!a25){
				XPbetweenLevels = a25num;
			}
			if (a25){
				XPbetweenLevels = a26num;
			}
			if (a26){
				XPbetweenLevels = a27num;
			}
			if (a27){
				XPbetweenLevels = a28num;
			}
			if (a28){
				XPbetweenLevels = a29num;
			}
			if (a29){
				XPbetweenLevels = a30num;
			}
			if (a30){
				XPbetweenLevels = a30num;
			}
			percent = (Math.round(HockeyClicks/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#hoserProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("hoser").innerHTML = HockeyClicks+"/"+XPbetweenLevels;
			break;
		case "upgrade":
			if (!a31){
				XPbetweenLevels = a31num;
			}
			if (a31){
				XPbetweenLevels = a32num;
			}
			if (a32){
				XPbetweenLevels = a33num;
			}
			if (a33){
				XPbetweenLevels = a34num;
			}
			if (a34){
				XPbetweenLevels = a35num;
			}
			if (a35){
				XPbetweenLevels = a36num;
			}
			if (a36){
				XPbetweenLevels = a36num;
			}
			percent = (Math.round(upgradeCount/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#upgradeProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("upgrade").innerHTML = upgradeCount+"/"+XPbetweenLevels;
			break;
		case "minutes":
			if (!a37){
				XPbetweenLevels = a37num;
			}
			if (a37){
				XPbetweenLevels = a38num;
			}
			if (a38){
				XPbetweenLevels = a39num;
			}
			if (a39){
				XPbetweenLevels = a40num;
			}
			if (a40){
				XPbetweenLevels = a41num;
			}
			if (a41){
				XPbetweenLevels = a42num;
			}
			if (a42){
				XPbetweenLevels = a42num;
			}
			percent = (Math.round(totalMinutes/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#minutesProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("minutes").innerHTML = totalMinutes+"/"+XPbetweenLevels;
			break;
		case "trees":
			if (!a43){
				XPbetweenLevels = a43num;
			}
			if (a43){
				XPbetweenLevels = a44num;
			}
			if (a44){
				XPbetweenLevels = a45num;
			}
			if (a45){
				XPbetweenLevels = a46num;
			}
			if (a46){
				XPbetweenLevels = a47num;
			}
			if (a47){
				XPbetweenLevels = a48num;
			}
			if (a48){
				XPbetweenLevels = a48num;
			}
			percent = (Math.round(totalTrees/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#treesProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("trees").innerHTML = totalTrees+"/"+XPbetweenLevels;
			break;
		case "moreMoney":
			if (!a49){
				XPbetweenLevels = a49num;
			}
			if (a49){
				XPbetweenLevels = a50num;
			}
			if (a50){
				XPbetweenLevels = a51num;
			}
			if (a51){
				XPbetweenLevels = a52num;
			}
			if (a52){
				XPbetweenLevels = a53num;
			}
			if (a53){
				XPbetweenLevels = a54num;
			}
			if (a54){
				XPbetweenLevels = a54num;
			}
			percent = (Math.round(totalMoney/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#moreMoneyProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("moreMoney").innerHTML = Math.round(totalMoney)+"/"+XPbetweenLevels;
			break;
		case "days":
			if (!a55){
				XPbetweenLevels = a55num;
			}
			if (a55){
				XPbetweenLevels = a56num;
			}
			if (a56){
				XPbetweenLevels = a57num;
			}
			if (a57){
				XPbetweenLevels = a58num;
			}
			if (a58){
				XPbetweenLevels = a59num;
			}
			if (a59){
				XPbetweenLevels = a60num;
			}
			if (a60){
				XPbetweenLevels = a60num;
			}
			percent = (Math.round(totalDaysPlayed/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#daysProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("days").innerHTML = totalDaysPlayed+"/"+XPbetweenLevels;
			break;
		case "streaking":
			if (!a61){
				XPbetweenLevels = a61num;
			}
			if (a61){
				XPbetweenLevels = a62num;
			}
			if (a62){
				XPbetweenLevels = a63num;
			}
			if (a63){
				XPbetweenLevels = a64num;
			}
			if (a64){
				XPbetweenLevels = a65num;
			}
			if (a65){
				XPbetweenLevels = a66num;
			}
			if (a66){
				XPbetweenLevels = a66num;
			}
			percent = (Math.round(bestdaysStreak/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#streakingProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("streaking").innerHTML = bestdaysStreak+"/"+XPbetweenLevels;
			break;
		case "lucky":
			percent = (Math.round(a74/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#luckyProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("lucky").innerHTML = a74+"/"+1;
			break;
		case "aboot":
			percent = (Math.round(a67/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#abootProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("aboot").innerHTML = a67+"/"+1;
			break;
		case "reddit":
			percent = (Math.round(a68/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#redditProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("reddit").innerHTML = a68+"/"+1;
			break;
		case "importer":
			percent = (Math.round(a75/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#importerProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("importer").innerHTML = a75+"/"+1;
			break;
		case "PrestigeReq0":
			percent = (Math.round(AshUnlock/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#PrestigeProgress0').attr('style', 'width:'+percent+'%');
			document.getElementById("PrestigeReq0").innerHTML = AshUnlock+"/"+1;
			break;
		case "PrestigeReq1":
			percent = (Math.round((BeardClicks-PrestigeBeards)/500*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#PrestigeProgress1').attr('style', 'width:'+percent+'%');
			document.getElementById("PrestigeReq1").innerHTML = (BeardClicks-PrestigeBeards)+"/"+500;
			break;
		case "PrestigeReq2":
			percent = (Math.round((IceFishingClicks-PrestigeFish)/2000*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#PrestigeProgress2').attr('style', 'width:'+percent+'%');
			document.getElementById("PrestigeReq2").innerHTML = (IceFishingClicks-PrestigeFish)+"/"+2000;
			break;
		case "PrestigeReq3":

			percent = (Math.round((upgradeCount-PrestigeUpgrades)/101*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#PrestigeProgress3').attr('style', 'width:'+percent+'%');
			document.getElementById("PrestigeReq3").innerHTML = (upgradeCount-PrestigeUpgrades)+"/"+101;
			break;
		case "PrestigeReq4":
		SumOfLevels = 0;
		levelarray = [LumberjackXP, BeardXP, IceFishingXP, HockeyXP, KindnessXP];
		for (i=1; i<=5; i++){
			SumOfLevels += getLevel(levelarray[i-1]);
		}
			percent = (Math.round(SumOfLevels/PrestigeTotalLevelReq[Prestige]*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#PrestigeProgress4').attr('style', 'width:'+percent+'%');
			document.getElementById("PrestigeReq4").innerHTML = SumOfLevels+"/"+PrestigeTotalLevelReq[Prestige];
			break;
		case "prestigery":
			percent = (Math.round(Prestige/4*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#prestigeryProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("prestigery").innerHTML = Prestige+"/4";
			break;
		case "packrat":
			percent = (Math.round(inventorySum/18*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#packratProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("packrat").innerHTML = inventorySum+"/18";
			break;
		case "mixitup":
			percent = (Math.round(changeSkins/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#mixitupProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("mixitup").innerHTML = changeSkins+"/"+1;
			break;
		case "multitasker":
			if (!a82){
				XPbetweenLevels = a82num;
			}
			if (a82){
				XPbetweenLevels = a83num;
			}
			if (a83){
				XPbetweenLevels = a84num;
			}
			if (a84){
				XPbetweenLevels = a85num;
			}
			if (a85){
				XPbetweenLevels = a86num;
			}
			if (a86){
				XPbetweenLevels = a87num;
			}
			if (a87){
				XPbetweenLevels = a87num;
			}
			percent = (Math.round(kindnessSum/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#multitaskerProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("multitasker").innerHTML = kindnessSum+"/"+XPbetweenLevels;
			break;
		case "somuchsyrup":
			if (!a88){
				XPbetweenLevels = a88num;
			}
			if (a88){
				XPbetweenLevels = a89num;
			}
			if (a89){
				XPbetweenLevels = a90num;
			}
			if (a90){
				XPbetweenLevels = a91num;
			}
			if (a91){
				XPbetweenLevels = a92num;
			}
			if (a92){
				XPbetweenLevels = a93num;
			}
			if (a93){
				XPbetweenLevels = a93num;
			}
			percent = (Math.round(totalSyrup/XPbetweenLevels*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#somuchsyrupProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("somuchsyrup").innerHTML = totalSyrup+"/"+XPbetweenLevels;
			break;
		case "getgrizzly":
			percent = (Math.round(totalGrizzlyBeard/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#getgrizzlyProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("getgrizzly").innerHTML = totalGrizzlyBeard+"/"+1;
			break;
		case "catchawhale":
			percent = (Math.round(totalWhale/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#catchawhaleProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("catchawhale").innerHTML = totalWhale+"/"+1;
			break;
		case "hockeypro":
			percent = (Math.round(hockeySum/15*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#hockeyproProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("hockeypro").innerHTML = hockeySum+"/"+15;
			break;
		case "canadaday":
			percent = (Math.round(a97/1*1000))/1000*100;
			if (percent>100){
				percent=100;
			}
			$('#canadadayProgress').attr('style', 'width:'+percent+'%');
			document.getElementById("canadaday").innerHTML = a97+"/"+1;
			break;
		default:
			break;
	}
}





function achieved(item){
	if (window[item]){
	document.getElementById(item).innerHTML = "<img src='images/square3.png' height=30>";
	}else{
	document.getElementById(item).innerHTML = "<img src='images/square4.png' height=30>";
	}
}


function checkAchievements(){//checks all achievements
	achievementCount = 0;
	achievementTotal = 0;
	for (i=1;i<=97;i++){
		if (!window["a"+i]){
		awardAchievement(i);
		}else{
			achievementCount++;
		}
		achievementTotal++;
	}
	document.getElementById("achievementCount").innerHTML = "成就 "+achievementCount+"/"+achievementTotal;
} 

function awardAchievement(i){//called when achievement is earned.  awards flannel
		 	switch (i){
				case 1:
					if (TreeClicks >= (window["a"+i+"num"])){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a1']);
					}
					break;
				case 2:
					if (TreeClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a2']);
					}
					break;
				case 3:
					if (TreeClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a3']);
					}
					break;
				case 4:
					if (TreeClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a4']);
					}
					break;
				case 5:
					if (TreeClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a5']);
					}
					break;
				case 6:
					if (TreeClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a6']);
					}
					break;
				case 7:
					if (IceFishingClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a7']);
					}
					break;
				case 8:
					if (IceFishingClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a8']);
					}
					break;
				case 9:
					if (IceFishingClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a9']);
					}
					break;
				case 10:
					if (IceFishingClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a10']);
					}
					break;
				case 11:
					if (IceFishingClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a11']);
					}
					break;
				case 12:
					if (IceFishingClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a12']);
					}
					break;
				case 13:
					if (BeardClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a13']);
					}
					break;
				case 14:
					if (BeardClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a14']);
					}
					break;
				case 15:
					if (BeardClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a15']);
					}
					break;
				case 16:
					if (BeardClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a16']);
					}
					break;
				case 17:
					if (BeardClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a17']);
					}
					break;
				case 18:
					if (BeardClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a18']);
					}
					break;
				case 19:
					if (KindnessClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a19']);
					}
					break;
				case 20:
					if (KindnessClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a20']);
					}
					break;
				case 21:
					if (KindnessClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a21']);
					}
					break;
				case 22:
					if (KindnessClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a22']);
					}
					break;
				case 23:
					if (KindnessClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a23']);
					}
					break;
				case 24:
					if (KindnessClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a24']);
					}
					break;
				case 25:
					if (HockeyClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
					
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a25']);
					}
					break;
				case 26:
					if (HockeyClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a26']);
					}
					break;
				case 27:
					if (HockeyClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a27']);
					}
					break;
				case 28:
					if (HockeyClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a28']);
					}
					break;
				case 29:
					if (HockeyClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a29']);
					}
					break;
				case 30:
					if (HockeyClicks >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a30']);
					}
					break;
				case 31:
					if (upgradeCount >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a31']);
					}
					break;
				case 32:
					if (upgradeCount >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a32']);
					}
					break;
				case 33:
					if (upgradeCount >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a33']);
					}
					break;
				case 34:
					if (upgradeCount >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a34']);
					}
					break;
				case 35:
					if (upgradeCount >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a35']);
					}
					break;
				case 36:
					if (upgradeCount >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a36']);
					}
					break;
				case 37:
					if (totalMinutes >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a37']);
					}
					break;
				case 38:
					if (totalMinutes >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a38']);
					}
					break;
				case 39:
					if (totalMinutes >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a39']);
					}
					break;
				case 40:
					if (totalMinutes >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a40']);
					}
					break;
				case 41:
					if (totalMinutes >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a41']);
					}
					break;
				case 42:
					if (totalMinutes >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a42']);
					}
					break;
				case 43:
					if (totalTrees >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a43']);
					}
					break;
				case 44:
					if (totalTrees >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a44']);
					}
					break;
				case 45:
					if (totalTrees >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a45']);
					}
					break;
				case 46:
					if (totalTrees >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a46']);
					}
					break;
				case 47:
					if (totalTrees >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a47']);
					}
					break;
				case 48:
					if (totalTrees >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a48']);
					}
					break;
				case 49:
					if (totalMoney >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a49']);
					}
					break;
				case 50:
					if (totalMoney >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a50']);
					}
					break;
				case 51:
					if (totalMoney >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a51']);
					}
					break;
				case 52:
					if (totalMoney >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a52']);
					}
					break;
				case 53:
					if (totalMoney >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a53']);
					}
					break;
				case 54:
					if (totalMoney >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a54']);
					}
					break;
				case 55:
					if (totalDaysPlayed >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a55']);
					}
					break;
				case 56:
					if (totalDaysPlayed >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a56']);
					}
					break;
				case 57:
					if (totalDaysPlayed >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a57']);
					}
					break;
				case 58:
					if (totalDaysPlayed >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a58']);
					}
					break;
				case 59:
					if (totalDaysPlayed >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a59']);
					}
					break;
				case 60:
					if (totalDaysPlayed >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a60']);
					}
					break;
				case 61:
					if (bestdaysStreak >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a61']);
					}
					break;
				case 62:
					if (bestdaysStreak >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a62']);
					}
					break;
				case 63:
					if (bestdaysStreak >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a63']);
					}
					break;
				case 64:
					if (bestdaysStreak >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a64']);
					}
					break;
				case 65:
					if (bestdaysStreak >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a65']);
					}
					break;
				case 66:
					if (bestdaysStreak >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a66']);
					}
					break;
 				case 67:
					if (aboot){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a67']);
					}
					break;
				case 68:
					if (reddit){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a68']);
					}
					break;
				case 69:
					rand1 = getRandomInt(1,(window["a"+i+"num"]+1));
					rand2 = getRandomInt(1,(window["a"+i+"num"]+1));
					if (rand1 == rand2){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a69']);
					}
					break;
				case 70:
					rand1 = getRandomInt(1,(window["a"+i+"num"]+1));
					rand2 = getRandomInt(1,(window["a"+i+"num"]+1));
					if ((rand1 == rand2)&& window["a"+(i-1)]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a70']);
					}
					break;
				case 71:
					rand1 = getRandomInt(1,(window["a"+i+"num"]+1));
					rand2 = getRandomInt(1,(window["a"+i+"num"]+1));
					if ((rand1 == rand2)&& window["a"+(i-1)]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a71']);
					}
					break;
				case 72:
					rand1 = getRandomInt(1,(window["a"+i+"num"]+1));
					rand2 = getRandomInt(1,(window["a"+i+"num"]+1));
					if ((rand1 == rand2)&& window["a"+(i-1)]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a72']);
					}
					break;
				case 73:
					rand1 = getRandomInt(1,(window["a"+i+"num"]+1));
					rand2 = getRandomInt(1,(window["a"+i+"num"]+1));
					if ((rand1 == rand2)&& window["a"+(i-1)]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a73']);
					}
					break;
				case 74:
					rand1 = getRandomInt(1,(window["a"+i+"num"]+1));
					rand2 = getRandomInt(1,(window["a"+i+"num"]+1));
					if ((rand1 == rand2)&& window["a"+(i-1)]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a74']);
					}
					break;
				case 75:
					if (importer){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a75']);
					}
					break;
				case 76:
					if (Prestige >= 1){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a76']);
					}
					break;
				case 77:
					if (Prestige >= 2){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a77']);
					}
					break;
				case 78:
					if (Prestige >= 3){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a78']);
					}
					break;
				case 79:
					if (Prestige >= 4){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a79']);
					}
					break;
				case 80:
					if (Pine && Spruce && Maple && Oak && Birch && Ash && Trout && Salmon && Cod && Crab && Halibut && Whale && Pucks && Sticks && Gloves && Skates && Goals && Zambonies){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a80']);
					}
					break;
				case 81:
					if (changeSkins){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a81']);
					}
					break;
				case 82:
					if (kindnessSum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a82']);
					}
					break;
				case 83:
					if (kindnessSum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a83']);
					}
					break;
				case 84:
					if (kindnessSum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a84']);
					}
					break;
				case 85:
					if (kindnessSum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a85']);
					}
					break;
				case 86:
					if (kindnessSum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a86']);
					}
					break;
				case 87:
					if (kindnessSum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a87']);
					}
					break;
				case 88:
					if (totalSyrup >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a88']);
					}
					break;
				case 89:
					if (totalSyrup >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a89']);
					}
					break;
				case 90:
					if (totalSyrup >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a90']);
					}
					break;
				case 91:
					if (totalSyrup >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a91']);
					}
					break;
				case 92:
					if (totalSyrup >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a92']);
					}
					break;
				case 93:
					if (totalSyrup >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a93']);
					}
					break;
				case 94:
					if (totalGrizzlyBeard >= 1){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a94']);
					}
					break;
				case 95:
					if (totalWhale >= 1){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a95']);
					}
					break;
				case 96:
					if (hockeySum >= window["a"+i+"num"]){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a96']);
					}
					break;
				case 97:	
					if ((RightNow.getDate()==1)&&(RightNow.getMonth()==6)){
						window["a"+i] = 1;
						Flannel += window["a"+i+"reward"];
						totalFlannel += window["a"+i+"reward"];
						$.notify(window["a"+i+"text"]+"\n+"+window["a"+i+"reward"]+" flannel", {style:'achievement', className:'achievement', position: 'bottom center', autoHide: true});
						_gaq.push(['_trackEvent', 'Canada Clicker', 'a97']);
					}
					break;
				default:
					break;
			}
			DisplayStuff('Flannel');
			DisplayStuff('totalFlannel');
			achieved('a'+i);
			allProgress();
} 


//flannel upgrade functions
function ImportExport(){
	if (fu1){
		document.getElementById("ImportExport").innerHTML = "已解锁.";
	}else{
		document.getElementById("ImportExport").innerHTML = "未解锁.";
	}
}

function isExport(){
	if (fu1){
		document.getElementById("ExportText").innerHTML = "<textarea id='ExportCode' placeholder='Click the export button!' cols=35 rows=15></textarea>";
	}else{
		document.getElementById("ExportText").innerHTML = "<textarea id='ExportCode' placeholder='Export function currently disabled.  Unlock this feature by spending flannel in the store!' cols=35 rows=15></textarea>";
	}	
}

function isExportButton(){
	if (fu1){
		document.getElementById("Export").disabled = false;
	}else{
		document.getElementById("Export").disabled = true;
	}
}

function skinActive(item){//input is the flannel upgrade variable string:  example: fu3, fu4, etc.
	if (item){
		document.getElementById(item).innerHTML = "<button onClick=activateSkin('"+item+"')>设置激活</button>";
	}else{
		document.getElementById(item).innerHTML = "<button onClick=Unlock('"+item+"')>解锁</button>";
	}
}

function showMeSkin(){
	skinNumber = 1;
	if (whatskin == 1){
		skinNumber = "summer";
	}else{
		skinNumber = "fu"+whatskin;
	}	
	activateSkin(skinNumber);
}

function activateSkin(item){//input is the flannel upgrade variable string:  example: fu3, fu4, etc.
	switch (item){
		case 'summer':
			$('#lumberjackBackground').css('background-image',"url('images/landscape1300.png')");
			$('#mapleleaf').attr('src', 'images/mapleleaf.png');
			$('#coffeeButton').attr('src', 'images/tree2.png');
			whatskin = 1;
			break;
		case 'fu2':
			$('#lumberjackBackground').css('background-image',"url('images/winterlake300.png')");
			$('#mapleleaf').attr('src', 'images/snowflake.png');
			$('#coffeeButton').attr('src', 'images/WinterTree2.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 2;
			break;
		case 'fu3':
			$('#lumberjackBackground').css('background-image',"url('images/nickelback1.jpg')");
			$('#mapleleaf').attr('src', 'images/beer.png');
			$('#coffeeButton').attr('src', 'images/keg.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 3;
			break;
		case 'fu4':
			$('#lumberjackBackground').css('background-image',"url('images/HockeyRink2.png')");
			$('#mapleleaf').attr('src', 'images/hockeypuckcanada2.png');
			$('#coffeeButton').attr('src', 'images/goaliemask.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 4;
			break;
		case 'fu5':
			$('#lumberjackBackground').css('background-image',"url('images/poutine2.png')");
			$('#mapleleaf').attr('src', 'images/fork2.png');
			$('#coffeeButton').attr('src', 'images/beaver.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 5;
			break;
		case 'fu6':
			$('#lumberjackBackground').css('background-image',"url('images/kraftdinner2.jpg')");
			$('#mapleleaf').attr('src', 'images/ketchup2.png');
			$('#coffeeButton').attr('src', 'images/KraftDinnerBox.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 6;
			break;
		case 'fu7':
			$('#lumberjackBackground').css('background-image',"url('images/timhortons2.png')");
			$('#mapleleaf').attr('src', 'images/donut2.png');
			$('#coffeeButton').attr('src', 'images/TimHortonscup2.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 7;
			break;
		case 'fu8':
			$('#lumberjackBackground').css('background-image',"url('images/igloo2.png')");
			$('#mapleleaf').attr('src', 'images/seal.png');
			$('#coffeeButton').attr('src', 'images/polarbear.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 8;
			break;
		case 'fu9':
			$('#lumberjackBackground').css('background-image',"url('images/mountain.png')");
			$('#mapleleaf').attr('src', 'images/rocky.png');
			$('#coffeeButton').attr('src', 'images/moose.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 9;
			break;
		case 'fu10':
			$('#lumberjackBackground').css('background-image',"url('images/mountain2.png')");
			$('#mapleleaf').attr('src', 'images/horse.png');
			$('#coffeeButton').attr('src', 'images/mountie.png');
			changeSkins = 1;
			achievementProgress("mixitup");
			whatskin = 10;
			break;
		default:
			break;

	}
}

//progress bars
function allProgress(){//called onload of webpage.  updates all progress bars
	LumberjackProgress();
	IcefishingProgress()
	BeardProgress();
	KindnessProgress();
	HockeyProgress();
	achievementProgress("clicking");
	achievementProgress("baitFishing");
	achievementProgress("manly");
	achievementProgress("caring");
	achievementProgress("hoser");
	achievementProgress("upgrade");
	achievementProgress("minutes");
	achievementProgress("trees");
	achievementProgress("moreMoney");
	achievementProgress("days");
	achievementProgress("streaking");
	achievementProgress("lucky");
	achievementProgress("aboot");
	achievementProgress("reddit");
	achievementProgress("importer");
	achievementProgress("prestigery");
	achievementProgress("packrat");
	achievementProgress("mixitup");
	achievementProgress("multitasker");
	achievementProgress("somuchsyrup");
	achievementProgress("getgrizzly");
	achievementProgress("catchawhale");
	achievementProgress("hockeypro");
	achievementProgress("canadaday");
}

function LumberjackProgress(){
	lvl = getLevel(LumberjackXP);
	document.getElementById("lumberjackLvl").innerHTML = "伐木工人的等级 "+lvl;
	document.getElementById("lumberjackLvlStats").innerHTML = "伐木工人的等级 "+lvl;
	
	if (lvl == 20){
		$('#lumberjackProgress').attr('style', 'width:100%');
		$('#lumberjackProgressStats').attr('style', 'width:100%');
		document.getElementById("lumberjackProgressXP").innerHTML = "野兽模式!";
		document.getElementById("lumberjackProgressXPStats").innerHTML = "野兽模式!";
		
	}else{
		XPtoNextLevel = LumberjackXP-eval(window["L"+lvl]);
		XPbetweenLevels = eval(window["L"+(lvl+1)])-eval(window["L"+lvl]);
		percent = (Math.round(XPtoNextLevel/XPbetweenLevels*1000))/1000*100;
	
		$('#lumberjackProgress').attr('style', 'width:'+percent+'%');
		$('#lumberjackProgressStats').attr('style', 'width:'+percent+'%');
		document.getElementById("lumberjackProgressXP").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
		document.getElementById("lumberjackProgressXPStats").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	}
}
function IcefishingProgress(){
	lvl = getLevel(IceFishingXP);
	document.getElementById("icefishingLvl").innerHTML = "冰钓等级 "+lvl;
	document.getElementById("icefishingLvlStats").innerHTML = "冰钓等级 "+lvl;
	
	if (lvl == 20){
		$('#icefishingProgress').attr('style', 'width:100%');
		$('#icefishingProgressStats').attr('style', 'width:100%');
		document.getElementById("icefishingProgressXP").innerHTML = "Beast Mode!";
		document.getElementById("icefishingProgressXPStats").innerHTML = "Beast Mode!";
	
	}else{
	
	XPtoNextLevel = IceFishingXP-eval(window["L"+lvl]);
	XPbetweenLevels = eval(window["L"+(lvl+1)])-eval(window["L"+lvl]);
	
	percent = (Math.round(XPtoNextLevel/XPbetweenLevels*1000))/1000*100;
	
	$('#icefishingProgress').attr('style', 'width:'+percent+'%');
	document.getElementById("icefishingProgressXP").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	$('#icefishingProgressStats').attr('style', 'width:'+percent+'%');
	document.getElementById("icefishingProgressXPStats").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	}
}
function BeardProgress(){
	lvl = getLevel(BeardXP);
	document.getElementById("beardLvl").innerHTML = "胡子等级 "+lvl;
	document.getElementById("beardLvlStats").innerHTML = "胡子等级 "+lvl;
	
	if (lvl == 20){
		$('#beardProgress').attr('style', 'width:100%');
		$('#beardProgressStats').attr('style', 'width:100%');
		document.getElementById("beardProgressXP").innerHTML = "野兽模式!";
		document.getElementById("beardProgressXPStats").innerHTML = "野兽模式!";
	
	}else{
	XPtoNextLevel = BeardXP-eval(window["L"+lvl]);
	XPbetweenLevels = eval(window["L"+(lvl+1)])-eval(window["L"+lvl]);
	
	percent = (Math.round(XPtoNextLevel/XPbetweenLevels*1000))/1000*100;
	
	$('#beardProgress').attr('style', 'width:'+percent+'%');
	document.getElementById("beardProgressXP").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	$('#beardProgressStats').attr('style', 'width:'+percent+'%');
	document.getElementById("beardProgressXPStats").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	}
}
function KindnessProgress(){
	lvl = getLevel(KindnessXP);
	document.getElementById("kindnessLvl").innerHTML = "善良等级 "+lvl;
	document.getElementById("kindnessLvlStats").innerHTML = "善良等级 "+lvl;
	
	if (lvl == 20){
		$('#kindnessProgress').attr('style', 'width:100%');
		$('#kindnessProgressStats').attr('style', 'width:100%');
		document.getElementById("kindnessProgressXP").innerHTML = "Beast Mode!";
		document.getElementById("kindnessProgressXPStats").innerHTML = "Beast Mode!";
	
	}else{
	XPtoNextLevel = KindnessXP-eval(window["L"+lvl]);
	XPbetweenLevels = eval(window["L"+(lvl+1)])-eval(window["L"+lvl]);
	
	percent = (Math.round(XPtoNextLevel/XPbetweenLevels*1000))/1000*100;
	
	$('#kindnessProgress').attr('style', 'width:'+percent+'%');
	document.getElementById("kindnessProgressXP").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	$('#kindnessProgressStats').attr('style', 'width:'+percent+'%');
	document.getElementById("kindnessProgressXPStats").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	}
}
function HockeyProgress(){
	lvl = getLevel(HockeyXP);
	document.getElementById("hockeyLvl").innerHTML = "曲棍球等级 "+lvl;
	document.getElementById("hockeyLvlStats").innerHTML = "曲棍球等级 "+lvl;
	
	if (lvl == 20){
		$('#hockeyProgress').attr('style', 'width:100%');
		$('#hockeyProgressStats').attr('style', 'width:100%');
		document.getElementById("hockeyProgressXP").innerHTML = "野兽模式!";
		document.getElementById("hockeyProgressXPStats").innerHTML = "野兽模式!";
	
	}else{
	XPtoNextLevel = HockeyXP-eval(window["L"+lvl]);
	XPbetweenLevels = eval(window["L"+(lvl+1)])-eval(window["L"+lvl]);
	
	percent = (Math.round(XPtoNextLevel/XPbetweenLevels*1000))/1000*100;
	
	$('#hockeyProgress').attr('style', 'width:'+percent+'%');
	document.getElementById("hockeyProgressXP").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	$('#hockeyProgressStats').attr('style', 'width:'+percent+'%');
	document.getElementById("hockeyProgressXPStats").innerHTML = Math.round(XPtoNextLevel*10)/10+"/"+XPbetweenLevels;
	}
}

//XP Buff functions

function BuyBuff(skill){
	SkillLevel = getLevel(window[skill+"XP"]);
	if (Syrup >= SkillLevel){
		Syrup -= SkillLevel;
		window["Total"+skill+"Buff"] += NumberOfBuffs[skill];
		window[skill+"Buff"] += NumberOfBuffs[skill];
		//document.getElementById(skill+"BuffRemaining").innerHTML = window[skill+"Buff"];
		BuffRemaining(skill);
		DisplayStuff("Total"+skill+"Buff");
		DisplayStuff('Syrup');
	}
	
}
function BuffCosts(){
	skillsarray = ["Lumberjack", "IceFishing", "Beard", "Kindness", "Hockey"];
	for (i=0; i<skillsarray.length; i++){
		document.getElementById(skillsarray[i]+"BuffCost").innerHTML = getLevel(window[skillsarray[i]+"XP"]);	
		
	}
}

function BuffRemaining(skill){
	document.getElementById(skill+"BuffRemaining").innerHTML = window[skill+"Buff"];
	
}



//Prestige Functions

function PrestigeButton(){
	

	document.getElementById("PrestigeDisplay").innerHTML = "<img src=images/"+PrestigeImage[Prestige]+".png height=80><br><font size=2>声望: "+PrestigeNames[Prestige]+"</font>";
	
	ReadytoUpgrade = CheckPrestigeReq();
	
	if (Prestige == 4){
	document.getElementById("PrestigeButton").innerHTML = "你是最负盛名的。!";
	document.getElementById("PrestigeButtonDescription").innerHTML = "还有路要走呀!你是flannelicios!<br> +40% 经验<br>200% 工人的速度";
	}else{
		if (ReadytoUpgrade){
			document.getElementById("PrestigeButton").innerHTML = "<button onClick=UpgradePrestige()>升级声望等级到 "+PrestigeNames[Prestige+1]+"!</button>";
		}else{
			document.getElementById("PrestigeButton").innerHTML = "<button onClick=UpgradePrestige() disabled>升级声望等级到 "+PrestigeNames[Prestige+1]+"!</button>";
		}
	}
	
	if (Prestige == 0){
		document.getElementById("PrestigeButtonDescription").innerHTML = "你需要一些声望!完成要求并升级至青铜。<br>当你升级了声望，游戏重新开始，你就会有个不错的奖励!";
	}
	if (Prestige == 1){
		document.getElementById("PrestigeButtonDescription").innerHTML = "还有路要走呀!你是青铜!<br> +10% 经验<br>+50% 工人的速度";
	}
	if (Prestige == 2){
		document.getElementById("PrestigeButtonDescription").innerHTML = "还有路要走呀!你是白银!<br> +20% 经验<br>+100% 工人的速度";
	}
	if (Prestige == 3){
		document.getElementById("PrestigeButtonDescription").innerHTML = "还有路要走呀!你是黄金!<br> +30% 经验<br>+150% 工人的速度";
	}
	
	
}
	
function CheckPrestigeReq(){
	
	achievementProgress("PrestigeReq0");
	achievementProgress("PrestigeReq1");
	achievementProgress("PrestigeReq2");
	achievementProgress("PrestigeReq3");
	achievementProgress("PrestigeReq4");
	
	
	total = 0;
	if (AshUnlock){
		total++;
	}
	if (BeardClicks >= 500){
		total++;
	}
	if (IceFishingClicks >=2000){
		total++;
	}
	

	if (upgradeCount >= 101){
		total++;
	}
	
	SumOfLevels = 0;
	levelarray = [LumberjackXP, BeardXP, IceFishingXP, HockeyXP, KindnessXP];
	for (i=1; i<=5; i++){
		SumOfLevels += getLevel(levelarray[i-1]);
	}
	
	if (SumOfLevels >= PrestigeTotalLevelReq[Prestige]){
		total++;
	}
	if (total ==5){
		return true;
	}else{
		return false;
	}

}
	
function UpgradePrestige(){ //upgrades your prestige.  resets all upgrades, achievements, money, syrup, flannel
	PrestigeBeards = BeardClicks;
	PrestigeFish = IceFishingClicks;
	Prestige++;
	achievementProgress("prestigery");
	//reset upgrades
	for (i=1;i<=24;i++){
		window["Lu"+i] = 0;
	}
	for (i=1;i<=22;i++){
		window["Ic"+i] = 0;
	}
	for (i=1;i<=27;i++){
		window["Be"+i] = 0;
	}
	for (i=1;i<=29;i++){
		window["H"+i] = 0;
	}
	for (i=1;i<=21;i++){
		window["K"+i] = 0;
	}
	for (i=1;i<=16;i++){
		window["su"+i] = 0;
	}

	
	Money = 0;
	Syrup = 0;

	PrestigeUpgrades = upgradeCount;
	
	MasterXP = 0;
	LumberjackXP = 0;
	IceFishingXP = 0;
	BeardXP = 0;
	KindnessXP = 0;
	HockeyXP = 0;

	//Inventory
	//Trees
	Pine = 0;
	Spruce = 0;
	Maple = 0;
	Oak = 0;
	Birch = 0;
	Ash = 0;
	//Fish
	Trout = 0;
	Salmon = 0;
	Cod = 0;
	Crab = 0;
	Halibut = 0;
	Whale = 0;
	Bait1 = 0; //fishing bait.  could be more bait so Bait1 is used.
	//Hockey
	Pucks = 0;
	Sticks = 0;
	Gloves = 0;
	Skates = 0;
	Goals = 0;
	Zambonies = 0;
	
	SpruceUnlock = 0;
	MapleUnlock = 0;
	OakUnlock = 0;
	BirchUnlock = 0;
	AshUnlock = 0;
	//Fish
	SalmonUnlock = 0;
	CodUnlock = 0;
	CrabUnlock = 0;
	HalibutUnlock = 0;
	WhaleUnlock = 0;
	//Hockey
	SticksUnlock = 0;
	GlovesUnlock = 0;
	SkatesUnlock = 0;
	GoalsUnlock = 0;
	ZamboniesUnlock = 0;
	

//Lumberjack helpers
	AxeBud = 0;
	ChainsawPal = 0;
	FellerFriend = 0;
	TransportGuy = 0;

	BlackBeard = 0;
	SilverBeard = 0;
	GoldBeard = 0;
	RedBeard = 0;
	GrizzlyBeard = 0;
	
	save();
	location.reload();

}



//utility functions

function toggleNotifications(item){
	if (window[item]){
		window[item] = 0;
		document.getElementById(item).innerHTML = "<button onClick=toggleNotifications('"+item+"')>关</button>";
	}else{
		window[item] = 1;
		document.getElementById(item).innerHTML = "<button onClick=toggleNotifications('"+item+"')>开</button>";
	}
}

function DisplayNotify(item){
	if (window[item]){
		document.getElementById(item).innerHTML = "<button onClick=toggleNotifications('"+item+"')>开</button>";
	}else{
		document.getElementById(item).innerHTML = "<button onClick=toggleNotifications('"+item+"')>关</button>";
	}
}

function Rain(){
	if (MakeItRain){
		document.getElementById("MakeItRain").innerHTML = "<button onClick=ChangeRain()>停止下雨</button>";
	}else{
		document.getElementById("MakeItRain").innerHTML = "<button onClick=ChangeRain()>让它下雨!</button>";
	}
}

function ChangeRain(){
	if (MakeItRain){
		MakeItRain=0;
		Rain();
	}else{
		MakeItRain=1;
		Rain();
	}
}

function SwagbucksClick(){
	_gaq.push(['_trackEvent', 'Canada Clicker', 'Swagbucks']);
}

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function numberWithCommas(x) {//takes number and adds commas
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getdate(){//gets date
	RightNow=new Date();
}

function minutesAndSeconds(seconds){//takes an integer in seconds and returns a string
	days = 0;
	dayString = "";
	hours = 0;
	hourString = "";
	minutes = 0;
	minuteString = "";
	if (seconds>=86400){
		days = Math.floor(seconds/86400);
		seconds -= days*86400;
		dayString = days + " 天, ";
		hourString = "0 小时, ";
		minuteString = "0 分钟, ";
	}
	if (seconds>=3600){
		hours = Math.floor(seconds/3600);
		seconds -= hours*3600;
		hourString = hours + " 小时, ";
		minuteString = "0 分钟， ";
	}
	if (seconds>=60){
		minutes = Math.floor(seconds/60);
		seconds = seconds - minutes*60;
		minuteString = minutes + " 分钟, ";
	}
	finalString = dayString + hourString + minuteString + seconds + " 秒";
	return finalString;
}

function minutesAndSecondsAlt(seconds){//takes an integer in seconds and returns the time remaining in numbers only
	days = 0;
	dayString = "";
	hours = 0;
	hourString = "00:";
	minutes = 0;
	minuteString = "00:";
	temp="";
	temp2="";
	temp3="";
	if (seconds>=86400){
		days = Math.floor(seconds/86400);
		seconds -= days*86400;
		dayString = days + "天 ";
		hourString = "00:";
		minuteString = "00:";
	}
	if (seconds>=3600){
		hours = Math.floor(seconds/3600);
		if (hours<=9){
			temp="0";
		}
		seconds -= hours*3600;
		hourString = temp + hours + ":";
		minuteString = "00:";
	}
	if (seconds>=60){
		minutes = Math.floor(seconds/60);
		if (minutes<=9){
			temp2="0";
		}
		seconds = seconds - minutes*60;
		minuteString = temp2 + minutes + ":";
	}
	if (seconds<=9){
			temp3="0";
		}
	finalString = dayString + hourString + minuteString + temp3 + seconds;
	return finalString;
}

function minutesAndSeconds2(seconds){//takes an integer in seconds and returns a string
	days = 0;
	dayString = "";
	hours = 0;
	hourString = "";
	minutes = 0;
	minuteString = "";
	secondString = "";
	if (seconds>=86400){
		days = Math.floor(seconds/86400);
		seconds -= days*86400;
		dayString = days + " 天 ";
	}
	if (seconds>=3600){
		hours = Math.floor(seconds/3600);
		seconds -= hours*3600;
		hourString = hours + " 小时 ";
	}
	if (seconds>=60){
		minutes = Math.floor(seconds/60);
		seconds = seconds - minutes*60;
		minuteString = minutes + " 分钟 ";
	}
	if (seconds != 0){
		secondString = seconds + " 秒";
	}
	finalString = dayString + hourString + minuteString + secondString;
	return finalString;
}

var gameSaved = 0;

function save(){  //saves game (from http://dhmholley.co.uk/incrementals-part-2.html)
	var save = {
		TreeClicks: TreeClicks,
		IceFishingClicks: IceFishingClicks,
		BaitFished: BaitFished,
		BeardClicks: BeardClicks,
		KindnessClicks: KindnessClicks,
		HockeyClicks: HockeyClicks,
		MasterXP: MasterXP,
		LumberjackXP: LumberjackXP,
		IceFishingXP: IceFishingXP,
		BeardXP: BeardXP,
		KindnessXP: KindnessXP,
		HockeyXP: HockeyXP,
		Money: Money,
		Syrup: Syrup,
		Flannel: Flannel,
		Pine: Pine,
		Spruce: Spruce,
		Maple: Maple,
		Oak: Oak,
		Birch: Birch,
		Ash: Ash,
		Trout: Trout,
		Salmon: Salmon,
		Cod: Cod,
		Crab: Crab,
		Halibut: Halibut,
		Whale: Whale,
		Pucks: Pucks,
		Sticks: Sticks,
		Gloves: Gloves,
		Skates: Skates,
		Goals: Goals,
		Zambonies: Zambonies,
		SpruceUnlock: SpruceUnlock,
		MapleUnlock: MapleUnlock,
		OakUnlock: OakUnlock,
		BirchUnlock: BirchUnlock,
		AshUnlock: AshUnlock,
		SalmonUnlock: SalmonUnlock,
		CodUnlock: CodUnlock,
		CrabUnlock: CrabUnlock,
		HalibutUnlock: HalibutUnlock,
		WhaleUnlock: WhaleUnlock,
		SticksUnlock: SticksUnlock,
		GlovesUnlock: GlovesUnlock,
		SkatesUnlock: SkatesUnlock,
		GoalsUnlock: GoalsUnlock,
		ZamboniesUnlock: ZamboniesUnlock,
		Lu1: Lu1,
		Lu2: Lu2,
		Lu3: Lu3,
		Lu4: Lu4,
		Lu5: Lu5,
		Lu6: Lu6,
		Lu7: Lu7,
		Lu8: Lu8,
		Lu9: Lu9,
		Lu10: Lu10,
		Lu11: Lu11,
		Lu12: Lu12,
		Lu13: Lu13,
		Lu14: Lu14,
		Lu15: Lu15,
		Lu16: Lu16,
		Lu17: Lu17,
		Lu18: Lu18,
		Lu19: Lu19,
		Lu20: Lu20,
		Lu21: Lu21,
		Lu22: Lu22,
		Lu23: Lu23,
		Lu24: Lu24,
		AxeBud: AxeBud,
		ChainsawPal: ChainsawPal,
		FellerFriend: FellerFriend,
		TransportGuy: TransportGuy,
		Be1: Be1,
		Be2: Be2,
		Be3: Be3,
		Be4: Be4,
		Be5: Be5,
		Be6: Be6,
		Be7: Be7,
		Be8: Be8,
		Be9: Be9,
		Be10: Be10,
		Be11: Be11,
		Be12: Be12,
		Be13: Be13,
		Be14: Be14,
		Be15: Be15,
		Be16: Be16,
		Be17: Be17,
		Be18: Be18,
		Be19: Be19,
		Be20: Be20,
		Be21: Be21,
		Be22: Be22,
		Be23: Be23,
		Be24: Be24,
		Be25: Be25,
		Be26: Be26,
		Be27: Be27,
		LastBeard: LastBeard,
		BlackBeard: BlackBeard,
		SilverBeard: SilverBeard,
		GoldBeard: GoldBeard,
		RedBeard: RedBeard,
		GrizzlyBeard: GrizzlyBeard,
		Bait1: Bait1,
		Ic1: Ic1,
		Ic2: Ic2,
		Ic3: Ic3,
		Ic4: Ic4,
		Ic5: Ic5,
		Ic6: Ic6,
		Ic7: Ic7,
		Ic8: Ic8,
		Ic9: Ic9,
		Ic10: Ic10,
		Ic11: Ic11,
		Ic12: Ic12,
		Ic13: Ic13,
		Ic14: Ic14,
		Ic15: Ic15,
		Ic16: Ic16,
		Ic17: Ic17,
		Ic18: Ic18,
		Ic19: Ic19,
		Ic20: Ic20,
		Ic21: Ic21,
		Ic22: Ic22,
		kind1time: kind1time,
		kind1inprogress: kind1inprogress,
		kind2time: kind2time,
		kind2inprogress: kind2inprogress,
		kind3time: kind3time,
		kind3inprogress: kind3inprogress,
		kind4time: kind4time,
		kind4inprogress: kind4inprogress,
		kind5time: kind5time,
		kind5inprogress: kind5inprogress,
		kind6time: kind6time,
		kind6inprogress: kind6inprogress,
		kind7time: kind7time,
		kind7inprogress: kind7inprogress,
		kind8time: kind8time,
		kind8inprogress: kind8inprogress,
		kind9time: kind9time,
		kind9inprogress: kind9inprogress,
		kind10time: kind10time,
		kind10inprogress: kind10inprogress,
		kind11time: kind11time,
		kind11inprogress: kind11inprogress,
		kind12time: kind12time,
		kind12inprogress: kind12inprogress,
		kind13time: kind13time,
		kind13inprogress: kind13inprogress,
		kind14time: kind14time,
		kind14inprogress: kind14inprogress,
		kind15time: kind15time,
		kind15inprogress: kind15inprogress,
		kind16time: kind16time,
		kind16inprogress: kind16inprogress,
		kind17time: kind17time,
		kind17inprogress: kind17inprogress,
		kind18time: kind18time,
		kind18inprogress: kind18inprogress,
		K1: K1,
		K2: K2,
		K3: K3,
		K4: K4,
		K5: K5,
		K6: K6,
		K7: K7,
		K8: K8,
		K9: K9,
		K10: K10,
		K11: K11,
		K12: K12,
		K13: K13,
		K14: K14,
		K15: K15,
		K16: K16,
		K17: K17,
		K18: K18,
		K19: K19,
		K20: K20,
		K21: K21,
		hockey1time: hockey1time,
		hockey1inprogress: hockey1inprogress,
		hockey2time: hockey2time,
		hockey2inprogress: hockey2inprogress,
		hockey3time: hockey3time,
		hockey3inprogress: hockey3inprogress,
		hockey4time: hockey4time,
		hockey4inprogress: hockey4inprogress,
		hockey5time: hockey5time,
		hockey5inprogress: hockey5inprogress,
		hockey6time: hockey6time,
		hockey6inprogress: hockey6inprogress,
		hockey7time: hockey7time,
		hockey7inprogress: hockey7inprogress,
		hockey8time: hockey8time,
		hockey8inprogress: hockey8inprogress,
		hockey9time: hockey9time,
		hockey9inprogress: hockey9inprogress,
		hockey10time: hockey10time,
		hockey10inprogress: hockey10inprogress,
		hockey11time: hockey11time,
		hockey11inprogress: hockey11inprogress,
		hockey12time: hockey12time,
		hockey12inprogress: hockey12inprogress,
		hockey13time: hockey13time,
		hockey13inprogress: hockey13inprogress,
		hockey14time: hockey14time,
		hockey14inprogress: hockey14inprogress,
		hockey15time: hockey15time,
		hockey15inprogress: hockey15inprogress,
		H1: H1,
		H2: H2,
		H3: H3,
		H4: H4,
		H5: H5,
		H6: H6,
		H7: H7,
		H8: H8,
		H9: H9,
		H10: H10,
		H11: H11,
		H12: H12,
		H13: H13,
		H14: H14,
		H15: H15,
		H16: H16,
		H17: H17,
		H18: H18,
		H19: H19,
		H20: H20,
		H21: H21,
		H22: H22,
		H23: H23,
		H24: H24,
		H25: H25,
		H26: H26,
		H27: H27,
		H28: H28,
		H29: H29,
		a1: a1,
		a2: a2,
		a3: a3,
		a4: a4,
		a5: a5,
		a6: a6,
		a7: a7,
		a8: a8,
		a9: a9,
		a10: a10,
		a11: a11,
		a12: a12,
		a13: a13,
		a14: a14,
		a15: a15,
		a16: a16,
		a17: a17,
		a18: a18,
		a19: a19,
		a20: a20,
		a21: a21,
		a22: a22,
		a23: a23,
		a24: a24,
		a25: a25,
		a26: a26,
		a27: a27,
		a28: a28,
		a29: a29,
		a30: a30,
		a31: a31,
		a32: a32,
		a33: a33,
		a34: a34,
		a35: a35,
		a36: a36,
		a37: a37,
		a38: a38,
		a39: a39,
		a40: a40,
		a41: a41,
		a42: a42,
		a43: a43,
		a44: a44,
		a45: a45,
		a46: a46,
		a47: a47,
		a48: a48,
		a49: a49,
		a50: a50,
		a51: a51,
		a52: a52,
		a53: a53,
		a54: a54,
		a55: a55,
		a56: a56,
		a57: a57,
		a58: a58,
		a59: a59,
		a60: a60,
		a61: a61,
		a62: a62,
		a63: a63,
		a64: a64,
		a65: a65,
		a66: a66,
		a67: a67,
		a68: a68,
		a69: a69,
		a70: a70,
		a71: a71,
		a72: a72,
		a73: a73,
		a74: a74,
		a75: a75,
		a76: a76,
		a77: a77,
		a78: a78,
		a79: a79,
		a80: a80,
		a81: a81,
		a82: a82,
		a83: a83,
		a84: a84,
		a85: a85,
		a86: a86,
		a87: a87,
		a88: a88,
		a89: a89,
		a90: a90,
		a91: a91,
		a92: a92,
		a93: a93,
		a94: a94,
		a95: a95,
		a96: a96,
		a97: a97,
		su1: su1,
		su2: su2,
		su3: su3,
		su4: su4,
		su5: su5,
		su6: su6,
		su7: su7,
		su8: su8,
		su9: su9,
		su10: su10,
		su11: su11,
		su12: su12,
		su13: su13,
		su14: su14,
		su15: su15,
		su16: su16,
		fu1: fu1,
		fu2: fu2,
		fu3: fu3,
		fu4: fu4,
		fu5: fu5,
		fu6: fu6,
		fu7: fu7,
		fu8: fu8,
		fu9: fu9,
		fu10: fu10,
		mainTutorial: mainTutorial,
		inventoryTutorial: inventoryTutorial,
		storeTutorial: storeTutorial,
		statsTutorial: statsTutorial,
		achievementsTutorial: achievementsTutorial,
		lumberjackTutorial: lumberjackTutorial,
		icefishingTutorial: icefishingTutorial,
		beardTutorial: beardTutorial,
		kindnessTutorial: kindnessTutorial,
		hockeyTutorial: hockeyTutorial,	
		totalPine: totalPine,
		totalSpruce: totalSpruce,
		totalMaple: totalMaple,
		totalOak: totalOak,
		totalBirch: totalBirch,
		totalAsh: totalAsh,
		totalTrout: totalTrout,
		totalSalmon: totalSalmon,
		totalCod: totalCod,
		totalCrab: totalCrab,
		totalHalibut: totalHalibut,
		totalWhale: totalWhale,
		totalPucks: totalPucks,
		totalSticks: totalSticks,
		totalGloves: totalGloves,
		totalSkates: totalSkates,
		totalGoals: totalGoals,
		totalZambonies: totalZambonies,
		totalMinutes: totalMinutes,
		totalBrownBeard: totalBrownBeard,
		totalBlackBeard: totalBlackBeard,
		totalSilverBeard: totalSilverBeard,
		totalGoldBeard: totalGoldBeard,
		totalRedBeard: totalRedBeard,
		totalGrizzlyBeard: totalGrizzlyBeard,
		totalkind1: totalkind1,
		totalkind2: totalkind2,
		totalkind3: totalkind3,
		totalkind4: totalkind4,
		totalkind5: totalkind5,
		totalkind6: totalkind6,
		totalkind7: totalkind7,
		totalkind8: totalkind8,
		totalkind9: totalkind9,
		totalkind10: totalkind10,
		totalhockey1: totalhockey1,
		totalhockey2: totalhockey2,
		totalhockey3: totalhockey3,
		totalhockey4: totalhockey4,
		totalhockey5: totalhockey5,
		totalhockey6: totalhockey6,
		totalhockey7: totalhockey7,
		totalhockey8: totalhockey8,
		totalhockey9: totalhockey9,
		totalhockey10: totalhockey10,
		totalhockey11: totalhockey11,
		totalhockey12: totalhockey12,
		totalhockey13: totalhockey13,
		totalhockey14: totalhockey14,
		totalhockey15: totalhockey15,
		totalInstantKindness: totalInstantKindness,
		totalInstantHockey: totalInstantHockey,
		totalMoney: totalMoney,
		totalSyrup: totalSyrup,
		totalFlannel: totalFlannel,
		yesterday: yesterday,
		totalDaysPlayed: totalDaysPlayed,
		daysStreak: daysStreak,
		bestdaysStreak: bestdaysStreak,
		upgradeCount: upgradeCount,
		aboot: aboot,
		reddit: reddit,
		importer: importer,
		IceFishingNotifyToggle: IceFishingNotifyToggle,
		KindnessNotifyToggle: KindnessNotifyToggle,
		HockeyNotifyToggle: HockeyNotifyToggle,
		Prestige: Prestige,
		PrestigeBeards: PrestigeBeards,
		PrestigeFish: PrestigeFish,
		PrestigeUpgrades: PrestigeUpgrades,
		LumberjackBuff: LumberjackBuff,
		IceFishingBuff: IceFishingBuff,
		BeardBuff: BeardBuff,
		KindnessBuff: KindnessBuff,
		HockeyBuff: HockeyBuff,
		TotalLumberjackBuff: TotalLumberjackBuff,
		TotalIceFishingBuff: TotalIceFishingBuff,
		TotalBeardBuff: TotalBeardBuff,
		TotalKindnessBuff: TotalKindnessBuff,
		TotalHockeyBuff: TotalHockeyBuff,
		MakeItRain: MakeItRain,
		PineCheck: PineCheck,
		SpruceCheck: SpruceCheck,
		MapleCheck: MapleCheck,
		OakCheck: OakCheck,
		BirchCheck: BirchCheck,
		AshCheck: AshCheck,
		TroutCheck: TroutCheck,
		SalmonCheck: SalmonCheck,
		CodCheck: CodCheck,
		CrabCheck: CrabCheck,
		HalibutCheck: HalibutCheck,
		WhaleCheck: WhaleCheck,
		PucksCheck: PucksCheck,
		SticksCheck: SticksCheck,
		GlovesCheck: GlovesCheck,
		SkatesCheck: SkatesCheck,
		GoalsCheck: GoalsCheck,
		ZamboniesCheck: ZamboniesCheck,
		isFishing: isFishing,
		changeSkins: changeSkins,
		whatskin: whatskin,

	}
	localStorage.setItem("SaveCanada",JSON.stringify(save));
	document.getElementById("DidISave").innerHTML = "游戏已保存";
	gameSaved = 3;
}

function clickDelete(){
	
	if (confirm("Reset the game?") == true) {
		DeleteGame();
    }
	
}



function DeleteGame(){ //deletes the saved game
	localStorage.removeItem("SaveCanada");
	location.reload();
}
var testvar = 0;
var increment = 0;
var WoodInterval = 0;
var BeardInterval = 0;
var BeardOn = 99999999999999999999;//denotes the time the beard has appeared
var BeardOff = 1;
var FishingIncrement = 0;
var BeardRewardCountdown = 0;//countdown on beard reward

var kindnessSum = 0;
var hockeySum = 0;
var inventorySum = 0;

var counter = 0;


window.setInterval(function(){//game interval.

//update the RightNow time
getdate();

//Getting Wood
WoodInterval += WoodPerSecond() + Math.pow((LowestLevel-1),2);
	if(WoodInterval >= 1){
		getWood(Math.floor(WoodInterval));
		WoodInterval -= Math.floor(WoodInterval);
	}

//Ice Fishing 
if (isFishing > 0){
	if (Bait1<=0){
		isFishing=0;
	}else{	
		FishingIncrement++;
		if (FishingIncrement % FishingTime == 0){
		BaitFished++;
		getFish();
	
		//check to see if you get a second fish
		fishy = Math.max(0, Ic6*Ic6num, Ic7*Ic7num, Ic8*Ic8num, Ic9*Ic9num, Ic10*Ic10num, Ic18*Ic18num, Ic19*Ic19num);
		if (fishy > Math.random()){
		Bait1++;
		getFish();
		}
		
		isFishing--;
		}
		NextFish = FishingTime - FishingIncrement % FishingTime;
		document.getElementById("FishingDisplay").innerHTML = "钓鱼中: 下一条鱼 " + NextFish + " 秒; " + isFishing + " 剩余的鱼饵";
	}
}
if (!isFishing){
	document.getElementById("FishingDisplay").innerHTML = "您目前还没有在钓鱼";
	FishingIncrement = 0;
}


	
//Beard variables repeated as comments here for troubleshooting purposes
//var BeardCooldown = 5;//default number of seconds that beard waits before becoming available again
//var BeardProbability = 1;//percent chance (each second) that beard will appear again
//var LastBeard = 0;//the time stamp of the last beard click or last beard disappearance
//var BeardTime = 2;//default number of seconds that beard will be available to click before disappearing

//Beard appearance/disappearance code
if (((RightNow.getTime()-LastBeard) >= (BeardCooldown*1000)) && (BeardOff==1)){
	if (Math.random() >= (1-(BeardProbability + Math.max(Be1*Be1num, Be2*Be2num, Be3*Be3num, Be4*Be4num, Be5*Be5num, Be16*Be16num, Be17*Be17num))/100)){
	document.getElementById("BeardBoxReward").innerHTML = "";
	document.getElementById("BeardBoxXP").innerHTML = "";
	thebeard = getBeard();
	document.getElementById("BeardBox").innerHTML = "<img width=200 onClick=BeardClick('"+thebeard+"') src='images/"+thebeard+".png'>";
	//document.getElementById("BeardBox").innerHTML = "<img width=200 onClick='BeardClick()' src='images/beard.png'>";
	//document.getElementById("BeardBoxReward").innerHTML = "Click the Beard!";
	BeardOn = RightNow.getTime()+(BeardTime+Math.max(Be6*Be6num, Be7*Be7num, Be8*Be8num, Be9*Be9num, Be10*Be10num, Be18*Be18num, Be19*Be19num))*1000;
	BeardOff=0;
	}
	}
	if ((RightNow.getTime()-BeardOn) >= 0){
	if (!BeardOff){
	LastBeard = RightNow.getTime();
	}
	document.getElementById("BeardBox").innerHTML = "";
	BeardOff=1;
	}	

if (BeardRewardCountdown){
	if (TreeMultiplier > 1){
	document.getElementById("BeardBoxReward").innerHTML = "每次点击得到 "+TreeMultiplier+" 树，剩余 "+(BeardRewardCountdown-1)+" 秒";
	}
	if (LumberjackXPMultiplier > 1){
	document.getElementById("BeardBoxReward").innerHTML = "每次点击得到 "+LumberjackXPMultiplier+" 伐木工人经验，剩余"+(BeardRewardCountdown-1)+" 秒";
	}
	BeardRewardCountdown--;	
	if (!BeardRewardCountdown){
		document.getElementById("BeardBoxReward").innerHTML = "";
		document.getElementById("BeardBoxXP").innerHTML = "";
		TreeMultiplier=1;
		LumberjackXPMultiplier=1;
	}
}
	
	

//kindness
kindnessSum = 0;
for (i=1;i<=18;i++){
	if (window["kind"+i+"inprogress"]){
		kindnessSum++;
	}	
	if (window["kind"+i+"inprogress"] && ((RightNow.getTime()-window["kind"+i+"time"])>=(window["kind"+i+"cooldown"]*1000))){
		kindXP("kind"+i);
		KindnessButton("kind"+i);
	}
	if (window["kind"+i+"inprogress"] && ((RightNow.getTime()-window["kind"+i+"time"])<=(window["kind"+i+"cooldown"]*1000))){
		document.getElementById("kind"+i).innerHTML = minutesAndSecondsAlt(window["kind"+i+"cooldown"] - Math.floor((RightNow.getTime()-window["kind"+i+"time"])/1000));
	}
}
achievementProgress("multitasker");


	
//hockey
hockeySum = 0;
for (h=1;h<=15;h++){
	if (window["totalhockey"+h]>=1){
		hockeySum++;
	}
	if (window["hockey"+h+"inprogress"] && ((RightNow.getTime()-window["hockey"+h+"time"])>=(window["hockey"+h+"cooldown"]*1000))){
		hockeyXP("hockey"+h);
		HockeyButton("hockey"+h);
	}
	if (window["hockey"+h+"inprogress"] && ((RightNow.getTime()-window["hockey"+h+"time"])<=(window["hockey"+h+"cooldown"]*1000))){
		document.getElementById("hockey"+h).innerHTML = minutesAndSecondsAlt(window["hockey"+h+"cooldown"] - Math.floor((RightNow.getTime()-window["hockey"+h+"time"])/1000));
	}
}
achievementProgress("hockeypro");

inventorySum = 0;
for (i=1; i<=18; i++){
	inventoryArray = [Pine, Spruce, Maple, Oak, Birch, Ash, Trout, Salmon, Cod, Crab, Halibut, Whale, Pucks, Sticks, Gloves, Skates, Goals, Zambonies];
	if (inventoryArray[i-1]>=1){	
		inventorySum++;
	}
	achievementProgress("packrat");
}


//game saved message
gameSaved--;
if (gameSaved<=0){
	document.getElementById("DidISave").innerHTML = "&nbsp";
}


//total minutes
counter++;
if ((counter % 60) == 0){
	totalMinutes++;
	DisplayStuff('totalMinutes');
	//achievementProgress("minutes");
	_gaq.push(['_trackEvent', 'Canada Clicker', 'Minute']);
	save();
}

//money per second
Money += su1*su1num + su2*su2num + su3*su3num + su4*su4num + su5*su5num + su6*su6num + su13*su13num + su14*su14num;
DisplayStuff('Money');
totalMoney += su1*su1num + su2*su2num + su3*su3num + su4*su4num + su5*su5num + su6*su6num + su13*su13num + su14*su14num;
DisplayStuff('totalMoney');
achievementProgress("moreMoney");

//checking days
if (!yesterday){//if yesterday hasn't been set, it sets it to right now
	yesterday = RightNow.getTime();
}


whatdayisit = new Date(yesterday);
// total days
if (!((RightNow.getFullYear() == whatdayisit.getFullYear()) && (RightNow.getMonth() == whatdayisit.getMonth()) && (RightNow.getDate() == whatdayisit.getDate()))){//day, month, year combo is different
	totalDaysPlayed++;
	DisplayStuff('totalDaysPlayed');
	
	//check to see if yesterday is truly one day behind right now

	var yesterdayTomorrow = new Date(yesterday + (1000*60*60*24));//adds 1 day in milliseconds to yesterday
	if (((RightNow.getFullYear() == yesterdayTomorrow.getFullYear()) && (RightNow.getMonth() == yesterdayTomorrow.getMonth()) && (RightNow.getDate() == yesterdayTomorrow.getDate()))){//day, month, year combo is different
		daysStreak++;
		DisplayStuff('daysStreak');
		
		//compare to best consecutive day streak
		if (daysStreak > bestdaysStreak){
			bestdaysStreak = daysStreak;
			DisplayStuff('bestdaysStreak');
		}
			
	}else{//if not consecutive days, daystreak back to one
		daysStreak=1;
		DisplayStuff('daysStreak');
	}
	yesterday = new Date().getTime();
}


DisplayStuff('daysStreak');
DisplayStuff('totalDaysPlayed');



	
checkAchievements();
checkAllUpgrades();
checkLevels();
updateWPS();
PrestigeButton();
BuffCosts();

achievementProgress("canadaday");

}, 1000);


//汉化xx
function cnSkill(text){
    var cntext="";
    var temp=text;
    if(temp=="Lumberjack"){
        cntext="伐木工人"
    }else if(temp=="IceFishing"){
        cntext="冰上钓鱼"
    }else if(temp=="Beard"){
        cntext="胡子"
    }else if(temp=="Kindness"){
        cntext="善良"
    }else if(temp=="Hockey"){
        cntext="曲棍球"
    }else{
        console.log("需汉化的英文："+text);
        return text;
    }
    return cntext;
}