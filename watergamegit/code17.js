gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects1= [];
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects2= [];
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects3= [];
gdjs.game_32overCode.GDBasicExplosionSmoothObjects1= [];
gdjs.game_32overCode.GDBasicExplosionSmoothObjects2= [];
gdjs.game_32overCode.GDBasicExplosionSmoothObjects3= [];
gdjs.game_32overCode.GDBasicExplosionEnergyObjects1= [];
gdjs.game_32overCode.GDBasicExplosionEnergyObjects2= [];
gdjs.game_32overCode.GDBasicExplosionEnergyObjects3= [];
gdjs.game_32overCode.GDLightningTextureObjects1= [];
gdjs.game_32overCode.GDLightningTextureObjects2= [];
gdjs.game_32overCode.GDLightningTextureObjects3= [];
gdjs.game_32overCode.GDPlayerObjects1= [];
gdjs.game_32overCode.GDPlayerObjects2= [];
gdjs.game_32overCode.GDPlayerObjects3= [];
gdjs.game_32overCode.GDLeftRightCollisionObjects1= [];
gdjs.game_32overCode.GDLeftRightCollisionObjects2= [];
gdjs.game_32overCode.GDLeftRightCollisionObjects3= [];
gdjs.game_32overCode.GDCoverObjects1= [];
gdjs.game_32overCode.GDCoverObjects2= [];
gdjs.game_32overCode.GDCoverObjects3= [];
gdjs.game_32overCode.GDLeaveColObjects1= [];
gdjs.game_32overCode.GDLeaveColObjects2= [];
gdjs.game_32overCode.GDLeaveColObjects3= [];
gdjs.game_32overCode.GDplatform1Objects1= [];
gdjs.game_32overCode.GDplatform1Objects2= [];
gdjs.game_32overCode.GDplatform1Objects3= [];
gdjs.game_32overCode.GDDieObjects1= [];
gdjs.game_32overCode.GDDieObjects2= [];
gdjs.game_32overCode.GDDieObjects3= [];
gdjs.game_32overCode.GDCoverWhiteObjects1= [];
gdjs.game_32overCode.GDCoverWhiteObjects2= [];
gdjs.game_32overCode.GDCoverWhiteObjects3= [];
gdjs.game_32overCode.GDSnowObjects1= [];
gdjs.game_32overCode.GDSnowObjects2= [];
gdjs.game_32overCode.GDSnowObjects3= [];
gdjs.game_32overCode.GDTextObjects1= [];
gdjs.game_32overCode.GDTextObjects2= [];
gdjs.game_32overCode.GDTextObjects3= [];
gdjs.game_32overCode.GDplatform2Objects1= [];
gdjs.game_32overCode.GDplatform2Objects2= [];
gdjs.game_32overCode.GDplatform2Objects3= [];
gdjs.game_32overCode.GDText2Objects1= [];
gdjs.game_32overCode.GDText2Objects2= [];
gdjs.game_32overCode.GDText2Objects3= [];
gdjs.game_32overCode.GDcenterObjects1= [];
gdjs.game_32overCode.GDcenterObjects2= [];
gdjs.game_32overCode.GDcenterObjects3= [];
gdjs.game_32overCode.GDtextBoxObjects1= [];
gdjs.game_32overCode.GDtextBoxObjects2= [];
gdjs.game_32overCode.GDtextBoxObjects3= [];
gdjs.game_32overCode.GDarrowObjects1= [];
gdjs.game_32overCode.GDarrowObjects2= [];
gdjs.game_32overCode.GDarrowObjects3= [];


gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.game_32overCode.GDPlayerObjects1});
gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDBasicExplosionEnergyObjects2Objects = Hashtable.newFrom({"BasicExplosionEnergy": gdjs.game_32overCode.GDBasicExplosionEnergyObjects2});
gdjs.game_32overCode.asyncCallback18738164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.game_32overCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "finalBoss");
}gdjs.game_32overCode.localVariables.length = 0;
}
gdjs.game_32overCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.game_32overCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.game_32overCode.asyncCallback18738164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.game_32overCode.asyncCallback18736364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.game_32overCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.game_32overCode.GDPlayerObjects2);

