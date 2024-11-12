gdjs.debugRoomCode = {};
gdjs.debugRoomCode.localVariables = [];
gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1= [];
gdjs.debugRoomCode.GDGround_9595PlaceholderObjects2= [];
gdjs.debugRoomCode.GDBottom_9595CollisionObjects1= [];
gdjs.debugRoomCode.GDBottom_9595CollisionObjects2= [];
gdjs.debugRoomCode.GDNewTextObjects1= [];
gdjs.debugRoomCode.GDNewTextObjects2= [];
gdjs.debugRoomCode.GDPlayerObjects1= [];
gdjs.debugRoomCode.GDPlayerObjects2= [];
gdjs.debugRoomCode.GDLeftRightCollisionObjects1= [];
gdjs.debugRoomCode.GDLeftRightCollisionObjects2= [];
gdjs.debugRoomCode.GDCoverObjects1= [];
gdjs.debugRoomCode.GDCoverObjects2= [];
gdjs.debugRoomCode.GDLeaveColObjects1= [];
gdjs.debugRoomCode.GDLeaveColObjects2= [];
gdjs.debugRoomCode.GDplatform1Objects1= [];
gdjs.debugRoomCode.GDplatform1Objects2= [];
gdjs.debugRoomCode.GDDieObjects1= [];
gdjs.debugRoomCode.GDDieObjects2= [];
gdjs.debugRoomCode.GDCoverWhiteObjects1= [];
gdjs.debugRoomCode.GDCoverWhiteObjects2= [];
gdjs.debugRoomCode.GDSnowObjects1= [];
gdjs.debugRoomCode.GDSnowObjects2= [];
gdjs.debugRoomCode.GDTextObjects1= [];
gdjs.debugRoomCode.GDTextObjects2= [];
gdjs.debugRoomCode.GDplatform2Objects1= [];
gdjs.debugRoomCode.GDplatform2Objects2= [];
gdjs.debugRoomCode.GDText2Objects1= [];
gdjs.debugRoomCode.GDText2Objects2= [];
gdjs.debugRoomCode.GDcenterObjects1= [];
gdjs.debugRoomCode.GDcenterObjects2= [];
gdjs.debugRoomCode.GDtextBoxObjects1= [];
gdjs.debugRoomCode.GDtextBoxObjects2= [];
gdjs.debugRoomCode.GDarrowObjects1= [];
gdjs.debugRoomCode.GDarrowObjects2= [];


gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.debugRoomCode.GDPlayerObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDGround_95959595PlaceholderObjects1Objects = Hashtable.newFrom({"Ground_Placeholder": gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.debugRoomCode.GDPlayerObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDGround_95959595PlaceholderObjects1Objects = Hashtable.newFrom({"Ground_Placeholder": gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.debugRoomCode.GDPlayerObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDBottom_95959595CollisionObjects1Objects = Hashtable.newFrom({"Bottom_Collision": gdjs.debugRoomCode.GDBottom_9595CollisionObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.debugRoomCode.GDPlayerObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDLeftRightCollisionObjects1Objects = Hashtable.newFrom({"LeftRightCollision": gdjs.debugRoomCode.GDLeftRightCollisionObjects1});
gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDLeftRightCollisionObjects1Objects = Hashtable.newFrom({"LeftRightCollision": gdjs.debugRoomCode.GDLeftRightCollisionObjects1});
gdjs.debugRoomCode.asyncCallback17646348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.debugRoomCode.localVariables);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}gdjs.debugRoomCode.localVariables.length = 0;
}
gdjs.debugRoomCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.debugRoomCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.debugRoomCode.asyncCallback17646348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.debugRoomCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bottom_Collision"), gdjs.debugRoomCode.GDBottom_9595CollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftRightCollision"), gdjs.debugRoomCode.GDLeftRightCollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleRight");
}
}{for(var i = 0, len = gdjs.debugRoomCode.GDBottom_9595CollisionObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDBottom_9595CollisionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.debugRoomCode.GDLeftRightCollisionObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDLeftRightCollisionObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Chill Jailbreak Alarm to Study and Relax to.mp3", true, 100, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("walkLeft");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("walkRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkRight" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "idleLeft" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkLeft" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground_Placeholder"), gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects, gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDGround_95959595PlaceholderObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "jumpLeft" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "idleRight" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "walkRight" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpLeft");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground_Placeholder"), gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects, gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDGround_95959595PlaceholderObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "jumpRight" ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idleRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugRoomCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.debugRoomCode.GDPlayerObjects1[k] = gdjs.debugRoomCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.debugRoomCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("jumpRight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bottom_Collision"), gdjs.debugRoomCode.GDBottom_9595CollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects, gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDBottom_95959595CollisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].setPosition(608,384);
}
}{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftRightCollision"), gdjs.debugRoomCode.GDLeftRightCollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.debugRoomCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDPlayerObjects1Objects, gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDLeftRightCollisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.debugRoomCode.GDLeftRightCollisionObjects1 */
/* Reuse gdjs.debugRoomCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.debugRoomCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.debugRoomCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.debugRoomCode.mapOfGDgdjs_9546debugRoomCode_9546GDLeftRightCollisionObjects1Objects, false);
}
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
gdjs.debugRoomCode.eventsList0(runtimeScene);} //End of subevents
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
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "titleScreen");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.debugRoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1.length = 0;
gdjs.debugRoomCode.GDGround_9595PlaceholderObjects2.length = 0;
gdjs.debugRoomCode.GDBottom_9595CollisionObjects1.length = 0;
gdjs.debugRoomCode.GDBottom_9595CollisionObjects2.length = 0;
gdjs.debugRoomCode.GDNewTextObjects1.length = 0;
gdjs.debugRoomCode.GDNewTextObjects2.length = 0;
gdjs.debugRoomCode.GDPlayerObjects1.length = 0;
gdjs.debugRoomCode.GDPlayerObjects2.length = 0;
gdjs.debugRoomCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.debugRoomCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.debugRoomCode.GDCoverObjects1.length = 0;
gdjs.debugRoomCode.GDCoverObjects2.length = 0;
gdjs.debugRoomCode.GDLeaveColObjects1.length = 0;
gdjs.debugRoomCode.GDLeaveColObjects2.length = 0;
gdjs.debugRoomCode.GDplatform1Objects1.length = 0;
gdjs.debugRoomCode.GDplatform1Objects2.length = 0;
gdjs.debugRoomCode.GDDieObjects1.length = 0;
gdjs.debugRoomCode.GDDieObjects2.length = 0;
gdjs.debugRoomCode.GDCoverWhiteObjects1.length = 0;
gdjs.debugRoomCode.GDCoverWhiteObjects2.length = 0;
gdjs.debugRoomCode.GDSnowObjects1.length = 0;
gdjs.debugRoomCode.GDSnowObjects2.length = 0;
gdjs.debugRoomCode.GDTextObjects1.length = 0;
gdjs.debugRoomCode.GDTextObjects2.length = 0;
gdjs.debugRoomCode.GDplatform2Objects1.length = 0;
gdjs.debugRoomCode.GDplatform2Objects2.length = 0;
gdjs.debugRoomCode.GDText2Objects1.length = 0;
gdjs.debugRoomCode.GDText2Objects2.length = 0;
gdjs.debugRoomCode.GDcenterObjects1.length = 0;
gdjs.debugRoomCode.GDcenterObjects2.length = 0;
gdjs.debugRoomCode.GDtextBoxObjects1.length = 0;
gdjs.debugRoomCode.GDtextBoxObjects2.length = 0;
gdjs.debugRoomCode.GDarrowObjects1.length = 0;
gdjs.debugRoomCode.GDarrowObjects2.length = 0;

gdjs.debugRoomCode.eventsList1(runtimeScene);
gdjs.debugRoomCode.GDGround_9595PlaceholderObjects1.length = 0;
gdjs.debugRoomCode.GDGround_9595PlaceholderObjects2.length = 0;
gdjs.debugRoomCode.GDBottom_9595CollisionObjects1.length = 0;
gdjs.debugRoomCode.GDBottom_9595CollisionObjects2.length = 0;
gdjs.debugRoomCode.GDNewTextObjects1.length = 0;
gdjs.debugRoomCode.GDNewTextObjects2.length = 0;
gdjs.debugRoomCode.GDPlayerObjects1.length = 0;
gdjs.debugRoomCode.GDPlayerObjects2.length = 0;
gdjs.debugRoomCode.GDLeftRightCollisionObjects1.length = 0;
gdjs.debugRoomCode.GDLeftRightCollisionObjects2.length = 0;
gdjs.debugRoomCode.GDCoverObjects1.length = 0;
gdjs.debugRoomCode.GDCoverObjects2.length = 0;
gdjs.debugRoomCode.GDLeaveColObjects1.length = 0;
gdjs.debugRoomCode.GDLeaveColObjects2.length = 0;
gdjs.debugRoomCode.GDplatform1Objects1.length = 0;
gdjs.debugRoomCode.GDplatform1Objects2.length = 0;
gdjs.debugRoomCode.GDDieObjects1.length = 0;
gdjs.debugRoomCode.GDDieObjects2.length = 0;
gdjs.debugRoomCode.GDCoverWhiteObjects1.length = 0;
gdjs.debugRoomCode.GDCoverWhiteObjects2.length = 0;
gdjs.debugRoomCode.GDSnowObjects1.length = 0;
gdjs.debugRoomCode.GDSnowObjects2.length = 0;
gdjs.debugRoomCode.GDTextObjects1.length = 0;
gdjs.debugRoomCode.GDTextObjects2.length = 0;
gdjs.debugRoomCode.GDplatform2Objects1.length = 0;
gdjs.debugRoomCode.GDplatform2Objects2.length = 0;
gdjs.debugRoomCode.GDText2Objects1.length = 0;
gdjs.debugRoomCode.GDText2Objects2.length = 0;
gdjs.debugRoomCode.GDcenterObjects1.length = 0;
gdjs.debugRoomCode.GDcenterObjects2.length = 0;
gdjs.debugRoomCode.GDtextBoxObjects1.length = 0;
gdjs.debugRoomCode.GDtextBoxObjects2.length = 0;
gdjs.debugRoomCode.GDarrowObjects1.length = 0;
gdjs.debugRoomCode.GDarrowObjects2.length = 0;


return;

}

gdjs['debugRoomCode'] = gdjs.debugRoomCode;
