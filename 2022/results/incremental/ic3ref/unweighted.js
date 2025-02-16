function unweighted_1() {
canvas = document.getElementById("unweighted_1");
ctx = canvas.getContext("2d");
// Suppress refresh on mouseover if this was the plot we just left
if ((gnuplot.active_plot == unweighted_1 && gnuplot.display_is_uptodate)) return;
else gnuplot.display_is_uptodate = true;
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != unweighted_1)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "unweighted_1";
  gnuplot.active_plot = unweighted_1;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', unweighted_1);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', unweighted_1, false);} 
  gnuplot.zoomed = false;
  gnuplot.zoom_axis_width = 0;
  gnuplot.zoom_in_progress = false;
  gnuplot.polar_mode = false;
  gnuplot.polar_theta0 = 0;
  gnuplot.polar_sense = 1;
  ctx.clearRect(0,0,800,600);
}
// Gnuplot version 5.2.8
// short forms of commands provided by gnuplot_common.js
function DT  (dt)  {gnuplot.dashtype(dt);};
function DS  (x,y) {gnuplot.dashstart(x,y);};
function DL  (x,y) {gnuplot.dashstep(x,y);};
function M   (x,y) {if (gnuplot.pattern.length > 0) DS(x,y); else gnuplot.M(x,y);};
function L   (x,y) {if (gnuplot.pattern.length > 0) DL(x,y); else gnuplot.L(x,y);};
function Dot (x,y) {gnuplot.Dot(x/10.,y/10.);};
function Pt  (N,x,y,w) {gnuplot.Pt(N,x/10.,y/10.,w/10.);};
function R   (x,y,w,h) {gnuplot.R(x,y,w,h);};
function T   (x,y,fontsize,justify,string) {gnuplot.T(x,y,fontsize,justify,string);};
function TR  (x,y,angle,fontsize,justify,string) {gnuplot.TR(x,y,angle,fontsize,justify,string);};
function bp  (x,y) {gnuplot.bp(x,y);};
function cfp () {gnuplot.cfp();};
function cfsp() {gnuplot.cfsp();};

gnuplot.hypertext_list = [];
gnuplot.on_hypertext = -1;
function Hypertext(x,y,w,text) {
    newtext = {x:x, y:y, w:w, text:text};
    gnuplot.hypertext_list.push(newtext);
}
gnuplot.dashlength = 400;
ctx.lineCap = "round"; ctx.lineJoin = "round";
CanvasTextFunctions.enable(ctx);
ctx.strokeStyle = " rgb(215,215,215)";
ctx.lineWidth = 2;

