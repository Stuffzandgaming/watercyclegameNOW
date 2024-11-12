gdjs.titleScreenCode = {};
gdjs.titleScreenCode.localVariables = [];
gdjs.titleScreenCode.GDBGObjects1= [];
gdjs.titleScreenCode.GDBGObjects2= [];
gdjs.titleScreenCode.GDRainObjects1= [];
gdjs.titleScreenCode.GDRainObjects2= [];
gdjs.titleScreenCode.GDSpinObjects1= [];
gdjs.titleScreenCode.GDSpinObjects2= [];
gdjs.titleScreenCode.GDWaterCycleObjects1= [];
gdjs.titleScreenCode.GDWaterCycleObjects2= [];
gdjs.titleScreenCode.GDanyKeyObjects1= [];
gdjs.titleScreenCode.GDanyKeyObjects2= [];
gdjs.titleScreenCode.GDPlayerObjects1= [];
gdjs.titleScreenCode.GDPlayerObjects2= [];
gdjs.titleScreenCode.GDLeftRightCollisionObjects1= [];
gdjs.titleScreenCode.GDLeftRightCollisionObjects2= [];
gdjs.titleScreenCode.GDCoverObjects1= [];
gdjs.titleScreenCode.GDCoverObjects2= [];
gdjs.titleScreenCode.GDLeaveColObjects1= [];
gdjs.titleScreenCode.GDLeaveColObjects2= [];
gdjs.titleScreenCode.GDplatform1Objects1= [];
gdjs.titleScreenCode.GDplatform1Objects2= [];
gdjs.titleScreenCode.GDDieObjects1= [];
gdjs.titleScreenCode.GDDieObjects2= [];
gdjs.titleScreenCode.GDCoverWhiteObjects1= [];
gdjs.titleScreenCode.GDCoverWhiteObjects2= [];
gdjs.titleScreenCode.GDSnowObjects1= [];
gdjs.titleScreenCode.GDSnowObjects2= [];
gdjs.titleScreenCode.GDTextObjects1= [];
gdjs.titleScreenCode.GDTextObjects2= [];
gdjs.titleScreenCode.GDplatform2Objects1= [];
gdjs.titleScreenCode.GDplatform2Objects2= [];
gdjs.titleScreenCode.GDText2Objects1= [];
gdjs.titleScreenCode.GDText2Objects2= [];
gdjs.titleScreenCode.GDcenterObjects1= [];
gdjs.titleScreenCode.GDcenterObjects2= [];
gdjs.titleScreenCode.GDtextBoxObjects1= [];
gdjs.titleScreenCode.GDtextBoxObjects2= [];
gdjs.titleScreenCode.GDarrowObjects1= [];
gdjs.titleScreenCode.GDarrowObjects2= [];


gdjs.titleScreenCode.asyncCallback18205852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.titleScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.titleScreenCode.GDPlayerObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("anyKey"), gdjs.titleScreenCode.GDanyKeyObjects2);

