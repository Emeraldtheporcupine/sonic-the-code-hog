namespace SpriteKind {
    export const Collision = SpriteKind.create()
    export const Texture = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collision, function (sprite, otherSprite) {
    Sonic.y += -1
    Sonic.vy = 0
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sonic.vy == 10) {
        Sonic.vy = -125
        music.play(music.createSoundEffect(WaveShape.Square, 1, 2394, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
})
let Direction = 0
let Texture: Sprite = null
let aGround: Sprite = null
let bGround: Sprite = null
let LSlope: Sprite = null
let rSlope: Sprite = null
let Sonic: Sprite = null
Sonic = sprites.create(assets.image`SonicIdleR`, SpriteKind.Player)
SetAnim()
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
scene.setBackgroundImage(assets.image`myImage`)
music.play(music.createSong(assets.song`g`), music.PlaybackMode.LoopingInBackground)
tiles.placeOnTile(Sonic, tiles.getTileLocation(1, 13))
for (let slopeRight of tiles.getTilesByType(assets.tile`myTile1`)) {
    rSlope = sprites.create(assets.image`GroundSlopeRight`, SpriteKind.Collision)
    tiles.placeOnTile(rSlope, slopeRight)
    tiles.setTileAt(slopeRight, assets.tile`transparency16`)
}
for (let slopeLeft of tiles.getTilesByType(assets.tile`myTile2`)) {
    LSlope = sprites.create(assets.image`GroundSlopeLeft`, SpriteKind.Collision)
    tiles.placeOnTile(LSlope, slopeLeft)
    tiles.setTileAt(slopeLeft, assets.tile`transparency16`)
}
for (let BelowGround of tiles.getTilesByType(assets.tile`myTile3`)) {
    bGround = sprites.create(assets.image`GroundBelow`, SpriteKind.Collision)
    tiles.placeOnTile(bGround, BelowGround)
    tiles.setTileAt(BelowGround, assets.tile`transparency16`)
}
for (let AboveGround of tiles.getTilesByType(assets.tile`myTile`)) {
    aGround = sprites.create(assets.image`Ground`, SpriteKind.Collision)
    tiles.placeOnTile(aGround, AboveGround)
    tiles.setTileAt(AboveGround, assets.tile`transparency16`)
}
for (let AboveGround of tiles.getTilesByType(assets.tile`myTile8`)) {
    aGround = sprites.create(assets.image`GroundBelow0`, SpriteKind.Collision)
    tiles.placeOnTile(aGround, AboveGround)
    tiles.setTileAt(AboveGround, assets.tile`transparency16`)
}
for (let soil of tiles.getTilesByType(assets.tile`myTile4`)) {
    Texture = sprites.create(assets.image`Grass`, SpriteKind.Texture)
    tiles.placeOnTile(Texture, soil)
    Texture.z = 20
    tiles.setTileAt(soil, assets.tile`transparency16`)
}
for (let Trees of tiles.getTilesByType(assets.tile`myTile5`)) {
    Texture = sprites.create(assets.image`Tree`, SpriteKind.Texture)
    tiles.placeOnTile(Texture, Trees)
    Texture.y += -12
    Texture.z = -20
    tiles.setTileAt(Trees, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Sonic.vy += 10
    if (controller.right.isPressed()) {
        Direction = 1
        Sonic.vx += 1
    } else if (controller.left.isPressed()) {
        Direction = -1
        Sonic.vx += -1
    } else {
        Sonic.vx += Sonic.vx * -0.15
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.NotMoving))
    }
    if (Direction == 1) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))
    } else if (Direction == -1) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
    }
    if (Sonic.vx > 10 && Sonic.vx < 59) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.Moving, Predicate.FacingRight))
    } else if (Sonic.vx < -10 && Sonic.vx > -59) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft))
    }
    if (Sonic.vx > 60) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight))
    } else if (Sonic.vx < -60) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft))
    }
    if (Sonic.vx > 87) {
        Sonic.vx = 87
    } else if (Sonic.vx < -87) {
        Sonic.vx = -87
    }
    if (Sonic.vy != 10) {
        characterAnimations.setCharacterState(Sonic, characterAnimations.rule(Predicate.Moving))
    }
})
