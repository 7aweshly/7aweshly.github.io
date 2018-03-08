var $ = jQuery;


// Count Down Timer
var starting = (Math.round((new Date()).getTime() / 1000)).toString();

$('.countdown').final_countdown({
    start : starting, //Here use Milisecond. To convert your time you can go to this(https://currentmillis.com/) website. 
    end   : 1525190400,
    now : starting,
seconds: {
borderColor: 'RGB(255,192,0)',
borderWidth: '4'
},
minutes: {
    borderColor: 'RGB(255,192,0)',
    borderWidth: '3'
},
hours: {
    borderColor: 'RGB(255,192,0)',
    borderWidth: '3'
},
days: {
    borderColor: 'RGB(255,192,0)',
    borderWidth: '3'
}}, function() {
});

 

