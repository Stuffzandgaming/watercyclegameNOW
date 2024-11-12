gdjs.outSideLabCode = {};
gdjs.outSideLabCode.localVariables = [];
gdjs.outSideLabCode.GDlabObjects1= [];
gdjs.outSideLabCode.GDlabObjects2= [];
gdjs.outSideLabCode.GDlabObjects3= [];
gdjs.outSideLabCode.GDPlayerObjects1= [];
gdjs.outSideLabCode.GDPlayerObjects2= [];
gdjs.outSideLabCode.GDPlayerObjects3= [];
gdjs.outSideLabCode.GDLeftRightCollisionObjects1= [];
gdjs.outSideLabCode.GDLeftRightCollisionObjects2= [];
gdjs.outSideLabCode.GDLeftRightCollisionObjects3= [];
gdjs.outSideLabCode.GDCoverObjects1= [];
gdjs.outSideLabCode.GDCoverObjects2= [];
gdjs.outSideLabCode.GDCoverObjects3= [];
gdjs.outSideLabCode.GDLeaveColObjects1= [];
gdjs.outSideLabCode.GDLeaveColObjects2= [];
gdjs.outSideLabCode.GDLeaveColObjects3= [];
gdjs.outSideLabCode.GDplatform1Objects1= [];
gdjs.outSideLabCode.GDplatform1Objects2= [];
gdjs.outSideLabCode.GDplatform1Objects3= [];
gdjs.outSideLabCode.GDDieObjects1= [];
gdjs.outSideLabCode.GDDieObjects2= [];
gdjs.outSideLabCode.GDDieObjects3= [];
gdjs.outSideLabCode.GDCoverWhiteObjects1= [];
gdjs.outSideLabCode.GDCoverWhiteObjects2= [];
gdjs.outSideLabCode.GDCoverWhiteObjects3= [];
gdjs.outSideLabCode.GDSnowObjects1= [];
gdjs.outSideLabCode.GDSnowObjects2= [];
gdjs.outSideLabCode.GDSnowObjects3= [];
gdjs.outSideLabCode.GDTextObjects1= [];
gdjs.outSideLabCode.GDTextObjects2= [];
gdjs.outSideLabCode.GDTextObjects3= [];
gdjs.outSideLabCode.GDplatform2Objects1= [];
gdjs.outSideLabCode.GDplatform2Objects2= [];
gdjs.outSideLabCode.GDplatform2Objects3= [];
gdjs.outSideLabCode.GDText2Objects1= [];
gdjs.outSideLabCode.GDText2Objects2= [];
gdjs.outSideLabCode.GDText2Objects3= [];
gdjs.outSideLabCode.GDcenterObjects1= [];
gdjs.outSideLabCode.GDcenterObjects2= [];
gdjs.outSideLabCode.GDcenterObjects3= [];
gdjs.outSideLabCode.GDtextBoxObjects1= [];
gdjs.outSideLabCode.GDtextBoxObjects2= [];
gdjs.outSideLabCode.GDtextBoxObjects3= [];
gdjs.outSideLabCode.GDarrowObjects1= [];
gdjs.outSideLabCode.GDarrowObjects2= [];
gdjs.outSideLabCode.GDarrowObjects3= [];


gdjs.outSideLabCode.asyncCallback18695004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.outSideLabCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("arrow"), gdjs.outSideLabCode.GDarrowObjects3);