ctx.lineWidth = 1.6;
ctx.strokeStyle = " rgb(000,000,000)";
ctx.beginPath();
M(700,5680);
L(800,5680);
M(7759,5680);
L(7659,5680);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = " rgb(000,000,000)";
T(620,5730,10.0,"Right"," 0");
ctx.beginPath();
M(700,5531);
L(800,5531);
M(7759,5531);
L(7659,5531);
ctx.stroke();
ctx.closePath();
T(620,5581,10.0,"Right"," 200");
ctx.beginPath();
M(700,5381);
L(800,5381);
M(7759,5381);
L(7659,5381);
ctx.stroke();
ctx.closePath();
T(620,5431,10.0,"Right"," 400");
ctx.beginPath();
M(700,5232);
L(800,5232);
M(7759,5232);
L(7659,5232);
ctx.stroke();
ctx.closePath();
T(620,5282,10.0,"Right"," 600");
ctx.beginPath();
M(700,5082);
L(800,5082);
M(7759,5082);
L(7659,5082);
ctx.stroke();
ctx.closePath();
T(620,5132,10.0,"Right"," 800");
ctx.beginPath();
M(700,4933);
L(800,4933);
M(7759,4933);
L(7659,4933);
ctx.stroke();
ctx.closePath();
T(620,4983,10.0,"Right"," 1000");
ctx.beginPath();
M(700,4783);
L(800,4783);
M(7759,4783);
L(7659,4783);
ctx.stroke();
ctx.closePath();
T(620,4833,10.0,"Right"," 1200");
ctx.beginPath();
M(700,4634);
L(800,4634);
M(7759,4634);
L(7659,4634);
ctx.stroke();
ctx.closePath();
T(620,4684,10.0,"Right"," 1400");
ctx.beginPath();
M(700,4485);
L(800,4485);
M(7759,4485);
L(7659,4485);
ctx.stroke();
ctx.closePath();
T(620,4535,10.0,"Right"," 1600");
ctx.beginPath();
M(700,4335);
L(800,4335);
M(7759,4335);
L(7659,4335);
ctx.stroke();
ctx.closePath();
T(620,4385,10.0,"Right"," 1800");
ctx.beginPath();
M(700,4186);
L(800,4186);
M(7759,4186);
L(7659,4186);
ctx.stroke();
ctx.closePath();
T(620,4236,10.0,"Right"," 2000");
ctx.beginPath();
M(700,4036);
L(800,4036);
M(7759,4036);
L(7659,4036);
ctx.stroke();
ctx.closePath();
T(620,4086,10.0,"Right"," 2200");
ctx.beginPath();
M(700,3887);
L(800,3887);
M(7759,3887);
L(7659,3887);
ctx.stroke();
ctx.closePath();
T(620,3937,10.0,"Right"," 2400");
ctx.beginPath();
M(700,3738);
L(800,3738);
M(7759,3738);
L(7659,3738);
ctx.stroke();
ctx.closePath();
T(620,3788,10.0,"Right"," 2600");
ctx.beginPath();
M(700,3588);
L(800,3588);
M(7759,3588);
L(7659,3588);
ctx.stroke();
ctx.closePath();
T(620,3638,10.0,"Right"," 2800");
ctx.beginPath();
M(700,3439);
L(800,3439);
M(7759,3439);
L(7659,3439);
ctx.stroke();
ctx.closePath();
T(620,3489,10.0,"Right"," 3000");
ctx.beginPath();
M(700,3289);
L(800,3289);
M(7759,3289);
L(7659,3289);
ctx.stroke();
ctx.closePath();
T(620,3339,10.0,"Right"," 3200");
ctx.beginPath();
M(700,3140);
L(800,3140);
M(7759,3140);
L(7659,3140);
ctx.stroke();
ctx.closePath();
T(620,3190,10.0,"Right"," 3400");
ctx.beginPath();
M(700,2990);
L(800,2990);
M(7759,2990);
L(7659,2990);
ctx.stroke();
ctx.closePath();
T(620,3040,10.0,"Right"," 3600");
ctx.beginPath();
M(700,2841);
L(800,2841);
M(7759,2841);
L(7659,2841);
ctx.stroke();
ctx.closePath();
T(620,2891,10.0,"Right"," 3800");
ctx.beginPath();
M(700,2692);
L(800,2692);
M(7759,2692);
L(7659,2692);
ctx.stroke();
ctx.closePath();
T(620,2742,10.0,"Right"," 4000");
ctx.beginPath();
M(700,2542);
L(800,2542);
M(7759,2542);
L(7659,2542);
ctx.stroke();
ctx.closePath();
T(620,2592,10.0,"Right"," 4200");
ctx.beginPath();
M(700,2393);
L(800,2393);
M(7759,2393);
L(7659,2393);
ctx.stroke();
ctx.closePath();
T(620,2443,10.0,"Right"," 4400");
ctx.beginPath();
M(700,2243);
L(800,2243);
M(7759,2243);
L(7659,2243);
ctx.stroke();
ctx.closePath();
T(620,2293,10.0,"Right"," 4600");
ctx.beginPath();
M(700,2094);
L(800,2094);
M(7759,2094);
L(7659,2094);
ctx.stroke();
ctx.closePath();
T(620,2144,10.0,"Right"," 4800");
ctx.beginPath();
M(700,1945);
L(800,1945);
M(7759,1945);
L(7659,1945);
ctx.stroke();
ctx.closePath();
T(620,1995,10.0,"Right"," 5000");
ctx.beginPath();
M(700,1795);
L(800,1795);
M(7759,1795);
L(7659,1795);
ctx.stroke();
ctx.closePath();
T(620,1845,10.0,"Right"," 5200");
ctx.beginPath();
M(700,1646);
L(800,1646);
M(7759,1646);
L(7659,1646);
ctx.stroke();
ctx.closePath();
T(620,1696,10.0,"Right"," 5400");
ctx.beginPath();
M(700,1496);
L(800,1496);
M(7759,1496);
L(7659,1496);
ctx.stroke();
ctx.closePath();
T(620,1546,10.0,"Right"," 5600");
ctx.beginPath();
M(700,1347);
L(800,1347);
M(7759,1347);
L(7659,1347);
ctx.stroke();
ctx.closePath();
T(620,1397,10.0,"Right"," 5800");
ctx.beginPath();
M(700,1197);
L(800,1197);
M(7759,1197);
L(7659,1197);
ctx.stroke();
ctx.closePath();
T(620,1247,10.0,"Right"," 6000");
ctx.beginPath();
M(700,1048);
L(800,1048);
M(7759,1048);
L(7659,1048);
ctx.stroke();
ctx.closePath();
T(620,1098,10.0,"Right"," 6200");
ctx.beginPath();
M(700,899);
L(800,899);
M(7759,899);
L(7659,899);
ctx.stroke();
ctx.closePath();
T(620,949,10.0,"Right"," 6400");
ctx.beginPath();
M(700,749);
L(800,749);
M(7759,749);
L(7659,749);
ctx.stroke();
ctx.closePath();
T(620,799,10.0,"Right"," 6600");
ctx.beginPath();
M(700,600);
L(800,600);
M(7759,600);
L(7659,600);
ctx.stroke();
ctx.closePath();
T(620,650,10.0,"Right"," 6800");
ctx.beginPath();
M(700,450);
L(800,450);
M(7759,450);
L(7659,450);
ctx.stroke();
ctx.closePath();
T(620,500,10.0,"Right"," 7000");
ctx.beginPath();
M(700,301);
L(800,301);
M(7759,301);
L(7659,301);
ctx.stroke();
ctx.closePath();
T(620,351,10.0,"Right"," 7200");
ctx.beginPath();
M(700,5680);
L(700,5580);
M(700,301);
L(700,401);
ctx.stroke();
ctx.closePath();
T(700,5830,10.0,"Center"," 0");
ctx.beginPath();
M(1406,5680);
L(1406,5580);
M(1406,301);
L(1406,401);
ctx.stroke();
ctx.closePath();
T(1406,5830,10.0,"Center"," 5");
ctx.beginPath();
M(2112,5680);
L(2112,5580);
M(2112,301);
L(2112,401);
ctx.stroke();
ctx.closePath();
T(2112,5830,10.0,"Center"," 10");
ctx.beginPath();
M(2818,5680);
L(2818,5580);
M(2818,301);
L(2818,401);
ctx.stroke();
ctx.closePath();
T(2818,5830,10.0,"Center"," 15");
ctx.beginPath();
M(3524,5680);
L(3524,5580);
M(3524,301);
L(3524,401);
ctx.stroke();
ctx.closePath();
T(3524,5830,10.0,"Center"," 20");
ctx.beginPath();
M(4230,5680);
L(4230,5580);
M(4230,301);
L(4230,401);
ctx.stroke();
ctx.closePath();
T(4230,5830,10.0,"Center"," 25");
ctx.beginPath();
M(4935,5680);
L(4935,5580);
M(4935,301);
L(4935,401);
ctx.stroke();
ctx.closePath();
T(4935,5830,10.0,"Center"," 30");
ctx.beginPath();
M(5641,5680);
L(5641,5580);
M(5641,301);
L(5641,401);
ctx.stroke();
ctx.closePath();
T(5641,5830,10.0,"Center"," 35");
ctx.beginPath();
M(6347,5680);
L(6347,5580);
M(6347,301);
L(6347,401);
ctx.stroke();
ctx.closePath();
T(6347,5830,10.0,"Center"," 40");
ctx.beginPath();
M(7053,5680);
L(7053,5580);
M(7053,301);
L(7053,401);
ctx.stroke();
ctx.closePath();
T(7053,5830,10.0,"Center"," 45");
ctx.beginPath();
M(7759,5680);
L(7759,5580);
M(7759,301);
L(7759,401);
ctx.stroke();
ctx.closePath();
T(7759,5830,10.0,"Center"," 50");
ctx.beginPath();
M(700,301);
L(700,5680);
L(7759,5680);
L(7759,301);
L(700,301);
ctx.closePath();
ctx.stroke();
TR(110,3041,270,10.0,"Center","Time in seconds");
T(4229,5980,10.0,"Center","Number of instances");
T(4229,201,10.0,"Center","Incremental MaxSAT: Number x of instances solved in y seconds");
if (typeof(gnuplot.hide_unweighted_1_plot_1) == "undefined"|| !gnuplot.hide_unweighted_1_plot_1) {
ctx.strokeStyle = "rgba(148,000,211,1.00)";
ctx.fillStyle = "rgba(148,000,211,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(2268,570,14.0,"Right","EvalMaxSAT");
ctx.strokeStyle = "rgba(148,000,211,1.00)";
ctx.fillStyle = "rgba(148,000,211,1.00)";
ctx.beginPath();
M(2380,520);
L(2928,520);
M(841,5679);
L(982,5678);
L(1124,5678);
L(1265,5677);
L(1406,5677);
L(1547,5677);
L(1688,5676);
L(1829,5676);
L(1971,5676);
L(2112,5676);
L(2253,5673);
L(2394,5673);
L(2535,5669);
L(2677,5668);
L(2818,5668);
L(2959,5668);
L(3100,5666);
L(3241,5644);
L(3382,5643);
L(3524,5640);
L(3665,5632);
L(3806,5631);
L(3947,5620);
L(4088,5618);
L(4230,5615);
L(4371,5612);
L(4512,5585);
L(4653,5547);
L(4794,5481);
L(4935,5461);
L(5077,5407);
L(5218,5326);
L(5359,5258);
L(5500,5224);
L(5641,4988);
L(5782,4735);
L(5924,4535);
L(6065,4149);
L(6206,4142);
L(6347,3905);
L(6488,3399);
L(6630,2140);
L(6771,1253);
L(6912,872);
ctx.stroke();
ctx.closePath();
Pt(0,841,5679,60.0);
Pt(0,982,5678,60.0);
Pt(0,1124,5678,60.0);
Pt(0,1265,5677,60.0);
Pt(0,1406,5677,60.0);
Pt(0,1547,5677,60.0);
Pt(0,1688,5676,60.0);
Pt(0,1829,5676,60.0);
Pt(0,1971,5676,60.0);
Pt(0,2112,5676,60.0);
Pt(0,2253,5673,60.0);
Pt(0,2394,5673,60.0);
Pt(0,2535,5669,60.0);
Pt(0,2677,5668,60.0);
Pt(0,2818,5668,60.0);
Pt(0,2959,5668,60.0);
Pt(0,3100,5666,60.0);
Pt(0,3241,5644,60.0);
Pt(0,3382,5643,60.0);
Pt(0,3524,5640,60.0);
Pt(0,3665,5632,60.0);
Pt(0,3806,5631,60.0);
Pt(0,3947,5620,60.0);
Pt(0,4088,5618,60.0);
Pt(0,4230,5615,60.0);
Pt(0,4371,5612,60.0);
Pt(0,4512,5585,60.0);
Pt(0,4653,5547,60.0);
Pt(0,4794,5481,60.0);
Pt(0,4935,5461,60.0);
Pt(0,5077,5407,60.0);
Pt(0,5218,5326,60.0);
Pt(0,5359,5258,60.0);
Pt(0,5500,5224,60.0);
Pt(0,5641,4988,60.0);
Pt(0,5782,4735,60.0);
Pt(0,5924,4535,60.0);
Pt(0,6065,4149,60.0);
Pt(0,6206,4142,60.0);
Pt(0,6347,3905,60.0);
Pt(0,6488,3399,60.0);
Pt(0,6630,2140,60.0);
Pt(0,6771,1253,60.0);
Pt(0,6912,872,60.0);
Pt(0,2654,520,60.0);
} // End unweighted_1_plot_1 
if (typeof(gnuplot.hide_unweighted_1_plot_2) == "undefined"|| !gnuplot.hide_unweighted_1_plot_2) {
ctx.lineWidth = 1.6;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.strokeStyle = "rgba(000,158,115,1.00)";
ctx.fillStyle = "rgba(000,158,115,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(2268,710,14.0,"Right","UWrMaxSat");
ctx.strokeStyle = "rgba(000,158,115,1.00)";
ctx.fillStyle = "rgba(000,158,115,1.00)";
ctx.beginPath();
M(2380,660);
L(2928,660);
M(841,5678);
L(982,5677);
L(1124,5677);
L(1265,5676);
L(1406,5676);
L(1547,5676);
L(1688,5675);
L(1829,5675);
L(1971,5674);
L(2112,5673);
L(2253,5670);
L(2394,5669);
L(2535,5668);
L(2677,5667);
L(2818,5666);
L(2959,5666);
L(3100,5656);
L(3241,5641);
L(3382,5640);
L(3524,5633);
L(3665,5617);
L(3806,5599);
L(3947,5595);
L(4088,5592);
L(4230,5578);
L(4371,5389);
L(4512,5384);
L(4653,5179);
L(4794,5176);
L(4935,5092);
L(5077,4894);
L(5218,4707);
L(5359,4461);
L(5500,4404);
L(5641,2462);
L(5782,1698);
L(5924,940);
L(6065,743);
ctx.stroke();
ctx.closePath();
Pt(1,841,5678,60.0);
Pt(1,982,5677,60.0);
Pt(1,1124,5677,60.0);
Pt(1,1265,5676,60.0);
Pt(1,1406,5676,60.0);
Pt(1,1547,5676,60.0);
Pt(1,1688,5675,60.0);
Pt(1,1829,5675,60.0);
Pt(1,1971,5674,60.0);
Pt(1,2112,5673,60.0);
Pt(1,2253,5670,60.0);
Pt(1,2394,5669,60.0);
Pt(1,2535,5668,60.0);
Pt(1,2677,5667,60.0);
Pt(1,2818,5666,60.0);
Pt(1,2959,5666,60.0);
Pt(1,3100,5656,60.0);
Pt(1,3241,5641,60.0);
Pt(1,3382,5640,60.0);
Pt(1,3524,5633,60.0);
Pt(1,3665,5617,60.0);
Pt(1,3806,5599,60.0);
Pt(1,3947,5595,60.0);
Pt(1,4088,5592,60.0);
Pt(1,4230,5578,60.0);
Pt(1,4371,5389,60.0);
Pt(1,4512,5384,60.0);
Pt(1,4653,5179,60.0);
Pt(1,4794,5176,60.0);
Pt(1,4935,5092,60.0);
Pt(1,5077,4894,60.0);
Pt(1,5218,4707,60.0);
Pt(1,5359,4461,60.0);
Pt(1,5500,4404,60.0);
Pt(1,5641,2462,60.0);
Pt(1,5782,1698,60.0);
Pt(1,5924,940,60.0);
Pt(1,6065,743,60.0);
Pt(1,2654,660,60.0);
} // End unweighted_1_plot_2 
if (typeof(gnuplot.hide_unweighted_1_plot_3) == "undefined"|| !gnuplot.hide_unweighted_1_plot_3) {
ctx.lineWidth = 1.6;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.strokeStyle = "rgba(086,180,233,1.00)";
ctx.fillStyle = "rgba(086,180,233,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(2268,850,14.0,"Right","iMaxHS");
ctx.strokeStyle = "rgba(086,180,233,1.00)";
ctx.fillStyle = "rgba(086,180,233,1.00)";
ctx.beginPath();
M(2380,800);
L(2928,800);
M(841,5679);
L(982,5678);
L(1124,5678);
L(1265,5678);
L(1406,5678);
L(1547,5677);
L(1688,5677);
L(1829,5676);
L(1971,5676);
L(2112,5676);
L(2253,5671);
L(2394,5671);
L(2535,5670);
L(2677,5670);
L(2818,5669);
L(2959,5666);
L(3100,5663);
L(3241,5663);
L(3382,5646);
L(3524,5641);
L(3665,5639);
L(3806,5639);
L(3947,5627);
L(4088,5623);
L(4230,5616);
L(4371,5561);
L(4512,5502);
L(4653,5351);
L(4794,5320);
L(4935,5117);
L(5077,4833);
L(5218,4457);
L(5359,4191);
L(5500,3594);
L(5641,2977);
L(5782,880);
ctx.stroke();
ctx.closePath();
Pt(2,841,5679,60.0);
Pt(2,982,5678,60.0);
Pt(2,1124,5678,60.0);
Pt(2,1265,5678,60.0);
Pt(2,1406,5678,60.0);
Pt(2,1547,5677,60.0);
Pt(2,1688,5677,60.0);
Pt(2,1829,5676,60.0);
Pt(2,1971,5676,60.0);
Pt(2,2112,5676,60.0);
Pt(2,2253,5671,60.0);
Pt(2,2394,5671,60.0);
Pt(2,2535,5670,60.0);
Pt(2,2677,5670,60.0);
Pt(2,2818,5669,60.0);
Pt(2,2959,5666,60.0);
Pt(2,3100,5663,60.0);
Pt(2,3241,5663,60.0);
Pt(2,3382,5646,60.0);
Pt(2,3524,5641,60.0);
Pt(2,3665,5639,60.0);
Pt(2,3806,5639,60.0);
Pt(2,3947,5627,60.0);
Pt(2,4088,5623,60.0);
Pt(2,4230,5616,60.0);
Pt(2,4371,5561,60.0);
Pt(2,4512,5502,60.0);
Pt(2,4653,5351,60.0);
Pt(2,4794,5320,60.0);
Pt(2,4935,5117,60.0);
Pt(2,5077,4833,60.0);
Pt(2,5218,4457,60.0);
Pt(2,5359,4191,60.0);
Pt(2,5500,3594,60.0);
Pt(2,5641,2977,60.0);
Pt(2,5782,880,60.0);
Pt(2,2654,800,60.0);
} // End unweighted_1_plot_3 
if (typeof(gnuplot.hide_unweighted_1_plot_4) == "undefined"|| !gnuplot.hide_unweighted_1_plot_4) {
ctx.lineWidth = 1.6;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.strokeStyle = "rgba(230,159,000,1.00)";
ctx.fillStyle = "rgba(230,159,000,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(2268,990,14.0,"Right","UWrMaxSat+SCIP");
ctx.strokeStyle = "rgba(230,159,000,1.00)";
ctx.fillStyle = "rgba(230,159,000,1.00)";
ctx.beginPath();
M(2380,940);
L(2928,940);
M(841,5677);
L(982,5677);
L(1124,5676);
L(1265,5676);
L(1406,5675);
L(1547,5670);
L(1688,5668);
L(1829,5662);
L(1971,5653);
L(2112,5648);
L(2253,5633);
L(2394,5629);
L(2535,5593);
L(2677,5589);
L(2818,5572);
L(2959,5569);
L(3100,5526);
L(3241,5472);
L(3382,5460);
L(3524,5445);
L(3665,5345);
L(3806,5317);
L(3947,5236);
L(4088,5168);
L(4230,5159);
L(4371,5049);
L(4512,4887);
L(4653,4685);
L(4794,4642);
L(4935,4321);
L(5077,2559);
ctx.stroke();
ctx.closePath();
Pt(3,841,5677,60.0);
Pt(3,982,5677,60.0);
Pt(3,1124,5676,60.0);
Pt(3,1265,5676,60.0);
Pt(3,1406,5675,60.0);
Pt(3,1547,5670,60.0);
Pt(3,1688,5668,60.0);
Pt(3,1829,5662,60.0);
Pt(3,1971,5653,60.0);
Pt(3,2112,5648,60.0);
Pt(3,2253,5633,60.0);
Pt(3,2394,5629,60.0);
Pt(3,2535,5593,60.0);
Pt(3,2677,5589,60.0);
Pt(3,2818,5572,60.0);
Pt(3,2959,5569,60.0);
Pt(3,3100,5526,60.0);
Pt(3,3241,5472,60.0);
Pt(3,3382,5460,60.0);
Pt(3,3524,5445,60.0);
Pt(3,3665,5345,60.0);
Pt(3,3806,5317,60.0);
Pt(3,3947,5236,60.0);
Pt(3,4088,5168,60.0);
Pt(3,4230,5159,60.0);
Pt(3,4371,5049,60.0);
Pt(3,4512,4887,60.0);
Pt(3,4653,4685,60.0);
Pt(3,4794,4642,60.0);
Pt(3,4935,4321,60.0);
Pt(3,5077,2559,60.0);
Pt(3,2654,940,60.0);
} // End unweighted_1_plot_4 
ctx.lineWidth = 3.2;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.lineWidth = 1.6;
ctx.beginPath();
M(700,301);
L(700,5680);
L(7759,5680);
L(7759,301);
L(700,301);
ctx.closePath();
ctx.stroke();

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 800;
gnuplot.plot_term_ymax = 600;
gnuplot.plot_xmin = 70.0;
gnuplot.plot_xmax = 775.9;
gnuplot.plot_ybot = 568.0;
gnuplot.plot_ytop = 30.1;
gnuplot.plot_width = 705.9;
gnuplot.plot_height = 537.9;
gnuplot.plot_axis_xmin = 0;
gnuplot.plot_axis_xmax = 50;
gnuplot.plot_axis_ymin = 0;
gnuplot.plot_axis_ymax = 7200;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_timeaxis_x = "";
gnuplot.plot_timeaxis_y = "";
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
}
