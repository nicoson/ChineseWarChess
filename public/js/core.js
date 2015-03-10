$(function(){
	var $chessgrid = $("#chessGrid");
	//var fclick;
	var ox, oy;	//original x,y when chosen
	var matrix = init();
	var lattice;

	// set click events on chessman
	$(".chessman").on("click", function(){
		if(lattice){
			pathShow(lattice);
			lattice = null;	ox = null; oy = null;
		}else{
			ox = parseInt($(this).attr("data-x"));
			oy = parseInt($(this).attr("data-y"));
			//fclick = $(this).parent();
			var name = $(this).attr("id");
			lattice = takeAction(ox,oy,name,matrix);
			pathShow(lattice);
		}
	});

	// move chessman
	$chessgrid.find("td").on("click", function(){
		if(lattice){
			var x = parseInt($(this).attr("data-x"));
			var y = parseInt($(this).attr("data-y"));
			var temp=[]; // search the lattice to make the location legal
			for(var i=0; i<lattice.length; i++){
				temp.push(lattice[i].toString().trim());
			}
			if((ox!=x || oy!=y) && temp.indexOf(y+","+x)>-1){
				moveChessman(ox,oy,x,y,$chessgrid);
				matrix[oy][ox] = 0;
				matrix[y][x] = 1;
				pathShow(lattice);
				lattice = null;	ox = null; oy = null;
			}
		}
	});
});

function chessman(x,y,name1,name2,chessgrid){
	this.x = x;
	this.y = y;
	this.name1 = name1;
	this.name2 = name2;
	this.chessgrid = chessgrid;

	this.init = function(color){
		local = $(this.chessgrid).find("tr").eq(this.y).children("td").eq(this.x);
		local.append("<div id="+this.name1+" data-x="+this.x+" data-y="+this.y+"></div>");
		local.children().addClass("chessman");
		local.children().append("<div>"+this.name2+"<div>");
		local.children().children().addClass("chessmanInner"+color);
	}
}

function init(){
	var chessgrid = $("#chessGrid");
	var i=0, j=0;
	
	// initialized the chessGrid table
	for(i=0; i<10; i++){
		var chessgridrow = chessgrid.find("tr").eq(i).find("td");
		for(j=0; j<9; j++){
			chessgridrow.eq(j).attr({
				"data-x":j,
				"data-y":i
			});
		}
	}

	// initialized the chessman
	var juL = new chessman(0, 9, "juL", "車", chessgrid);
	juL.init("Red");
	var maL = new chessman(1, 9, "maL", "馬", chessgrid);
	maL.init("Red");
	var xiangL = new chessman(2, 9, "xiangL", "相", chessgrid);
	xiangL.init("Red");
	var shiL = new chessman(3, 9, "shiL", "仕", chessgrid);
	shiL.init("Red");
	var shuai = new chessman(4, 9, "shuai", "帥", chessgrid);
	shuai.init("Red");
	var shiR = new chessman(5, 9, "shiR", "仕", chessgrid);
	shiR.init("Red");
	var xiangR = new chessman(6, 9, "xiangR", "相", chessgrid);
	xiangR.init("Red");
	var maR = new chessman(7, 9, "maR", "馬", chessgrid);
	maR.init("Red");
	var juR = new chessman(8, 9, "juR", "車", chessgrid);
	juR.init("Red");
	var bing1 = new chessman(0, 6, "bing1", "兵", chessgrid);
	bing1.init("Red");
	var bing2 = new chessman(2, 6, "bing2", "兵", chessgrid);
	bing2.init("Red");
	var bing3 = new chessman(4, 6, "bing3", "兵", chessgrid);
	bing3.init("Red");
	var bing4 = new chessman(6, 6, "bing4", "兵", chessgrid);
	bing4.init("Red");
	var bing5 = new chessman(8, 6, "bing5", "兵", chessgrid);
	bing5.init("Red");
	var paoL = new chessman(1, 7, "paoL", "砲", chessgrid);
	paoL.init("Red");
	var paoR = new chessman(7, 7, "paoR", "砲", chessgrid);
	paoR.init("Red");

	// Black
	var juL = new chessman(0, 0, "juL", "車", chessgrid);
	juL.init("Black");
	var maL = new chessman(1, 0, "maL", "馬", chessgrid);
	maL.init("Black");
	var xiangL = new chessman(2, 0, "xiangL", "相", chessgrid);
	xiangL.init("Black");
	var shiL = new chessman(3, 0, "shiL", "士", chessgrid);
	shiL.init("Black");
	var shuai = new chessman(4, 0, "shuai", "將", chessgrid);
	shuai.init("Black");
	var shiR = new chessman(5, 0, "shiR", "士", chessgrid);
	shiR.init("Black");
	var xiangR = new chessman(6, 0, "xiangR", "相", chessgrid);
	xiangR.init("Black");
	var maR = new chessman(7, 0, "maR", "馬", chessgrid);
	maR.init("Black");
	var juR = new chessman(8, 0, "juR", "車", chessgrid);
	juR.init("Black");
	var bing1 = new chessman(0, 3, "bing1", "卒", chessgrid);
	bing1.init("Black");
	var bing2 = new chessman(2, 3, "bing2", "卒", chessgrid);
	bing2.init("Black");
	var bing3 = new chessman(4, 3, "bing3", "卒", chessgrid);
	bing3.init("Black");
	var bing4 = new chessman(6, 3, "bing4", "卒", chessgrid);
	bing4.init("Black");
	var bing5 = new chessman(8, 3, "bing5", "卒", chessgrid);
	bing5.init("Black");
	var paoL = new chessman(1, 2, "paoL", "炮", chessgrid);
	paoL.init("Black");
	var paoR = new chessman(7, 2, "paoR", "炮", chessgrid);
	paoR.init("Black");


	var matrix = matrixInit();

	return matrix;
}

function matrixInit(){
	return [[2,2,2,2,2,2,2,2,2],
	[0,0,0,0,0,0,0,0,0],
	[0,2,0,0,0,0,0,2,0],
	[2,0,2,0,2,0,2,0,2],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[1,0,1,0,1,0,1,0,1],
	[0,1,0,0,0,0,0,1,0],
	[0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1],
	];
}

function takeAction(x,y,name,matrix){
	switch(true){
		case Boolean(name.match("ju")):
		return juAction(x,y,matrix);
		case Boolean(name.match("ma")):
		return maAction(x,y,matrix);
		case Boolean(name.match("xiang")):
		return xiangAction(x,y,matrix);
		case Boolean(name.match("shi")):
		return shiAction(x,y,matrix);
		case Boolean(name.match("shuai")):
		return shuaiAction(x,y,matrix);
		case Boolean(name.match("pao")):
		return paoAction(x,y,matrix);
		case Boolean(name.match("bing")):
		return bingAction(x,y,matrix);
		default:
		console.log(name);
	}
}

function pathShow(lattice){
	var chessgridrow = $("#chessGrid").find("tr");
	for(var i=0; i<lattice.length; i++){
		chessgridrow.eq(lattice[i][0]).find("td").eq(lattice[i][1]).toggleClass("chessPath");
	}
}

function moveChessman(ox,oy,x,y,$chessgrid){
	$chessgrid.find("tr").eq(y).find("td").eq(x).append(
		$chessgrid.find("tr").eq(oy).find("td").eq(ox).children().attr({"data-y": y,"data-x": x}).detach()
		);
}