{for(var i = 0, len = gdjs.outSideLabCode.GDarrowObjects3.length ;i < len;++i) {
    gdjs.outSideLabCode.GDarrowObjects3[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 1, false);
}
}gdjs.outSideLabCode.localVariables.length = 0;
}
gdjs.outSideLabCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.outSideLabCode.localVariables);
/* Don't save arrow as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.outSideLabCode.asyncCallback18695004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.outSideLabCode.asyncCallback18696244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.outSideLabCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("lab"), gdjs.outSideLabCode.GDlabObjects2);
{for(var i = 0, len = gdjs.outSideLabCode.GDlabObjects2.length ;i < len;++i) {
    gdjs.outSideLabCode.GDlabObjects2[i].getBehavior("Animation").setAnimationName("door open");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.outSideLabCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.outSideLabCode.localVariables.length = 0;
}
gdjs.outSideLabCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.outSideLabCode.localVariables);
for (const obj of gdjs.outSideLabCode.GDarrowObjects1) asyncObjectsList.addObject("arrow", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.outSideLabCode.asyncCallback18696244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDcenterObjects1Objects = Hashtable.newFrom({"center": gdjs.outSideLabCode.GDcenterObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.asyncCallback18701652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.outSideLabCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "insideLab");
}gdjs.outSideLabCode.localVariables.length = 0;
}
gdjs.outSideLabCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.outSideLabCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.outSideLabCode.asyncCallback18701652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.outSideLabCode.GDPlayerObjects1});
gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects = Hashtable.newFrom({"Die": gdjs.outSideLabCode.GDDieObjects1});
gdjs.outSideLabCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.outSideLabCode.GDCoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("arrow"), gdjs.outSideLabCode.GDarrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("center"), gdjs.outSideLabCode.GDcenterObjects1);
{for(var i = 0, len = gdjs.outSideLabCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDarrowObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDCoverObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDcenterObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDcenterObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.outSideLabCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("center"), gdjs.outSideLabCode.GDcenterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDcenterObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.outSideLabCode.GDCoverObjects1);
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDCoverObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 255, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{ //Subevents
gdjs.outSideLabCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("walkRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("walkLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkRight" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "idleLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "jumpLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "jumpRight" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkRight" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Die"), gdjs.outSideLabCode.GDDieObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "idleRight" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDPlayerObjects1Objects, gdjs.outSideLabCode.mapOfGDgdjs_9546outSideLabCode_9546GDDieObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Cloud") ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationIndex() - (1));
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.outSideLabCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.outSideLabCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.outSideLabCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.outSideLabCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Cloud" ) {
        isConditionTrue_0 = true;
        gdjs.outSideLabCode.GDPlayerObjects1[k] = gdjs.outSideLabCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.outSideLabCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.outSideLabCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.outSideLabCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.outSideLabCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


};

gdjs.outSideLabCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.outSideLabCode.GDlabObjects1.length = 0;
gdjs.outSideLabCode.GDlabObjects2.length = 0;
gdjs.outSideLabCode.GDlabObjects3.length = 0;
gdjs.outSideLabCode.GDPlayerObjects1.length = 0;
gdjs.outSideLabCode.GDPlayerObjects2.length = 0;
gdjs.outSideLabCode.GDPlayerObjects3.length = 0;
gdjs.outSideLabCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.outSideLabCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.outSideLabCode.GDLeftRightCollisionObjects3.length = 0;
gdjs.outSideLabCode.GDCoverObjects1.length = 0;
gdjs.outSideLabCode.GDCoverObjects2.length = 0;
gdjs.outSideLabCode.GDCoverObjects3.length = 0;
gdjs.outSideLabCode.GDLeaveColObjects1.length = 0;
gdjs.outSideLabCode.GDLeaveColObjects2.length = 0;
gdjs.outSideLabCode.GDLeaveColObjects3.length = 0;
gdjs.outSideLabCode.GDplatform1Objects1.length = 0;
gdjs.outSideLabCode.GDplatform1Objects2.length = 0;
gdjs.outSideLabCode.GDplatform1Objects3.length = 0;
gdjs.outSideLabCode.GDDieObjects1.length = 0;
gdjs.outSideLabCode.GDDieObjects2.length = 0;
gdjs.outSideLabCode.GDDieObjects3.length = 0;
gdjs.outSideLabCode.GDCoverWhiteObjects1.length = 0;
gdjs.outSideLabCode.GDCoverWhiteObjects2.length = 0;
gdjs.outSideLabCode.GDCoverWhiteObjects3.length = 0;
gdjs.outSideLabCode.GDSnowObjects1.length = 0;
gdjs.outSideLabCode.GDSnowObjects2.length = 0;
gdjs.outSideLabCode.GDSnowObjects3.length = 0;
gdjs.outSideLabCode.GDTextObjects1.length = 0;
gdjs.outSideLabCode.GDTextObjects2.length = 0;
gdjs.outSideLabCode.GDTextObjects3.length = 0;
gdjs.outSideLabCode.GDplatform2Objects1.length = 0;
gdjs.outSideLabCode.GDplatform2Objects2.length = 0;
gdjs.outSideLabCode.GDplatform2Objects3.length = 0;
gdjs.outSideLabCode.GDText2Objects1.length = 0;
gdjs.outSideLabCode.GDText2Objects2.length = 0;
gdjs.outSideLabCode.GDText2Objects3.length = 0;
gdjs.outSideLabCode.GDcenterObjects1.length = 0;
gdjs.outSideLabCode.GDcenterObjects2.length = 0;
gdjs.outSideLabCode.GDcenterObjects3.length = 0;
gdjs.outSideLabCode.GDtextBoxObjects1.length = 0;
gdjs.outSideLabCode.GDtextBoxObjects2.length = 0;
gdjs.outSideLabCode.GDtextBoxObjects3.length = 0;
gdjs.outSideLabCode.GDarrowObjects1.length = 0;
gdjs.outSideLabCode.GDarrowObjects2.length = 0;
gdjs.outSideLabCode.GDarrowObjects3.length = 0;

gdjs.outSideLabCode.eventsList3(runtimeScene);

return;

}

gdjs['outSideLabCode'] = gdjs.outSideLabCode;
