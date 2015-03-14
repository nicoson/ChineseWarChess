function juAction(x,y,matrix){
	var i, j;
	var availLattice = [[y,x]];
	for(i=x-1;i>-1;i--){
		if(matrix[y][i] == 0){
			availLattice.push([y, i]); 
		}else{
			if(matrix[y][i] == 2){
				availLattice.push([y, i]);
			}
			break;
		}
	}
	for(i=x+1;i<9;i++){
		if(matrix[y][i] == 0){
			availLattice.push([y, i]); 
		}else{
			if(matrix[y][i] == 2){
				availLattice.push([y, i]);
			}
			break;
		}
	}
	for(j=y-1;j>-1;j--){
		if(matrix[j][x] == 0){
			availLattice.push([j, x]); 
		}else{
			if(matrix[j][x] == 2){
				availLattice.push([j, x]);
			}
			break;
		}
	}
	for(j=y+1;j<10;j++){
		if(matrix[j][x] == 0){
			availLattice.push([j, x]); 
		}else{
			if(matrix[j][x] == 2){
				availLattice.push([j, x]);
			}
			break;
		}
	}
	return availLattice;
}

function maAction(x,y,matrix){
	var availLattice = [[y,x]];
	// up direction
	if(y>1){
		if(matrix[y-1][x] == 0){
			if(x>0){	// upper left
				if(matrix[y-2][x-1]==0 || matrix[y-2][x-1]==2){
					availLattice.push([y-2, x-1]);
				}
			}
			if(x<8){	// upper right
				if(matrix[y-2][x+1]==0 || matrix[y-2][x+1]==2){
					availLattice.push([y-2, x+1]);
				}
			}
		}
	}

	// down direction
	if(y<8){
		if(matrix[y+1][x] == 0){
			if(x>0){	// down left
				if(matrix[y+2][x-1]==0 || matrix[y+2][x-1]==2){
					availLattice.push([y+2, x-1]);
				}
			}
			if(x<8){	//down right
				if(matrix[y+2][x+1]==0 || matrix[y+2][x+1]==2){
					availLattice.push([y+2, x+1]);
				}
			}
		}
	}
	
	// left direction
	if(x>1){
		if(matrix[y][x-1] == 0){
			if(y>0){
				if(matrix[y-1][x-2]==0 || matrix[y-1][x-2]==2){
					availLattice.push([y-1, x-2]);
				}
			}
			if(y<9){
				if(matrix[y+1][x-2]==0 || matrix[y+1][x-2]==2){
					availLattice.push([y+1, x-2]);
				}
			}
		}
	}

	// right direction
	if(x<7){
		if(matrix[y][x+1] == 0){
			if(y>0){
				if(matrix[y-1][x+2]==0 || matrix[y-1][x+2]==2){
					availLattice.push([y-1, x+2]);
				}
			}
			if(y<9){
				if(matrix[y+1][x+2]==0 || matrix[y+1][x+2]==2){
					availLattice.push([y+1, x+2]);
				}
			}
		}
	}
	
	return availLattice;
}

function xiangAction(x,y,matrix){
	var availLattice = [[y,x]];
	
	if(y-2>4){	//upper
		if(x-2>-1){	//up-left
			if(matrix[y-1][x-1]==0 || matrix[y-1][x-1]==2){
				if(matrix[y-2][x-2]!=1){
					availLattice.push([y-2,x-2]);
				}
			}
		}
		if(x+2<9){ //up-right
			if(matrix[y-1][x+1]==0 || matrix[y-1][x+1]==2){
				if(matrix[y-2][x+2]!=1){
					availLattice.push([y-2,x+2]);
				}
			}
		}
	}
	if(y+2<10){
		if(x-2>-1){	//down-left
			if(matrix[y+1][x-1]==0 || matrix[y+1][x-1]==2){
				if(matrix[y+2][x-2]!=1){
					availLattice.push([y+2,x-2]);
				}
			}
		}
		if(x+2<9){ //down-right
			if(matrix[y+1][x+1]==0 || matrix[y+1][x+1]==2){
				if(matrix[y+2][x+2]!=1){
					availLattice.push([y+2,x+2]);
				}
			}
		}
	}

	return availLattice;
}

function xiangUpAction(x,y,matrix){
	var availLattice = [[y,x]];
	
	if(y-2>0){	//upper
		if(x-2>-1){	//up-left
			if(matrix[y-1][x-1]==0 || matrix[y-1][x-1]==2){
				if(matrix[y-2][x-2]!=1){
					availLattice.push([y-2,x-2]);
				}
			}
		}
		if(x+2<9){ //up-right
			if(matrix[y-1][x+1]==0 || matrix[y-1][x+1]==2){
				if(matrix[y-2][x+2]!=1){
					availLattice.push([y-2,x+2]);
				}
			}
		}
	}
	if(y+2<5){
		if(x-2>-1){	//down-left
			if(matrix[y+1][x-1]==0 || matrix[y+1][x-1]==2){
				if(matrix[y+2][x-2]!=1){
					availLattice.push([y+2,x-2]);
				}
			}
		}
		if(x+2<9){ //down-right
			if(matrix[y+1][x+1]==0 || matrix[y+1][x+1]==2){
				if(matrix[y+2][x+2]!=1){
					availLattice.push([y+2,x+2]);
				}
			}
		}
	}

	return availLattice;
}