{for(var i = 0, len = gdjs.titleScreenCode.GDanyKeyObjects2.length ;i < len;++i) {
    gdjs.titleScreenCode.GDanyKeyObjects2[i].getBehavior("FlashOpacity").Flash("Tween", 0, 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.titleScreenCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.titleScreenCode.GDPlayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}gdjs.titleScreenCode.localVariables.length = 0;
}
gdjs.titleScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.titleScreenCode.localVariables);
for (const obj of gdjs.titleScreenCode.GDanyKeyObjects1) asyncObjectsList.addObject("anyKey", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.titleScreenCode.asyncCallback18205852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.titleScreenCode.asyncCallback18207212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.titleScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tutorialRoom");
}gdjs.titleScreenCode.localVariables.length = 0;
}
gdjs.titleScreenCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.titleScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.titleScreenCode.asyncCallback18207212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.titleScreenCode.asyncCallback18212164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.titleScreenCode.localVariables);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "sex", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.titleScreenCode.localVariables.length = 0;
}
gdjs.titleScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.titleScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.titleScreenCode.asyncCallback18212164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.titleScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.titleScreenCode.GDCoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spin"), gdjs.titleScreenCode.GDSpinObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterCycle"), gdjs.titleScreenCode.GDWaterCycleObjects1);
gdjs.copyArray(runtimeScene.getObjects("anyKey"), gdjs.titleScreenCode.GDanyKeyObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "soft-rain-ambient-111154 (1).mp3", true, 100, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "undertale_063. It's Raining Somewhere Else.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.titleScreenCode.GDSpinObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDSpinObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.titleScreenCode.GDWaterCycleObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDWaterCycleObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.titleScreenCode.GDanyKeyObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDanyKeyObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.titleScreenCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDCoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.titleScreenCode.GDSpinObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDSpinObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.titleScreenCode.GDWaterCycleObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDWaterCycleObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade", 255, "linear", 1000, false);
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{ //Subevents
gdjs.titleScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.titleScreenCode.GDCoverObjects1);
{for(var i = 0, len = gdjs.titleScreenCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.titleScreenCode.GDCoverObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade", 255, "linear", 1000, false);
}
}
{ //Subevents
gdjs.titleScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "level3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "debugRoom");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}
{ //Subevents
gdjs.titleScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.titleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleScreenCode.GDBGObjects1.length = 0;
gdjs.titleScreenCode.GDBGObjects2.length = 0;
gdjs.titleScreenCode.GDRainObjects1.length = 0;
gdjs.titleScreenCode.GDRainObjects2.length = 0;
gdjs.titleScreenCode.GDSpinObjects1.length = 0;
gdjs.titleScreenCode.GDSpinObjects2.length = 0;
gdjs.titleScreenCode.GDWaterCycleObjects1.length = 0;
gdjs.titleScreenCode.GDWaterCycleObjects2.length = 0;
gdjs.titleScreenCode.GDanyKeyObjects1.length = 0;
gdjs.titleScreenCode.GDanyKeyObjects2.length = 0;
gdjs.titleScreenCode.GDPlayerObjects1.length = 0;
gdjs.titleScreenCode.GDPlayerObjects2.length = 0;
gdjs.titleScreenCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.titleScreenCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.titleScreenCode.GDCoverObjects1.length = 0;
gdjs.titleScreenCode.GDCoverObjects2.length = 0;
gdjs.titleScreenCode.GDLeaveColObjects1.length = 0;
gdjs.titleScreenCode.GDLeaveColObjects2.length = 0;
gdjs.titleScreenCode.GDplatform1Objects1.length = 0;
gdjs.titleScreenCode.GDplatform1Objects2.length = 0;
gdjs.titleScreenCode.GDDieObjects1.length = 0;
gdjs.titleScreenCode.GDDieObjects2.length = 0;
gdjs.titleScreenCode.GDCoverWhiteObjects1.length = 0;
gdjs.titleScreenCode.GDCoverWhiteObjects2.length = 0;
gdjs.titleScreenCode.GDSnowObjects1.length = 0;
gdjs.titleScreenCode.GDSnowObjects2.length = 0;
gdjs.titleScreenCode.GDTextObjects1.length = 0;
gdjs.titleScreenCode.GDTextObjects2.length = 0;
gdjs.titleScreenCode.GDplatform2Objects1.length = 0;
gdjs.titleScreenCode.GDplatform2Objects2.length = 0;
gdjs.titleScreenCode.GDText2Objects1.length = 0;
gdjs.titleScreenCode.GDText2Objects2.length = 0;
gdjs.titleScreenCode.GDcenterObjects1.length = 0;
gdjs.titleScreenCode.GDcenterObjects2.length = 0;
gdjs.titleScreenCode.GDtextBoxObjects1.length = 0;
gdjs.titleScreenCode.GDtextBoxObjects2.length = 0;
gdjs.titleScreenCode.GDarrowObjects1.length = 0;
gdjs.titleScreenCode.GDarrowObjects2.length = 0;

gdjs.titleScreenCode.eventsList3(runtimeScene);

return;

}

gdjs['titleScreenCode'] = gdjs.titleScreenCode;
