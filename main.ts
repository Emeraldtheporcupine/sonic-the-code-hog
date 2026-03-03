namespace SpriteKind {
    export const Collision = SpriteKind.create()
    export const Texture = SpriteKind.create()
    export const RingCollect = SpriteKind.create()
    export const Emerald = SpriteKind.create()
    export const Goal = SpriteKind.create()
}
function PlaceTiles () {
    for (let slopeRight of tiles.getTilesByType(assets.tile`myTile1`)) {
        rSlope = sprites.create(assets.image`GroundSlopeRight`, SpriteKind.Collision)
        tiles.placeOnTile(rSlope, slopeRight)
        tiles.setTileAt(slopeRight, assets.tile`transparency16`)
    }
    for (let slopeRight2 of tiles.getTilesByType(assets.tile`myTile14`)) {
        rSlope = sprites.create(assets.image`UnderGroundSlopeRight`, SpriteKind.Collision)
        tiles.placeOnTile(rSlope, slopeRight2)
        tiles.setTileAt(slopeRight2, assets.tile`myTile10`)
    }
    for (let slopeLeft of tiles.getTilesByType(assets.tile`myTile2`)) {
        LSlope = sprites.create(assets.image`GroundSlopeLeft`, SpriteKind.Collision)
        tiles.placeOnTile(LSlope, slopeLeft)
        tiles.setTileAt(slopeLeft, assets.tile`transparency16`)
    }
    for (let slopeLeft2 of tiles.getTilesByType(assets.tile`myTile15`)) {
        LSlope = sprites.create(assets.image`UnderGroundSlopeLeft`, SpriteKind.Collision)
        tiles.placeOnTile(LSlope, slopeLeft2)
        tiles.setTileAt(slopeLeft2, assets.tile`myTile10`)
    }
    for (let BelowGround of tiles.getTilesByType(assets.tile`myTile3`)) {
        bGround = sprites.create(assets.image`GroundBelow`, SpriteKind.Collision)
        tiles.placeOnTile(bGround, BelowGround)
        tiles.setTileAt(BelowGround, assets.tile`transparency16`)
    }
    for (let BelowGround2 of tiles.getTilesByType(assets.tile`myTile16`)) {
        bGround = sprites.create(assets.image`ABOVE`, SpriteKind.Collision)
        tiles.placeOnTile(bGround, BelowGround2)
        tiles.setTileAt(BelowGround2, assets.tile`transparency16`)
    }
    for (let RingOut of tiles.getTilesByType(assets.tile`myTile18`)) {
        Ring = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.RingCollect)
        animation.runImageAnimation(
        Ring,
        assets.animation`Ring`,
        150,
        true
        )
        tiles.placeOnTile(Ring, RingOut)
        Ring.x += 7
        Ring.y += 2
        tiles.setTileAt(RingOut, assets.tile`transparency16`)
    }
    for (let RingOut2 of tiles.getTilesByType(assets.tile`myTile22`)) {
        Ring = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.RingCollect)
        animation.runImageAnimation(
        Ring,
        assets.animation`Ring`,
        150,
        true
        )
        tiles.placeOnTile(Ring, RingOut2)
        Ring.x += 7
        Ring.y += 2
        tiles.setTileAt(RingOut2, assets.tile`myTile10`)
    }
    for (let AboveGround of tiles.getTilesByType(assets.tile`myTile`)) {
        aGround = sprites.create(assets.image`Ground`, SpriteKind.Collision)
        tiles.placeOnTile(aGround, AboveGround)
        tiles.setTileAt(AboveGround, assets.tile`transparency16`)
    }
    for (let AboveGround2 of tiles.getTilesByType(assets.tile`myTile8`)) {
        aGround = sprites.create(assets.image`GroundBelow0`, SpriteKind.Collision)
        tiles.placeOnTile(aGround, AboveGround2)
        tiles.setTileAt(AboveGround2, assets.tile`transparency16`)
    }
    for (let AboveGround3 of tiles.getTilesByType(assets.tile`myTile9`)) {
        aGround = sprites.create(assets.image`GroundBelow1`, SpriteKind.Collision)
        tiles.placeOnTile(aGround, AboveGround3)
        tiles.setTileAt(AboveGround3, assets.tile`transparency16`)
    }
    for (let Trees of tiles.getTilesByType(assets.tile`myTile5`)) {
        Texture2 = sprites.create(assets.image`Tree`, SpriteKind.Texture)
        tiles.placeOnTile(Texture2, Trees)
        Texture2.y += -12
        Texture2.z = -20
        tiles.setTileAt(Trees, assets.tile`myTile4`)
    }
    for (let EMERALDS of tiles.getTilesByType(assets.tile`myTile25`)) {
        Chaos_Emerald = sprites.create(assets.image`Emerald`, SpriteKind.Emerald)
        tiles.placeOnTile(Chaos_Emerald, EMERALDS)
        Chaos_Emerald.z = 20
        tiles.setTileAt(EMERALDS, assets.tile`myTile10`)
    }
    for (let SignPost of tiles.getTilesByType(assets.tile`myTile27`)) {
        GoalPost = sprites.create(assets.image`GoalPost`, SpriteKind.Goal)
        tiles.placeOnTile(GoalPost, SignPost)
        GoalPost.z = -5
        tiles.setTileAt(SignPost, assets.tile`transparency8`)
    }
    for (let soil of tiles.getTilesByType(assets.tile`myTile4`)) {
        Texture2 = sprites.create(assets.image`Grass`, SpriteKind.Texture)
        tiles.placeOnTile(Texture2, soil)
        Texture2.z = 20
        tiles.setTileAt(soil, assets.tile`transparency8`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Texture)
    music.stopAllSounds()
    Control = false
    sprite.vx = 0
    sprite.vx = 60
    characterAnimations.setCharacterState(sprite, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight))
    sprite.ay = 0
    sprite.setFlag(SpriteFlag.Ghost, true)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
    animation.runImageAnimation(
    otherSprite,
    assets.animation`Spin`,
    50,
    true
    )
    timer.after(1000, function () {
        animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
        otherSprite.setImage(assets.image`GoalPost0`)
        music.play(music.createSong(assets.song`Act Clear`), music.PlaybackMode.UntilDone)
        timer.after(500, function () {
            game.reset()
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collision, function (sprite, otherSprite) {
    Sonic.vy = Sonic.vy * 0.02
    Sonic.y += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Control == true) {
        if (Sonic.vy == 0) {
            Sonic.vy = -125
            music.play(music.createSoundEffect(WaveShape.Square, 1, 2394, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    }
})
function SetAnim () {
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`WalkR`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`WalkL`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`RunR`,
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`RunL`,
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`Jump`,
    100,
    characterAnimations.rule(Predicate.Moving)
    )
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`IdleR`,
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    Sonic,
    assets.animation`IdleL`,
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RingCollect, function (sprite, otherSprite) {
    music.setVolume(100)
    music.play(music.stringPlayable("C7:4 E7 G7 C8 - - - - ", 1250), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Emerald, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.stringPlayable("E5:3 G5:3 C6:3 E6:6 C6:6 G6:16 ", 240), music.PlaybackMode.InBackground)
})
let Direction = 0
let distance = 0
let GoalPost: Sprite = null
let Chaos_Emerald: Sprite = null
let Texture2: Sprite = null
let aGround: Sprite = null
let Ring: Sprite = null
let bGround: Sprite = null
let LSlope: Sprite = null
let rSlope: Sprite = null
let Sonic: Sprite = null
let Control = false
Control = true
Sonic = sprites.create(assets.image`SonicIdleR`, SpriteKind.Player)
Sonic.ay = 400
SetAnim()
scene.cameraFollowSprite(Sonic)
characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight))
scene.setBackgroundImage(assets.image`Night`)
let Moon = sprites.create(assets.image`Moon`, SpriteKind.Texture)
Moon.setFlag(SpriteFlag.Ghost, true)
Moon.z = -15
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
music.play(music.createSong(assets.song`Sleepy Hill Zone`), music.PlaybackMode.LoopingInBackground)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
scroller.setCameraScrollingMultipliers(0.2, 0)
tiles.placeOnTile(Sonic, tiles.getTileLocation(1, 13))
PlaceTiles()
game.onUpdate(function () {
    distance = scene.cameraProperty(CameraProperty.X) / 76
    if (Control == true) {
        if (controller.right.isPressed()) {
            Direction = 1
            if (Sonic.vx < 0) {
                Sonic.vx += 3
            } else {
                Sonic.vx += 3
            }
        } else if (controller.left.isPressed()) {
            Direction = -1
            if (Sonic.vx > 0) {
                Sonic.vx += -3
            } else {
                Sonic.vx += -1
            }
        } else {
            Sonic.vx += Sonic.vx * -0.15
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.NotMoving))
        }
        if (Direction == 1) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))
        } else if (Direction == -1) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
        }
        if (Sonic.vx > 10 && Sonic.vx < 44) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.Moving, Predicate.FacingRight))
        } else if (Sonic.vx < -10 && Sonic.vx > -44) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft))
        }
        if (Sonic.vx > 45) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight))
        } else if (Sonic.vx < -45) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft))
        }
        if (Sonic.vx > 60) {
            Sonic.vx = 60
        } else if (Sonic.vx < -60) {
            Sonic.vx = -60
        }
        if (Sonic.vy != 0) {
            characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.Moving))
        }
    }
    Moon.setPosition(scene.cameraProperty(CameraProperty.X) - (50 + distance), scene.cameraProperty(CameraProperty.Y) - 40)
})