function shiAction(x,y,matrix){
	var availLattice = [[y,x]];

	if(y-1>6){	//up
		if(x-1>2){	// up-left
			if(matrix[y-1][x-1]==0 || matrix[y-1][x-1]==2){
				availLattice.push([y-1,x-1]);
			}
		}
		if(x+1<6){	// up-right
			if(matrix[y-1][x+1]==0 || matrix[y-1][x+1]==2){
				availLattice.push([y-1,x+1]);
			}
		}
	}
	if(y+1<10){	//down
		if(x-1>2){	// down-left
			if(matrix[y+1][x-1]==0 || matrix[y+1][x-1]==2){
				availLattice.push([y+1,x-1]);
			}
		}
		if(x+1<6){	// down-left
			if(matrix[y+1][x+1]==0 || matrix[y+1][x+1]==2){
				availLattice.push([y+1,x+1]);
			}
		}
	}
	return availLattice;
}

function shiUpAction(x,y,matrix){
	var availLattice = [[y,x]];

	if(y>0){	//up
		if(x-1>2){	// up-left
			if(matrix[y-1][x-1]==0 || matrix[y-1][x-1]==2){
				availLattice.push([y-1,x-1]);
			}
		}
		if(x+1<6){	// up-right
			if(matrix[y-1][x+1]==0 || matrix[y-1][x+1]==2){
				availLattice.push([y-1,x+1]);
			}
		}
	}
	if(y+1<3){	//down
		if(x-1>2){	// down-left
			if(matrix[y+1][x-1]==0 || matrix[y+1][x-1]==2){
				availLattice.push([y+1,x-1]);
			}
		}
		if(x+1<6){	// down-left
			if(matrix[y+1][x+1]==0 || matrix[y+1][x+1]==2){
				availLattice.push([y+1,x+1]);
			}
		}
	}
	return availLattice;
}

function shuaiAction(x,y,matrix){
	var availLattice = [[y,x]];
	if(y-1>6){	// up
		if(matrix[y-1][x]==0 || matrix[y-1][x]==2){
			availLattice.push([y-1,x]);
		}
	}

	if(y+1<10){	// down
		if(matrix[y+1][x]==0 || matrix[y+1][x]==2){
			availLattice.push([y+1,x]);
		}
	}
	
	if(x-1>2){	// left
		if(matrix[y][x-1]==0 || matrix[y][x-1]==2){
			availLattice.push([y,x-1]);
		}
	}

	if(x+1<6){	// right
		if(matrix[y][x+1]==0 || matrix[y][x+1]==2){
			availLattice.push([y,x+1]);
		}
	}
	
	return availLattice;
}

function shuaiUpAction(x,y,matrix){
	var availLattice = [[y,x]];
	if(y>0){	// up
		if(matrix[y-1][x]==0 || matrix[y-1][x]==2){
			availLattice.push([y-1,x]);
		}
	}

	if(y+1<3){	// down
		if(matrix[y+1][x]==0 || matrix[y+1][x]==2){
			availLattice.push([y+1,x]);
		}
	}
	
	if(x-1>2){	// left
		if(matrix[y][x-1]==0 || matrix[y][x-1]==2){
			availLattice.push([y,x-1]);
		}
	}

	if(x+1<6){	// right
		if(matrix[y][x+1]==0 || matrix[y][x+1]==2){
			availLattice.push([y,x+1]);
		}
	}
	
	return availLattice;
}

function paoAction(x,y,matrix){
	var i, j;
	var availLattice = [[y,x]];

	for(i=x-1;i>-1;i--){	// left
		if(matrix[y][i] == 0){
			availLattice.push([y, i]); 
		}else{
			for(j=i-1; j>-1; j--){
				if(matrix[y][j] == 2){
					availLattice.push([y, j]); 
					break;
				}
			}
			break;
		}
	}
	for(i=x+1;i<9;i++){	// right
		if(matrix[y][i] == 0){
			availLattice.push([y, i]); 
		}else{
			for(j=i+1; j<9; j++){
				if(matrix[y][j] == 2){
					availLattice.push([y, j]); 
					break;
				}
			}
			break;
		}
	}
	for(j=y-1;j>-1;j--){	// up
		if(matrix[j][x] == 0){
			availLattice.push([j, x]); 
		}else{
			for(i=j-1; i>-1; i--){
				if(matrix[i][x] == 2){
					availLattice.push([i, x]); 
					break;
				}
			}
			break;
		}
	}
	for(j=y+1;j<10;j++){	// down
		if(matrix[j][x] == 0){
			availLattice.push([j, x]); 
		}else{
			for(i=j+1; i<10; i++){
				if(matrix[i][x] == 2){
					availLattice.push([i, x]); 
					break;
				}
			}
			break;
		}
	}

	return availLattice;
}

function bingAction(x,y,matrix){
	var availLattice = [[y,x]];

	if(matrix[y-1][x]==0 || matrix[y-1][x]==2){	// up
			availLattice.push([y-1,x]);
	}

	if(y<5){
		if(x>0){	//left
			if(matrix[y][x-1]==0 || matrix[y][x-1]==2){
				availLattice.push([y,x-1]);
			}
		}
		if(x<8){	//right
			if(matrix[y][x+1]==0 || matrix[y][x+1]==2){
				availLattice.push([y,x+1]);
			}
		}
	}

	return availLattice;
}

function bingUpAction(x,y,matrix){
	var availLattice = [[y,x]];

	if(matrix[y+1][x]==0 || matrix[y+1][x]==2){	// down
			availLattice.push([y+1,x]);
	}

	if(y>4){
		if(x>0){	//left
			if(matrix[y][x-1]==0 || matrix[y][x-1]==2){
				availLattice.push([y,x-1]);
			}
		}
		if(x<8){	//right
			if(matrix[y][x+1]==0 || matrix[y][x+1]==2){
				availLattice.push([y,x+1]);
			}
		}
	}

	return availLattice;
}