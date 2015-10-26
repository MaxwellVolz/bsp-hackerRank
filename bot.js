// saving the princess 'p' in the grid



var runIt= function(dimension,grid){
	var rows = grid.split("\n"),
		princessY,
		princessX
		marioXY = (dimension-1)/2;

	var mario = function(x,y){
		console.log("x: " + x + " y: " + y);
		var xDiff = marioXY - x,
			yDiff = marioXY - y;
			
		if(xDiff<0){
			while(xDiff<0){
				console.log("Right");
				++xDiff;
			}
		}
		if(xDiff>0){
			while(xDiff>0){
				console.log("Left");
				--xDiff;
			}
		}
		if(yDiff<0){
			while(yDiff<0){
				console.log("Down");
				++yDiff;
			}
		}
		if(yDiff>0){
			while(yDiff>0){
				console.log("Up");
				--yDiff;
			}
		}	
		
	}

//	console.log(rows);
	for(x=0;x<dimension;++x){
		//console.log(rows[x].indexOf('p'));
		princessX = rows[x].indexOf('p');
		if(princessX != -1){
//			console.log("x: " + princessX);
//			console.log("y: " + x);
			princessY = x;
			// has x and y of princess	
			mario(princessX,princessY);	
		}
		
	}
	
}

runIt(3,"---\n---\np--");

var grid1 = "-----\n-----\n-----\n-----\np----";
var grid2 = "p------\np------\n-------\n-------\n-------\n-------\n------p";
runIt(5,grid1);
runIt(7,grid2);
