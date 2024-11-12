gdjs.cloudCutsceneCode = {};
gdjs.cloudCutsceneCode.localVariables = [];
gdjs.cloudCutsceneCode.GDCloudObjects1= [];
gdjs.cloudCutsceneCode.GDCloudObjects2= [];
gdjs.cloudCutsceneCode.GDCloudObjects3= [];
gdjs.cloudCutsceneCode.GDcloudBGObjects1= [];
gdjs.cloudCutsceneCode.GDcloudBGObjects2= [];
gdjs.cloudCutsceneCode.GDcloudBGObjects3= [];
gdjs.cloudCutsceneCode.GDCloud2Objects1= [];
gdjs.cloudCutsceneCode.GDCloud2Objects2= [];
gdjs.cloudCutsceneCode.GDCloud2Objects3= [];
gdjs.cloudCutsceneCode.GDCityBGObjects1= [];
gdjs.cloudCutsceneCode.GDCityBGObjects2= [];
gdjs.cloudCutsceneCode.GDCityBGObjects3= [];
gdjs.cloudCutsceneCode.GDLabObjects1= [];
gdjs.cloudCutsceneCode.GDLabObjects2= [];
gdjs.cloudCutsceneCode.GDLabObjects3= [];
gdjs.cloudCutsceneCode.GDPlayerObjects1= [];
gdjs.cloudCutsceneCode.GDPlayerObjects2= [];
gdjs.cloudCutsceneCode.GDPlayerObjects3= [];
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects1= [];
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects2= [];
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects3= [];
gdjs.cloudCutsceneCode.GDCoverObjects1= [];
gdjs.cloudCutsceneCode.GDCoverObjects2= [];
gdjs.cloudCutsceneCode.GDCoverObjects3= [];
gdjs.cloudCutsceneCode.GDLeaveColObjects1= [];
gdjs.cloudCutsceneCode.GDLeaveColObjects2= [];
gdjs.cloudCutsceneCode.GDLeaveColObjects3= [];
gdjs.cloudCutsceneCode.GDplatform1Objects1= [];
gdjs.cloudCutsceneCode.GDplatform1Objects2= [];
gdjs.cloudCutsceneCode.GDplatform1Objects3= [];
gdjs.cloudCutsceneCode.GDDieObjects1= [];
gdjs.cloudCutsceneCode.GDDieObjects2= [];
gdjs.cloudCutsceneCode.GDDieObjects3= [];
gdjs.cloudCutsceneCode.GDCoverWhiteObjects1= [];
gdjs.cloudCutsceneCode.GDCoverWhiteObjects2= [];
gdjs.cloudCutsceneCode.GDCoverWhiteObjects3= [];
gdjs.cloudCutsceneCode.GDSnowObjects1= [];
gdjs.cloudCutsceneCode.GDSnowObjects2= [];
gdjs.cloudCutsceneCode.GDSnowObjects3= [];
gdjs.cloudCutsceneCode.GDTextObjects1= [];
gdjs.cloudCutsceneCode.GDTextObjects2= [];
gdjs.cloudCutsceneCode.GDTextObjects3= [];
gdjs.cloudCutsceneCode.GDplatform2Objects1= [];
gdjs.cloudCutsceneCode.GDplatform2Objects2= [];
gdjs.cloudCutsceneCode.GDplatform2Objects3= [];
gdjs.cloudCutsceneCode.GDText2Objects1= [];
gdjs.cloudCutsceneCode.GDText2Objects2= [];
gdjs.cloudCutsceneCode.GDText2Objects3= [];
gdjs.cloudCutsceneCode.GDcenterObjects1= [];
gdjs.cloudCutsceneCode.GDcenterObjects2= [];
gdjs.cloudCutsceneCode.GDcenterObjects3= [];
gdjs.cloudCutsceneCode.GDtextBoxObjects1= [];
gdjs.cloudCutsceneCode.GDtextBoxObjects2= [];
gdjs.cloudCutsceneCode.GDtextBoxObjects3= [];
gdjs.cloudCutsceneCode.GDarrowObjects1= [];
gdjs.cloudCutsceneCode.GDarrowObjects2= [];
gdjs.cloudCutsceneCode.GDarrowObjects3= [];


