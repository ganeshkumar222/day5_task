let jason =[
	{
		"color": "red",
		"value": "#f00"
	},
	{
		"color": "green",
		"value": "#0f0"
	},
	{
		"color": "blue",
		"value": "#00f"
	},
	{
		"color": "cyan",
		"value": "#0ff"
	},
	{
		"color": "magenta",
		"value": "#f0f"
	},
	{
		"color": "yellow",
		"value": "#ff0"
	},
	{
		"color": "black",
		"value": "#000"
	}
]
for(var i = 0;i<jason.length;i++){
    console.log(jason[i])
}
for (var j in jason){
    console.log(jason[j])
}
for(var z of jason){
    console.log(z)
}
jason.forEach((element)=>{
    console.log(element)
})

