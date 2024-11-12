gdjs.creditsCode = {};
gdjs.creditsCode.localVariables = [];
gdjs.creditsCode.GDtyObjects1= [];
gdjs.creditsCode.GDtyObjects2= [];
gdjs.creditsCode.GDCREDUTSObjects1= [];
gdjs.creditsCode.GDCREDUTSObjects2= [];
gdjs.creditsCode.GDcredits2Objects1= [];
gdjs.creditsCode.GDcredits2Objects2= [];
gdjs.creditsCode.GDcontactusObjects1= [];
gdjs.creditsCode.GDcontactusObjects2= [];
gdjs.creditsCode.GDcontactus2Objects1= [];
gdjs.creditsCode.GDcontactus2Objects2= [];
gdjs.creditsCode.GDPlayerObjects1= [];
gdjs.creditsCode.GDPlayerObjects2= [];
gdjs.creditsCode.GDLeftRightCollisionObjects1= [];
gdjs.creditsCode.GDLeftRightCollisionObjects2= [];
gdjs.creditsCode.GDCoverObjects1= [];
gdjs.creditsCode.GDCoverObjects2= [];
gdjs.creditsCode.GDLeaveColObjects1= [];
gdjs.creditsCode.GDLeaveColObjects2= [];
gdjs.creditsCode.GDplatform1Objects1= [];
gdjs.creditsCode.GDplatform1Objects2= [];
gdjs.creditsCode.GDDieObjects1= [];
gdjs.creditsCode.GDDieObjects2= [];
gdjs.creditsCode.GDCoverWhiteObjects1= [];
gdjs.creditsCode.GDCoverWhiteObjects2= [];
gdjs.creditsCode.GDSnowObjects1= [];
gdjs.creditsCode.GDSnowObjects2= [];
gdjs.creditsCode.GDTextObjects1= [];
gdjs.creditsCode.GDTextObjects2= [];
gdjs.creditsCode.GDplatform2Objects1= [];
gdjs.creditsCode.GDplatform2Objects2= [];
gdjs.creditsCode.GDText2Objects1= [];
gdjs.creditsCode.GDText2Objects2= [];
gdjs.creditsCode.GDcenterObjects1= [];
gdjs.creditsCode.GDcenterObjects2= [];
gdjs.creditsCode.GDtextBoxObjects1= [];
gdjs.creditsCode.GDtextBoxObjects2= [];
gdjs.creditsCode.GDarrowObjects1= [];
gdjs.creditsCode.GDarrowObjects2= [];


gdjs.creditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CREDUTS"), gdjs.creditsCode.GDCREDUTSObjects1);
gdjs.copyArray(runtimeScene.getObjects("contactus"), gdjs.creditsCode.GDcontactusObjects1);
gdjs.copyArray(runtimeScene.getObjects("contactus2"), gdjs.creditsCode.GDcontactus2Objects1);
gdjs.copyArray(runtimeScene.getObjects("credits2"), gdjs.creditsCode.GDcredits2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ty"), gdjs.creditsCode.GDtyObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Undertale OST_ 006 - Uwa!! So Temperate.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.creditsCode.GDcontactusObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcontactusObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.creditsCode.GDcredits2Objects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcredits2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.creditsCode.GDCREDUTSObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDCREDUTSObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtyObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDtyObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.creditsCode.GDcontactus2Objects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcontactus2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.creditsCode.GDcontactusObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcontactusObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.creditsCode.GDcredits2Objects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcredits2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.creditsCode.GDCREDUTSObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDCREDUTSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.creditsCode.GDtyObjects1.length ;i < len;++i) {
    gdjs.creditsCode.GDtyObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.creditsCode.GDcontactus2Objects1.length ;i < len;++i) {
    gdjs.creditsCode.GDcontactus2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}}

}


};

gdjs.creditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditsCode.GDtyObjects1.length = 0;
gdjs.creditsCode.GDtyObjects2.length = 0;
gdjs.creditsCode.GDCREDUTSObjects1.length = 0;
gdjs.creditsCode.GDCREDUTSObjects2.length = 0;
gdjs.creditsCode.GDcredits2Objects1.length = 0;
gdjs.creditsCode.GDcredits2Objects2.length = 0;
gdjs.creditsCode.GDcontactusObjects1.length = 0;
gdjs.creditsCode.GDcontactusObjects2.length = 0;
gdjs.creditsCode.GDcontactus2Objects1.length = 0;
gdjs.creditsCode.GDcontactus2Objects2.length = 0;
gdjs.creditsCode.GDPlayerObjects1.length = 0;
gdjs.creditsCode.GDPlayerObjects2.length = 0;
gdjs.creditsCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.creditsCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.creditsCode.GDCoverObjects1.length = 0;
gdjs.creditsCode.GDCoverObjects2.length = 0;
gdjs.creditsCode.GDLeaveColObjects1.length = 0;
gdjs.creditsCode.GDLeaveColObjects2.length = 0;
gdjs.creditsCode.GDplatform1Objects1.length = 0;
gdjs.creditsCode.GDplatform1Objects2.length = 0;
gdjs.creditsCode.GDDieObjects1.length = 0;
gdjs.creditsCode.GDDieObjects2.length = 0;
gdjs.creditsCode.GDCoverWhiteObjects1.length = 0;
gdjs.creditsCode.GDCoverWhiteObjects2.length = 0;
gdjs.creditsCode.GDSnowObjects1.length = 0;
gdjs.creditsCode.GDSnowObjects2.length = 0;
gdjs.creditsCode.GDTextObjects1.length = 0;
gdjs.creditsCode.GDTextObjects2.length = 0;
gdjs.creditsCode.GDplatform2Objects1.length = 0;
gdjs.creditsCode.GDplatform2Objects2.length = 0;
gdjs.creditsCode.GDText2Objects1.length = 0;
gdjs.creditsCode.GDText2Objects2.length = 0;
gdjs.creditsCode.GDcenterObjects1.length = 0;
gdjs.creditsCode.GDcenterObjects2.length = 0;
gdjs.creditsCode.GDtextBoxObjects1.length = 0;
gdjs.creditsCode.GDtextBoxObjects2.length = 0;
gdjs.creditsCode.GDarrowObjects1.length = 0;
gdjs.creditsCode.GDarrowObjects2.length = 0;

gdjs.creditsCode.eventsList0(runtimeScene);

return;

}

gdjs['creditsCode'] = gdjs.creditsCode;