gdjs.game_32overCode.GDBasicExplosionEnergyObjects2.length = 0;

{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDBasicExplosionEnergyObjects2Objects, (( gdjs.game_32overCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.game_32overCode.GDPlayerObjects2[0].getPointX("")) + 48, (( gdjs.game_32overCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.game_32overCode.GDPlayerObjects2[0].getPointY("")) + 48, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Snowball-hit-sound-effect.mp3", false, 100, 1);
}
{ //Subevents
gdjs.game_32overCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.game_32overCode.localVariables.length = 0;
}
gdjs.game_32overCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.game_32overCode.localVariables);
for (const obj of gdjs.game_32overCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.game_32overCode.asyncCallback18736364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.game_32overCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.game_32overCode.GDPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDPlayerObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), "");
}{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects1[i].getBehavior("Resizable").setSize(96, 96);
}
}{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectPositionTween2("fade", 600, 352, "easeInOutQuad", 1, false);
}
}{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(0);
}
}{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.game_32overCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.game_32overCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.game_32overCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.game_32overCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.game_32overCode.GDBasicExplosionSmoothObjects3.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.game_32overCode.GDLightningTextureObjects1.length = 0;
gdjs.game_32overCode.GDLightningTextureObjects2.length = 0;
gdjs.game_32overCode.GDLightningTextureObjects3.length = 0;
gdjs.game_32overCode.GDPlayerObjects1.length = 0;
gdjs.game_32overCode.GDPlayerObjects2.length = 0;
gdjs.game_32overCode.GDPlayerObjects3.length = 0;
gdjs.game_32overCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.game_32overCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.game_32overCode.GDLeftRightCollisionObjects3.length = 0;
gdjs.game_32overCode.GDCoverObjects1.length = 0;
gdjs.game_32overCode.GDCoverObjects2.length = 0;
gdjs.game_32overCode.GDCoverObjects3.length = 0;
gdjs.game_32overCode.GDLeaveColObjects1.length = 0;
gdjs.game_32overCode.GDLeaveColObjects2.length = 0;
gdjs.game_32overCode.GDLeaveColObjects3.length = 0;
gdjs.game_32overCode.GDplatform1Objects1.length = 0;
gdjs.game_32overCode.GDplatform1Objects2.length = 0;
gdjs.game_32overCode.GDplatform1Objects3.length = 0;
gdjs.game_32overCode.GDDieObjects1.length = 0;
gdjs.game_32overCode.GDDieObjects2.length = 0;
gdjs.game_32overCode.GDDieObjects3.length = 0;
gdjs.game_32overCode.GDCoverWhiteObjects1.length = 0;
gdjs.game_32overCode.GDCoverWhiteObjects2.length = 0;
gdjs.game_32overCode.GDCoverWhiteObjects3.length = 0;
gdjs.game_32overCode.GDSnowObjects1.length = 0;
gdjs.game_32overCode.GDSnowObjects2.length = 0;
gdjs.game_32overCode.GDSnowObjects3.length = 0;
gdjs.game_32overCode.GDTextObjects1.length = 0;
gdjs.game_32overCode.GDTextObjects2.length = 0;
gdjs.game_32overCode.GDTextObjects3.length = 0;
gdjs.game_32overCode.GDplatform2Objects1.length = 0;
gdjs.game_32overCode.GDplatform2Objects2.length = 0;
gdjs.game_32overCode.GDplatform2Objects3.length = 0;
gdjs.game_32overCode.GDText2Objects1.length = 0;
gdjs.game_32overCode.GDText2Objects2.length = 0;
gdjs.game_32overCode.GDText2Objects3.length = 0;
gdjs.game_32overCode.GDcenterObjects1.length = 0;
gdjs.game_32overCode.GDcenterObjects2.length = 0;
gdjs.game_32overCode.GDcenterObjects3.length = 0;
gdjs.game_32overCode.GDtextBoxObjects1.length = 0;
gdjs.game_32overCode.GDtextBoxObjects2.length = 0;
gdjs.game_32overCode.GDtextBoxObjects3.length = 0;
gdjs.game_32overCode.GDarrowObjects1.length = 0;
gdjs.game_32overCode.GDarrowObjects2.length = 0;
gdjs.game_32overCode.GDarrowObjects3.length = 0;

gdjs.game_32overCode.eventsList2(runtimeScene);
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects1.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects2.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergySparksObjects3.length = 0;
gdjs.game_32overCode.GDBasicExplosionSmoothObjects1.length = 0;
gdjs.game_32overCode.GDBasicExplosionSmoothObjects2.length = 0;
gdjs.game_32overCode.GDBasicExplosionSmoothObjects3.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.game_32overCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.game_32overCode.GDLightningTextureObjects1.length = 0;
gdjs.game_32overCode.GDLightningTextureObjects2.length = 0;
gdjs.game_32overCode.GDLightningTextureObjects3.length = 0;
gdjs.game_32overCode.GDPlayerObjects1.length = 0;
gdjs.game_32overCode.GDPlayerObjects2.length = 0;
gdjs.game_32overCode.GDPlayerObjects3.length = 0;
gdjs.game_32overCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.game_32overCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.game_32overCode.GDLeftRightCollisionObjects3.length = 0;
gdjs.game_32overCode.GDCoverObjects1.length = 0;
gdjs.game_32overCode.GDCoverObjects2.length = 0;
gdjs.game_32overCode.GDCoverObjects3.length = 0;
gdjs.game_32overCode.GDLeaveColObjects1.length = 0;
gdjs.game_32overCode.GDLeaveColObjects2.length = 0;
gdjs.game_32overCode.GDLeaveColObjects3.length = 0;
gdjs.game_32overCode.GDplatform1Objects1.length = 0;
gdjs.game_32overCode.GDplatform1Objects2.length = 0;
gdjs.game_32overCode.GDplatform1Objects3.length = 0;
gdjs.game_32overCode.GDDieObjects1.length = 0;
gdjs.game_32overCode.GDDieObjects2.length = 0;
gdjs.game_32overCode.GDDieObjects3.length = 0;
gdjs.game_32overCode.GDCoverWhiteObjects1.length = 0;
gdjs.game_32overCode.GDCoverWhiteObjects2.length = 0;
gdjs.game_32overCode.GDCoverWhiteObjects3.length = 0;
gdjs.game_32overCode.GDSnowObjects1.length = 0;
gdjs.game_32overCode.GDSnowObjects2.length = 0;
gdjs.game_32overCode.GDSnowObjects3.length = 0;
gdjs.game_32overCode.GDTextObjects1.length = 0;
gdjs.game_32overCode.GDTextObjects2.length = 0;
gdjs.game_32overCode.GDTextObjects3.length = 0;
gdjs.game_32overCode.GDplatform2Objects1.length = 0;
gdjs.game_32overCode.GDplatform2Objects2.length = 0;
gdjs.game_32overCode.GDplatform2Objects3.length = 0;
gdjs.game_32overCode.GDText2Objects1.length = 0;
gdjs.game_32overCode.GDText2Objects2.length = 0;
gdjs.game_32overCode.GDText2Objects3.length = 0;
gdjs.game_32overCode.GDcenterObjects1.length = 0;
gdjs.game_32overCode.GDcenterObjects2.length = 0;
gdjs.game_32overCode.GDcenterObjects3.length = 0;
gdjs.game_32overCode.GDtextBoxObjects1.length = 0;
gdjs.game_32overCode.GDtextBoxObjects2.length = 0;
gdjs.game_32overCode.GDtextBoxObjects3.length = 0;
gdjs.game_32overCode.GDarrowObjects1.length = 0;
gdjs.game_32overCode.GDarrowObjects2.length = 0;
gdjs.game_32overCode.GDarrowObjects3.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
