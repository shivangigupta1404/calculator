			var y="";
			var flag=0;
			var z="";
			$(document).ready(function(){
			    $(".button").click(function(){
			    	var s=$("#screen").text();
			    	var x=$(this).attr("value");
			    	if(flag==1){
			    		switch(x){
			    			case "0":
			    			case "1":
			    			case "2":
			    			case "3":
			    			case "4":
			    			case "5":
			    			case "6":
			    			case "7":
			    			case "8":
			    			case "9":
			    			case ".":   z=z+x;
			    						s=$("#screen").text();
			    						$("#screen").text(s+z);
			    						break;
			    			default :   y=y+Math.sqrt(z);
			    						z="";
			    						s="";
			    						flag=0;
			    						break;
			    		}
			    	}
			    	if(flag==0){
				    	switch(x){
				    		case "sqrt" :   flag=1;
				    						z="";
				    						$("#screen").text("sqrt");
				    						break;
				    		case "CE" 	:   y="";
				    						$("#screen").text(0);
				    						break;
				    		case "OFF"	:   y="";
				    						$("#screen").text("");
				    						break;
				    		case "/"	:   y += s + "/";
				    						$("#screen").text("");
				    						break;
				    		case "*"	:   y += s + "*";
				    						$("#screen").text("");
				    						break;
				    		case "+"	:   y+= s + "+";
				    						$("#screen").text("");
				    						break;
				    		case "-"	:   y+= s + "-";
				    						$("#screen").text("");
				    						break;
				    		case "%"	:   y+= s + "%";
				    						$("#screen").text("");
				    						break;
				    		case "="	:   y+= s;
				    						var ans=eval(y);
				    						y="";
				    						$("#screen").text(ans);
				    						break;
				    		default		:   if(s=="0")
				    							$("#screen").text(x);
				    						else
				    							$("#screen").text(s+x);
				    					    break;
				    	}
				    }		        
			    });
			});