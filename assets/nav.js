var isOpen=false;function moveCtxMenu(){var pos=$("a#more").position();$(".logged-in-ctx").css("top",pos.top+25);$(".logged-in-ctx").css("left",pos.left-170);}
function toggleNavOpts(){moveCtxMenu();if(isOpen){$(".logged-in-ctx").css("display","none");$("a#more .fas").css("transform","rotate(0deg)");}else{$(".logged-in-ctx").css("display","block");$("a#more .fas").css("transform","rotate(180deg)");}
isOpen=!isOpen;}
function blockerDetected(){const innerHTML=`
        <div id="blocked">
            <u>We understand that ads are annoying.</u>
            They're our primary revenue source that allows TwitchBot to stay free-to-use.
            We don't publish attention-seeking, irrelevant ads that get in your face.
            Instead, we choose to use ethical Carbon ads.
            Please consider turning off your ad blocker and allow us to maintain a sustainable service.
        </div>
    `;var parent=$("#_carbonads_js").parent();if(parent.prop("tagName")=="ASIDE"){parent.prepend(innerHTML);}else{parent.append(innerHTML);}}
$(window).resize(moveCtxMenu);$(document).ready(moveCtxMenu);