gdjs.cloudCutsceneCode.asyncCallback18138388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cloudCutsceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "outSideLab", false);
}gdjs.cloudCutsceneCode.localVariables.length = 0;
}
gdjs.cloudCutsceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.cloudCutsceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.cloudCutsceneCode.asyncCallback18138388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.cloudCutsceneCode.asyncCallback18135356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cloudCutsceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cover"), gdjs.cloudCutsceneCode.GDCoverObjects2);

{for(var i = 0, len = gdjs.cloudCutsceneCode.GDCoverObjects2.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDCoverObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}
{ //Subevents
gdjs.cloudCutsceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.cloudCutsceneCode.localVariables.length = 0;
}
gdjs.cloudCutsceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cloudCutsceneCode.localVariables);
for (const obj of gdjs.cloudCutsceneCode.GDCoverObjects1) asyncObjectsList.addObject("Cover", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(15), (runtimeScene) => (gdjs.cloudCutsceneCode.asyncCallback18135356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.cloudCutsceneCode.mapOfGDgdjs_9546cloudCutsceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.cloudCutsceneCode.GDPlayerObjects1});
gdjs.cloudCutsceneCode.mapOfGDgdjs_9546cloudCutsceneCode_9546GDLabObjects1Objects = Hashtable.newFrom({"Lab": gdjs.cloudCutsceneCode.GDLabObjects1});
gdjs.cloudCutsceneCode.asyncCallback18133172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.cloudCutsceneCode.localVariables);
gdjs.cloudCutsceneCode.localVariables.length = 0;
}
gdjs.cloudCutsceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.cloudCutsceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.cloudCutsceneCode.asyncCallback18133172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.cloudCutsceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.cloudCutsceneCode.GDCloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.cloudCutsceneCode.GDCoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.cloudCutsceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.cloudCutsceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleRight");
}
}{for(var i = 0, len = gdjs.cloudCutsceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.cloudCutsceneCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDCoverObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.cloudCutsceneCode.GDCloudObjects1.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDCloudObjects1[i].addForce(400, 0, 1);
}
}
{ //Subevents
gdjs.cloudCutsceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.cloudCutsceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cloudCutsceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.cloudCutsceneCode.GDPlayerObjects1[i].getX() > 603 ) {
        isConditionTrue_0 = true;
        gdjs.cloudCutsceneCode.GDPlayerObjects1[k] = gdjs.cloudCutsceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.cloudCutsceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.cloudCutsceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.cloudCutsceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetFollowOnX(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.cloudCutsceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.cloudCutsceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.cloudCutsceneCode.GDPlayerObjects1[i].getX() > 5250 ) {
        isConditionTrue_0 = true;
        gdjs.cloudCutsceneCode.GDPlayerObjects1[k] = gdjs.cloudCutsceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.cloudCutsceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.cloudCutsceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.cloudCutsceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.cloudCutsceneCode.GDPlayerObjects1[i].getBehavior("SmoothCamera").SetFollowOnX(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lab"), gdjs.cloudCutsceneCode.GDLabObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.cloudCutsceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.cloudCutsceneCode.mapOfGDgdjs_9546cloudCutsceneCode_9546GDPlayerObjects1Objects, gdjs.cloudCutsceneCode.mapOfGDgdjs_9546cloudCutsceneCode_9546GDLabObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.cloudCutsceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.cloudCutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cloudCutsceneCode.GDCloudObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCloudObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCloudObjects3.length = 0;
gdjs.cloudCutsceneCode.GDcloudBGObjects1.length = 0;
gdjs.cloudCutsceneCode.GDcloudBGObjects2.length = 0;
gdjs.cloudCutsceneCode.GDcloudBGObjects3.length = 0;
gdjs.cloudCutsceneCode.GDCloud2Objects1.length = 0;
gdjs.cloudCutsceneCode.GDCloud2Objects2.length = 0;
gdjs.cloudCutsceneCode.GDCloud2Objects3.length = 0;
gdjs.cloudCutsceneCode.GDCityBGObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCityBGObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCityBGObjects3.length = 0;
gdjs.cloudCutsceneCode.GDLabObjects1.length = 0;
gdjs.cloudCutsceneCode.GDLabObjects2.length = 0;
gdjs.cloudCutsceneCode.GDLabObjects3.length = 0;
gdjs.cloudCutsceneCode.GDPlayerObjects1.length = 0;
gdjs.cloudCutsceneCode.GDPlayerObjects2.length = 0;
gdjs.cloudCutsceneCode.GDPlayerObjects3.length = 0;
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects3.length = 0;
gdjs.cloudCutsceneCode.GDCoverObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCoverObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCoverObjects3.length = 0;
gdjs.cloudCutsceneCode.GDLeaveColObjects1.length = 0;
gdjs.cloudCutsceneCode.GDLeaveColObjects2.length = 0;
gdjs.cloudCutsceneCode.GDLeaveColObjects3.length = 0;
gdjs.cloudCutsceneCode.GDplatform1Objects1.length = 0;
gdjs.cloudCutsceneCode.GDplatform1Objects2.length = 0;
gdjs.cloudCutsceneCode.GDplatform1Objects3.length = 0;
gdjs.cloudCutsceneCode.GDDieObjects1.length = 0;
gdjs.cloudCutsceneCode.GDDieObjects2.length = 0;
gdjs.cloudCutsceneCode.GDDieObjects3.length = 0;
gdjs.cloudCutsceneCode.GDCoverWhiteObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCoverWhiteObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCoverWhiteObjects3.length = 0;
gdjs.cloudCutsceneCode.GDSnowObjects1.length = 0;
gdjs.cloudCutsceneCode.GDSnowObjects2.length = 0;
gdjs.cloudCutsceneCode.GDSnowObjects3.length = 0;
gdjs.cloudCutsceneCode.GDTextObjects1.length = 0;
gdjs.cloudCutsceneCode.GDTextObjects2.length = 0;
gdjs.cloudCutsceneCode.GDTextObjects3.length = 0;
gdjs.cloudCutsceneCode.GDplatform2Objects1.length = 0;
gdjs.cloudCutsceneCode.GDplatform2Objects2.length = 0;
gdjs.cloudCutsceneCode.GDplatform2Objects3.length = 0;
gdjs.cloudCutsceneCode.GDText2Objects1.length = 0;
gdjs.cloudCutsceneCode.GDText2Objects2.length = 0;
gdjs.cloudCutsceneCode.GDText2Objects3.length = 0;
gdjs.cloudCutsceneCode.GDcenterObjects1.length = 0;
gdjs.cloudCutsceneCode.GDcenterObjects2.length = 0;
gdjs.cloudCutsceneCode.GDcenterObjects3.length = 0;
gdjs.cloudCutsceneCode.GDtextBoxObjects1.length = 0;
gdjs.cloudCutsceneCode.GDtextBoxObjects2.length = 0;
gdjs.cloudCutsceneCode.GDtextBoxObjects3.length = 0;
gdjs.cloudCutsceneCode.GDarrowObjects1.length = 0;
gdjs.cloudCutsceneCode.GDarrowObjects2.length = 0;
gdjs.cloudCutsceneCode.GDarrowObjects3.length = 0;

gdjs.cloudCutsceneCode.eventsList3(runtimeScene);
gdjs.cloudCutsceneCode.GDCloudObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCloudObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCloudObjects3.length = 0;
gdjs.cloudCutsceneCode.GDcloudBGObjects1.length = 0;
gdjs.cloudCutsceneCode.GDcloudBGObjects2.length = 0;
gdjs.cloudCutsceneCode.GDcloudBGObjects3.length = 0;
gdjs.cloudCutsceneCode.GDCloud2Objects1.length = 0;
gdjs.cloudCutsceneCode.GDCloud2Objects2.length = 0;
gdjs.cloudCutsceneCode.GDCloud2Objects3.length = 0;
gdjs.cloudCutsceneCode.GDCityBGObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCityBGObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCityBGObjects3.length = 0;
gdjs.cloudCutsceneCode.GDLabObjects1.length = 0;
gdjs.cloudCutsceneCode.GDLabObjects2.length = 0;
gdjs.cloudCutsceneCode.GDLabObjects3.length = 0;
gdjs.cloudCutsceneCode.GDPlayerObjects1.length = 0;
gdjs.cloudCutsceneCode.GDPlayerObjects2.length = 0;
gdjs.cloudCutsceneCode.GDPlayerObjects3.length = 0;
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.cloudCutsceneCode.GDLeftRightCollisionObjects3.length = 0;
gdjs.cloudCutsceneCode.GDCoverObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCoverObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCoverObjects3.length = 0;
gdjs.cloudCutsceneCode.GDLeaveColObjects1.length = 0;
gdjs.cloudCutsceneCode.GDLeaveColObjects2.length = 0;
gdjs.cloudCutsceneCode.GDLeaveColObjects3.length = 0;
gdjs.cloudCutsceneCode.GDplatform1Objects1.length = 0;
gdjs.cloudCutsceneCode.GDplatform1Objects2.length = 0;
gdjs.cloudCutsceneCode.GDplatform1Objects3.length = 0;
gdjs.cloudCutsceneCode.GDDieObjects1.length = 0;
gdjs.cloudCutsceneCode.GDDieObjects2.length = 0;
gdjs.cloudCutsceneCode.GDDieObjects3.length = 0;
gdjs.cloudCutsceneCode.GDCoverWhiteObjects1.length = 0;
gdjs.cloudCutsceneCode.GDCoverWhiteObjects2.length = 0;
gdjs.cloudCutsceneCode.GDCoverWhiteObjects3.length = 0;
gdjs.cloudCutsceneCode.GDSnowObjects1.length = 0;
gdjs.cloudCutsceneCode.GDSnowObjects2.length = 0;
gdjs.cloudCutsceneCode.GDSnowObjects3.length = 0;
gdjs.cloudCutsceneCode.GDTextObjects1.length = 0;
gdjs.cloudCutsceneCode.GDTextObjects2.length = 0;
gdjs.cloudCutsceneCode.GDTextObjects3.length = 0;
gdjs.cloudCutsceneCode.GDplatform2Objects1.length = 0;
gdjs.cloudCutsceneCode.GDplatform2Objects2.length = 0;
gdjs.cloudCutsceneCode.GDplatform2Objects3.length = 0;
gdjs.cloudCutsceneCode.GDText2Objects1.length = 0;
gdjs.cloudCutsceneCode.GDText2Objects2.length = 0;
gdjs.cloudCutsceneCode.GDText2Objects3.length = 0;
gdjs.cloudCutsceneCode.GDcenterObjects1.length = 0;
gdjs.cloudCutsceneCode.GDcenterObjects2.length = 0;
gdjs.cloudCutsceneCode.GDcenterObjects3.length = 0;
gdjs.cloudCutsceneCode.GDtextBoxObjects1.length = 0;
gdjs.cloudCutsceneCode.GDtextBoxObjects2.length = 0;
gdjs.cloudCutsceneCode.GDtextBoxObjects3.length = 0;
gdjs.cloudCutsceneCode.GDarrowObjects1.length = 0;
gdjs.cloudCutsceneCode.GDarrowObjects2.length = 0;
gdjs.cloudCutsceneCode.GDarrowObjects3.length = 0;


return;

}

gdjs['cloudCutsceneCode'] = gdjs.cloudCutsceneCode;
