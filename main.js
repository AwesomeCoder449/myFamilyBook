var members= [
    "My Mother - Jeciy Sophia",
    "My Baby Sister And Me- Ria Sophi and Rio Vijay",
    "Thanks For Seeing My Project!!!"
];
var photos= [
"https://as2.ftcdn.net/jpg/01/67/32/55/500_F_167325582_WaD0UoI4IMGL9F522fI3OhemMGgnbkJy.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx12Q7goWf5sM-L4IHBiqJVmG6tLd5NeV-gQ&usqp=CAU",
"https://media.istockphoto.com/vectors/ribbon-banner-with-text-thank-you-vector-id849676614?b=1&k=6&m=849676614&s=612x612&w=0&h=8hHJbw9Fu2rbvJ3ZzqHeZVUNV_hFw7PCruew9gIXfOo="
];
var index= 0;
function nxt(){
document.getElementById("memberss").innerHTML=members[index];
document.getElementById("album").src=photos[index];
index++;
}