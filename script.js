var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jaison";
names[4]="Jason";
names[5]="Paul";
names[6]="Frank";
names[7]="Larry";
names[8]="Paula";
names[9]="Laura";
names[10]="Jim";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Good Bye "+ names[i])
	}
	else {
		console.log("Hello "+ names[i])
	}
}
