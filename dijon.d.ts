/// <reference path="typings/tsd.d.ts" />
declare module "dijon/interfaces" {
    export interface INotification {
        getName(): string;
        getBody(): any;
        setBody(body: any): void;
    }
    export interface INotifier {
        sendNotification(notificationName: string, notificationBody?: any): any;
    }
    export interface IObserver {
        onRegister(): any;
        onRemoved(): any;
        destroy(): any;
        listNotificationInterests(): string[];
        handleNotification(notification: INotification): any;
    }
    export interface IGameConfig extends Phaser.IGameConfig {
        resolution?: number;
        analytics?: boolean;
        plugins?: string[];
    }
    export interface IAsset {
        url: string;
        type: string;
        extensions?: string;
        required?: boolean;
        id?: string;
        key?: string;
        resolution: number;
    }
    export interface ITiledmapAssets extends IAsset {
        assets: Array<IAsset>;
    }
    export interface IAssetList {
        autoload: boolean;
        required: boolean;
        assets: Array<IAsset>;
    }
    export interface ISound {
        isAudioSprite?: boolean;
        url?: string;
        key?: string;
        __isAudioSprite?: boolean;
        eventToDispatch?: Phaser.Signal;
        decoded?: boolean;
    }
    export interface IPathConfig {
        assetPath: string;
        dataPath: string;
        spritesheetPath: string;
        imgPath: string;
        fontPath: string;
        bitmapFontPath: string;
        audioSpritePath: string;
        physicsPath: string;
        soundPath: string;
    }
    export interface ITransition {
        inHandler?: ITransitionHandler;
        preloadHandler?: IPreloadHandler;
        outHandler: ITransitionHandler;
    }
    export interface ITransitionHandler {
        transitionInComplete: Phaser.Signal;
        transitionOutComplete: Phaser.Signal;
        transitionOut?: Function;
        transitionIn?: Function;
    }
    export interface IPreloadHandler extends ITransitionHandler {
        loadStart(): any;
        loadProgress(progress?: number): any;
        loadComplete(): any;
    }
    export interface IBrowser {
        firefox?: boolean;
        ie?: boolean;
        safari?: boolean;
        chrome?: boolean;
    }
}
declare module "dijon/mvc" {
    import { INotification, IObserver } from "dijon/interfaces";
    import { Application } from "dijon/application";
    import { Game } from "dijon/core";
    export class Model {
        private modelName;
        app: Application;
        game: Game;
        protected _data: any;
        static MODEL_NAME: string;
        constructor(dataKey?: string, modelName?: string);
        onRegister(): void;
        onRemoved(): void;
        protected getKeyExists(key: string): boolean;
        setData(dataKey: string): any;
        getData(): any;
        destroy(): void;
        name: string;
    }
    export class CopyModel extends Model {
        static MODEL_NAME: string;
        private _languages;
        constructor(dataKey?: string);
        getCopy(groupId: string, itemId: string): string;
        getCopyGroup(groupId: string): any;
        addLanguage(languageId: string, dataKey: string): any;
        changeLanguage(languageId: string): void;
        name: string;
    }
    export class Mediator implements IObserver {
        protected _viewComponent: any;
        static MEDIATOR_NAME: string;
        protected mediatorName: string;
        protected app: Application;
        protected game: Game;
        constructor(_viewComponent?: any, autoReg?: boolean, mediatorName?: string);
        protected register(): void;
        protected remove(): void;
        onRegister(): void;
        onRemoved(): void;
        destroy(): void;
        listNotificationInterests(): string[];
        handleNotification(notification: INotification): void;
        sendNotification(notificationName: string, notificationBody?: any): void;
        viewComponent: any;
        name: string;
    }
    export class Notification implements INotification {
        private _name;
        private _body;
        constructor(_name: string, _body?: any);
        getName(): string;
        setBody(body: any): void;
        getBody(): any;
        destroy(): void;
    }
}
declare module "dijon/spine/spine" {
    export function loadBool(json: any, key: string | number, def?: boolean): boolean;
    export function saveBool(json: any, key: string | number, value: boolean, def?: boolean): void;
    export function loadFloat(json: any, key: string | number, def?: number): number;
    export function saveFloat(json: any, key: string | number, value: number, def?: number): void;
    export function loadInt(json: any, key: string | number, def?: number): number;
    export function saveInt(json: any, key: string | number, value: number, def?: number): void;
    export function loadString(json: any, key: string | number, def?: string): string;
    export function saveString(json: any, key: string | number, value: string, def?: string): void;
    export class Color {
        r: number;
        g: number;
        b: number;
        a: number;
        copy(other: Color): Color;
        load(json: any): Color;
        toString(): string;
    }
    export function StepBezierCurve(cx1: number, cy1: number, cx2: number, cy2: number): (t: number) => number;
    export class Curve {
        evaluate: (t: number) => number;
        load(json: any): Curve;
    }
    export function wrap(num: number, min: number, max: number): number;
    export function tween(a: number, b: number, t: number): number;
    export function wrapAngleRadians(angle: number): number;
    export function tweenAngle(a: number, b: number, t: number): number;
    export class Angle {
        rad: number;
        constructor(rad?: number);
        deg: number;
        cos: number;
        sin: number;
        selfIdentity(): Angle;
        copy(other: Angle): Angle;
    }
    export class Vector {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        copy(other: Vector): Vector;
        static equal(a: Vector, b: Vector, epsilon?: number): boolean;
        static add(a: Vector, b: Vector, out?: Vector): Vector;
        add(other: Vector, out?: Vector): Vector;
        selfAdd(other: Vector): Vector;
        static tween(a: Vector, b: Vector, pct: number, out?: Vector): Vector;
        tween(other: Vector, pct: number, out?: Vector): Vector;
        selfTween(other: Vector, pct: number): Vector;
    }
    export class Position extends Vector {
        constructor();
    }
    export class Rotation extends Angle {
        constructor();
    }
    export class Scale extends Vector {
        constructor();
        selfIdentity(): Scale;
    }
    export class Space {
        position: Position;
        rotation: Rotation;
        scale: Scale;
        copy(other: Space): Space;
        load(json: any): Space;
        static equal(a: Space, b: Space, epsilon?: number): boolean;
        static identity(out?: Space): Space;
        static translate(space: Space, x: number, y: number): Space;
        static rotate(space: Space, rad: number): Space;
        static scale(space: Space, x: number, y: number): Space;
        static invert(space: Space, out?: Space): Space;
        static combine(a: Space, b: Space, out?: Space): Space;
        static extract(ab: Space, a: Space, out?: Space): Space;
        static transform(space: Space, v: Vector, out?: Vector): Vector;
        static untransform(space: Space, v: Vector, out?: Vector): Vector;
        static tween(a: Space, b: Space, t: number, out?: Space): Space;
    }
    export class Bone {
        parent_key: string;
        length: number;
        local_space: Space;
        world_space: Space;
        inherit_rotation: boolean;
        inherit_scale: boolean;
        copy(other: Bone): Bone;
        load(json: any): Bone;
        static flatten(bone: Bone, bones: {
            [key: string]: Bone;
        }): Bone;
    }
    export class Ikc {
        name: string;
        bone_keys: string[];
        target_key: string;
        mix: number;
        bend_positive: boolean;
        load(json: any): Ikc;
    }
    export class Slot {
        bone_key: string;
        color: Color;
        attachment_key: string;
        blend: string;
        copy(other: Slot): Slot;
        load(json: any): Slot;
    }
    export class Attachment {
        type: string;
        name: string;
        path: string;
        constructor(type: string);
        load(json: any): Attachment;
    }
    export class RegionAttachment extends Attachment {
        local_space: Space;
        width: number;
        height: number;
        constructor();
        load(json: any): RegionAttachment;
    }
    export class BoundingBoxAttachment extends Attachment {
        vertices: number[];
        constructor();
        load(json: any): BoundingBoxAttachment;
    }
    export class MeshAttachment extends Attachment {
        color: Color;
        triangles: number[];
        edges: number[];
        vertices: number[];
        uvs: number[];
        hull: number;
        constructor();
        load(json: any): MeshAttachment;
    }
    export class SkinnedMeshAttachment extends Attachment {
        color: Color;
        triangles: number[];
        edges: number[];
        vertices: number[];
        uvs: number[];
        hull: number;
        constructor();
        load(json: any): SkinnedMeshAttachment;
    }
    export class SkinSlot {
        attachments: {
            [key: string]: Attachment;
        };
        attachment_keys: string[];
        load(json: any): SkinSlot;
    }
    export class Skin {
        name: string;
        slots: {
            [key: string]: SkinSlot;
        };
        slot_keys: string[];
        load(json: any): Skin;
        iterateAttachments(callback: (slot_key: string, skin_slot: SkinSlot, attachment_key: string, attachment: Attachment) => void): void;
    }
    export class Event {
        name: string;
        int_value: number;
        float_value: number;
        string_value: string;
        copy(other: Event): Event;
        load(json: any): Event;
    }
    export class Keyframe {
        time: number;
        drop(): Keyframe;
        load(json: any): Keyframe;
        save(json: any): Keyframe;
        static find(array: Keyframe[], time: number): number;
        static compare(a: Keyframe, b: Keyframe): number;
    }
    export class BoneKeyframe extends Keyframe {
        curve: Curve;
        load(json: any): BoneKeyframe;
    }
    export class TranslateKeyframe extends BoneKeyframe {
        position: Position;
        load(json: any): TranslateKeyframe;
    }
    export class RotateKeyframe extends BoneKeyframe {
        rotation: Rotation;
        load(json: any): RotateKeyframe;
    }
    export class ScaleKeyframe extends BoneKeyframe {
        scale: Scale;
        load(json: any): ScaleKeyframe;
    }
    export class AnimBone {
        min_time: number;
        max_time: number;
        translate_keyframes: TranslateKeyframe[];
        rotate_keyframes: RotateKeyframe[];
        scale_keyframes: ScaleKeyframe[];
        load(json: any): AnimBone;
    }
    export class SlotKeyframe extends Keyframe {
    }
    export class ColorKeyframe extends SlotKeyframe {
        color: Color;
        curve: Curve;
        load(json: any): ColorKeyframe;
    }
    export class AttachmentKeyframe extends SlotKeyframe {
        name: string;
        load(json: any): AttachmentKeyframe;
    }
    export class AnimSlot {
        min_time: number;
        max_time: number;
        color_keyframes: ColorKeyframe[];
        attachment_keyframes: AttachmentKeyframe[];
        load(json: any): AnimSlot;
    }
    export class EventKeyframe extends Keyframe {
        name: string;
        int_value: number;
        float_value: number;
        string_value: string;
        load(json: any): EventKeyframe;
    }
    export class SlotOffset {
        slot_key: string;
        offset: number;
        load(json: any): SlotOffset;
    }
    export class OrderKeyframe extends Keyframe {
        slot_offsets: SlotOffset[];
        load(json: any): OrderKeyframe;
    }
    export class IkcKeyframe extends Keyframe {
        curve: Curve;
        mix: number;
        bend_positive: boolean;
        load(json: any): IkcKeyframe;
    }
    export class AnimIkc {
        min_time: number;
        max_time: number;
        ikc_keyframes: IkcKeyframe[];
        load(json: any): AnimIkc;
    }
    export class FfdKeyframe extends Keyframe {
        curve: Curve;
        offset: number;
        vertices: number[];
        load(json: any): FfdKeyframe;
    }
    export class FfdAttachment {
        min_time: number;
        max_time: number;
        ffd_keyframes: FfdKeyframe[];
        load(json: any): FfdAttachment;
    }
    export class FfdSlot {
        ffd_attachments: {
            [key: string]: FfdAttachment;
        };
        ffd_attachment_keys: string[];
        load(json: any): FfdSlot;
        iterateAttachments(callback: (ffd_attachment_key: string, ffd_attachment: FfdAttachment) => void): void;
    }
    export class AnimFfd {
        min_time: number;
        max_time: number;
        ffd_slots: {
            [key: string]: FfdSlot;
        };
        ffd_slot_keys: string[];
        load(json: any): AnimFfd;
        iterateAttachments(callback: (ffd_slot_key: string, ffd_slot: FfdSlot, ffd_attachment_key: string, ffd_attachment: FfdAttachment) => void): void;
    }
    export class Animation {
        name: string;
        bones: {
            [key: string]: AnimBone;
        };
        slots: {
            [key: string]: AnimSlot;
        };
        event_keyframes: EventKeyframe[];
        order_keyframes: OrderKeyframe[];
        ikcs: {
            [key: string]: AnimIkc;
        };
        ffds: {
            [key: string]: AnimFfd;
        };
        min_time: number;
        max_time: number;
        length: number;
        load(json: any): Animation;
    }
    export class Skeleton {
        hash: string;
        spine: string;
        width: number;
        height: number;
        images: string;
        load(json: any): Skeleton;
    }
    export class Data {
        name: string;
        skeleton: Skeleton;
        bones: {
            [key: string]: Bone;
        };
        bone_keys: string[];
        ikcs: {
            [key: string]: Ikc;
        };
        ikc_keys: string[];
        slots: {
            [key: string]: Slot;
        };
        slot_keys: string[];
        skins: {
            [key: string]: Skin;
        };
        skin_keys: string[];
        events: {
            [key: string]: Event;
        };
        event_keys: string[];
        anims: {
            [key: string]: Animation;
        };
        anim_keys: string[];
        load(json: any): Data;
        loadSkeleton(json: any): Data;
        loadEvent(name: string, json: any): Data;
        loadAnimation(name: string, json: any): Data;
        getSkins(): {
            [key: string]: Skin;
        };
        getEvents(): {
            [key: string]: Event;
        };
        getAnims(): {
            [key: string]: Animation;
        };
        iterateBones(callback: any): void;
        iterateAttachments(skin_key: any, callback: (slot_key: string, data_slot: Slot, skin_slot: SkinSlot, attachment_key: string, attachment: Attachment) => void): void;
        iterateSkins(callback: (skin_key: string, skin: Skin) => void): void;
        iterateEvents(callback: (event_key: string, event: Event) => void): void;
        iterateAnims(callback: (anim_key: string, anim: Animation) => void): void;
    }
    export class Pose {
        data: Data;
        skin_key: string;
        anim_key: string;
        time: number;
        elapsed_time: number;
        dirty: boolean;
        bones: {
            [key: string]: Bone;
        };
        bone_keys: string[];
        slots: {
            [key: string]: Slot;
        };
        slot_keys: string[];
        events: Event[];
        onComplete: Phaser.Signal;
        constructor(data?: Data);
        curSkel(): Skeleton;
        getSkins(): {
            [key: string]: Skin;
        };
        curSkin(): Skin;
        getSkin(): string;
        setSkin(skin_key: string): void;
        getEvents(): {
            [key: string]: Event;
        };
        getAnims(): {
            [key: string]: Animation;
        };
        curAnim(): Animation;
        curAnimLength(): number;
        getAnim(): string;
        setAnim(anim_key: string): void;
        getTime(): number;
        setTime(time: number): void;
        update(elapsed_time: number): void;
        strike(): void;
        iterateBones(callback: (bone_key: string, bone: Bone) => void): void;
        iterateAttachments(callback: (slot_key: string, pose_slot: Slot, skin_slot: SkinSlot, attachment_key: string, attachment: Attachment) => void): void;
    }
}
declare module "dijon/spine/atlas" {
    export class Page {
        name: string;
        w: number;
        h: number;
        format: string;
        min_filter: string;
        mag_filter: string;
        wrap_s: string;
        wrap_t: string;
    }
    export class Site {
        page: Page;
        x: number;
        y: number;
        w: number;
        h: number;
        rotate: number;
        offset_x: number;
        offset_y: number;
        original_w: number;
        original_h: number;
        index: number;
    }
    export class Data {
        pages: Page[];
        sites: {
            [key: string]: Site;
        };
        drop(): Data;
        import(text: string): Data;
        export(text?: string): string;
        importAtlasText(text: string): Data;
        exportAtlasText(text?: string): string;
        importAtlasTextLines(lines: string[]): Data;
        exportAtlasTextLines(lines?: string[]): string[];
        importTpsText(tps_text: string): Data;
        importTpsTextPage(tps_text: string, page_index?: number): Data;
    }
}
declare module "dijon/spine/render-webgl" {
    import * as spine from "dijon/spine/spine";
    import * as atlas from "dijon/spine/atlas";
    export function repeat(format: string, count: number): string[];
    export function flatten(array: any[], out?: any[]): any[];
    export class glShader {
        vs_src: string[];
        fs_src: string[];
        vs: WebGLShader;
        fs: WebGLShader;
        program: WebGLProgram;
        uniforms: {
            [key: string]: WebGLUniformLocation;
        };
        attribs: {
            [key: string]: number;
        };
    }
    export class glVertex {
        type: number;
        size: number;
        count: number;
        type_array: any;
        buffer: WebGLBuffer;
        buffer_type: number;
        buffer_draw: number;
    }
    export class BoneInfo {
        setup_space: spine.Space;
    }
    export class SkinInfo {
        slot_info_map: {
            [key: string]: SlotInfo;
        };
    }
    export class SlotInfo {
        attachment_info_map: {
            [key: string]: AttachmentInfo;
        };
    }
    export class AttachmentInfo {
        type: string;
        constructor(type: string);
    }
    export class RegionAttachmentInfo extends AttachmentInfo {
        constructor();
    }
    export class BoundingBoxAttachmentInfo extends AttachmentInfo {
        constructor();
    }
    export class MeshAttachmentInfo extends AttachmentInfo {
        gl_vertex_position: glVertex;
        gl_vertex_texcoord: glVertex;
        gl_vertex_triangle: glVertex;
        anim_ffd_attachments: any;
        constructor();
    }
    export class SkinnedMeshAttachmentInfo extends AttachmentInfo {
        gl_vertex_position: glVertex;
        gl_vertex_blenders: glVertex;
        gl_vertex_texcoord: glVertex;
        gl_vertex_triangle: glVertex;
        blend_bone_index_array: number[];
        anim_ffd_attachments: any;
        constructor();
    }
    export class RenderWebGL {
        gl: WebGLRenderingContext;
        bone_info_map: {
            [key: string]: BoneInfo;
        };
        skin_info_map: {
            [key: string]: SkinInfo;
        };
        gl_textures: {
            [key: string]: WebGLTexture;
        };
        gl_projection: Float32Array;
        gl_modelview: Float32Array;
        gl_tex_matrix: Float32Array;
        gl_color: Float32Array;
        gl_mesh_shader: glShader;
        gl_ffd_mesh_shader: glShader;
        gl_region_vertex_position: glVertex;
        gl_region_vertex_texcoord: glVertex;
        gl_skin_shader_modelview_count: number;
        gl_skin_shader_modelview_array: Float32Array;
        gl_skin_shader_blenders_count: number;
        gl_skin_shader_vs_src: string;
        gl_ffd_skin_shader_vs_src: string;
        gl_skin_shader: glShader;
        gl_ffd_skin_shader: glShader;
        constructor(gl: WebGLRenderingContext);
        dropData(spine_data: spine.Data, atlas_data: atlas.Data): void;
        loadData(spine_data: spine.Data, atlas_data: atlas.Data, images: {
            [key: string]: HTMLImageElement;
        }): void;
        drawPose(spine_pose: spine.Pose, atlas_data: atlas.Data): void;
    }
    export function vec4Identity(v: Float32Array): Float32Array;
    export function vec4CopyColor(v: Float32Array, color: spine.Color): Float32Array;
    export function vec4ApplyColor(v: Float32Array, color: spine.Color): Float32Array;
    export function mat3x3Identity(m: Float32Array): Float32Array;
    export function mat3x3Copy(m: Float32Array, other: Float32Array): Float32Array;
    export function mat3x3Ortho(m: Float32Array, l: number, r: number, b: number, t: number): Float32Array;
    export function mat3x3Translate(m: Float32Array, x: number, y: number): Float32Array;
    export function mat3x3RotateCosSin(m: Float32Array, c: number, s: number): Float32Array;
    export function mat3x3Rotate(m: Float32Array, angle: number): Float32Array;
    export function mat3x3Scale(m: Float32Array, x: number, y: number): Float32Array;
    export function mat3x3Transform(m: Float32Array, v: Float32Array, out: Float32Array): Float32Array;
    export function mat3x3ApplySpace(m: Float32Array, space: spine.Space): Float32Array;
    export function mat3x3ApplyAtlasPageTexcoord(m: Float32Array, page: atlas.Page): Float32Array;
    export function mat3x3ApplyAtlasSiteTexcoord(m: Float32Array, site: atlas.Site): Float32Array;
    export function mat3x3ApplyAtlasSitePosition(m: Float32Array, site: atlas.Site): Float32Array;
    export function mat4x4Identity(m: Float32Array): Float32Array;
    export function mat4x4Copy(m: Float32Array, other: Float32Array): Float32Array;
    export function mat4x4Ortho(m: Float32Array, l: number, r: number, b: number, t: number, n: number, f: number): Float32Array;
    export function mat4x4Translate(m: Float32Array, x: number, y: number, z?: number): Float32Array;
    export function mat4x4RotateCosSinZ(m: Float32Array, c: number, s: number): Float32Array;
    export function mat4x4RotateZ(m: Float32Array, angle: number): Float32Array;
    export function mat4x4Scale(m: Float32Array, x: number, y: number, z?: number): Float32Array;
    export function glCompileShader(gl: WebGLRenderingContext, src: string[], type: number): WebGLShader;
    export function glLinkProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram;
    export function glGetUniforms(gl: WebGLRenderingContext, program: WebGLProgram, uniforms: {
        [key: string]: WebGLUniformLocation;
    }): {
        [key: string]: WebGLUniformLocation;
    };
    export function glGetAttribs(gl: WebGLRenderingContext, program: WebGLProgram, attribs: {
        [key: string]: number;
    }): {
        [key: string]: number;
    };
    export function glMakeShader(gl: WebGLRenderingContext, vs_src: string[], fs_src: string[]): glShader;
    export function glMakeVertex(gl: WebGLRenderingContext, type_array: any, size: number, buffer_type: number, buffer_draw: number): glVertex;
    export function glSetupAttribute(gl: WebGLRenderingContext, shader: glShader, format: string, vertex: glVertex, count?: number): void;
    export function glResetAttribute(gl: WebGLRenderingContext, shader: glShader, format: string, vertex: glVertex, count?: number): void;
}
declare module "dijon/spine/render-ctx2d" {
    import * as spine from "dijon/spine/spine";
    import * as atlas from "dijon/spine/atlas";
    export class BoneInfo {
    }
    export class SkinInfo {
        slot_info_map: {
            [key: string]: SlotInfo;
        };
    }
    export class SlotInfo {
        attachment_info_map: {
            [key: string]: AttachmentInfo;
        };
    }
    export class AttachmentInfo {
        type: string;
        constructor(type: string);
    }
    export class RegionAttachmentInfo extends AttachmentInfo {
        constructor();
    }
    export class BoundingBoxAttachmentInfo extends AttachmentInfo {
        constructor();
    }
    export class MeshAttachmentInfo extends AttachmentInfo {
        vertex_count: number;
        vertex_position: Float32Array;
        vertex_texcoord: Float32Array;
        vertex_triangle: Uint16Array;
        constructor();
    }
    export class SkinnedMeshAttachmentInfo extends AttachmentInfo {
        vertex_count: number;
        vertex_setup_position: Float32Array;
        vertex_blend_position: Float32Array;
        vertex_texcoord: Float32Array;
        vertex_triangle: Uint16Array;
        constructor();
    }
    export class RenderCtx2D {
        ctx: CanvasRenderingContext2D;
        images: {
            [key: string]: HTMLImageElement;
        };
        skin_info_map: {
            [key: string]: SkinInfo;
        };
        region_vertex_position: Float32Array;
        region_vertex_texcoord: Float32Array;
        region_vertex_triangle: Uint16Array;
        constructor(ctx: CanvasRenderingContext2D);
        dropData(spine_data: spine.Data, atlas_data: atlas.Data): void;
        loadData(spine_data: spine.Data, atlas_data: atlas.Data, images: {
            [key: string]: HTMLImageElement;
        }): void;
        updatePose(spine_pose: spine.Pose, atlas_data: atlas.Data): void;
        drawPose(spine_pose: spine.Pose, atlas_data: atlas.Data): void;
        drawDebugPose(spine_pose: spine.Pose, atlas_data: atlas.Data): void;
        drawDebugData(spine_pose: spine.Pose, atlas_data: atlas.Data): void;
    }
}
declare module "dijon/display" {
    import { Game, GameObjectFactory } from "dijon/core";
    import { Mediator } from "dijon/mvc";
    export class Sprite extends Phaser.Sprite {
        name: string;
        game: Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: Component;
        };
        constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[]);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: Component[]) => void;
        addComponent(component: Component): Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
        flatten(delay?: number): void;
        unFlatten(): void;
        resolution: number;
    }
    export class InvisibleButton extends Sprite {
        private _hitWidth;
        private _hitHeight;
        constructor(x: number, y: number, name: string, w: number, h: number);
        init(): void;
        buildInterface(): void;
        private _addHitRect();
        setSize(w: any, h: any): void;
    }
    export class Group extends Phaser.Group {
        name: string;
        game: Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: Component;
        };
        protected _mediator: Mediator;
        constructor(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: Component[]) => void;
        addComponent(component: Component): Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
        flatten(delay?: number): void;
        unFlatten(): void;
        removeMediator(): void;
        addInternal: GameObjectFactory;
    }
    export class Text extends Phaser.Text {
        lineSpacing: number;
        static DEFAULT_FONT_SIZE: number;
        static DEFAULT_FONT_COLOR: string;
        static DEFAULT_FONT: string;
        static GLOBAL_PADDING_X: number;
        static GLOBAL_PADDING_Y: number;
        game: Game;
        style: any;
        onAnimationComplete: Phaser.Signal;
        protected _canUpdate: boolean;
        protected _repeatTimer: Phaser.TimerEvent;
        protected _delayTimer: Phaser.TimerEvent;
        protected _lowercaseText: string;
        protected _letterTime: number;
        protected _textLength: number;
        protected _textToAnimate: string[];
        constructor(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object);
        setText(text: string): Phaser.Text;
        protected setResolution(): void;
        protected _startTextAnimation(): void;
        protected _updateTextAnimation(): boolean;
        setColor(color: string): void;
        resetColor(): void;
        highlightPhrase(phrase: string, color: string, caseSensitive?: boolean): void;
        animate(letterTime?: number, delay?: number): void;
        stopAnimating: () => void;
        roundPixel: () => void;
        private static _addSettings(obj, settings);
        realHeight: number;
        realWidth: number;
    }
    export class Component {
        game: Game;
        name: string;
        owner: any;
        constructor();
        setOwner(owner: Sprite | Group): void;
        init(): void;
        buildInterface(): void;
        update(): void;
        destroy(): void;
    }
    export class NineSliceImage extends Group {
        key: string;
        texturePath: string;
        fillMiddle: boolean;
        topHeight: number;
        rightWidth: number;
        bottomHeight: number;
        leftWidth: number;
        private __width;
        private __height;
        private _size;
        private _displayLayer;
        private _inputLayer;
        tl: Phaser.Image;
        t: Phaser.TileSprite;
        tr: Phaser.Image;
        r: Phaser.TileSprite;
        br: Phaser.Image;
        b: Phaser.TileSprite;
        bl: Phaser.Image;
        l: Phaser.TileSprite;
        tile: Phaser.TileSprite;
        private _interactiveBacking;
        private _inputEnabled;
        private _currentBounds;
        constructor(x: number, y: number, width: number, height: number, key: string, texturePath: string, fillMiddle?: boolean, topHeight?: number, rightWidth?: number, bottomHeight?: number, leftWidth?: number);
        private _build();
        private _addInteractiveBacking();
        private _setSize();
        private _addInput();
        private _removeInput();
        private _unflatten();
        private _flatten();
        inputEnabled: boolean;
        events: Phaser.Events;
        input: Phaser.InputHandler;
        hSize: number;
        vSize: number;
        setSize(width: number, height: number): void;
    }
    import * as spine from "dijon/spine/spine";
    import * as atlas from "dijon/spine/atlas";
    import { RenderWebGL } from "dijon/spine/render-webgl";
    import { RenderCtx2D } from "dijon/spine/render-ctx2d";
    export class Spine extends Sprite {
        assetName: string;
        skin: string;
        anim: string;
        hOffset: number;
        vOffset: number;
        debug: boolean;
        sWidth: number;
        sHeight: number;
        spineAnimations: string[];
        onAnimationComplete: Phaser.Signal;
        protected spine_data: spine.Data;
        protected atlas_data: atlas.Data;
        protected images: {
            [image_key: string]: HTMLImageElement;
        };
        protected spine_pose: spine.Pose;
        protected render_webgl: RenderWebGL;
        protected render_ctx2d: RenderCtx2D;
        protected bmd: Phaser.BitmapData;
        protected img: Phaser.Image;
        protected frameAnimations: {
            [key: string]: {
                sprite: Phaser.Sprite;
                boneName: string;
                props?: {
                    x?: number;
                    y?: number;
                    angle?: number;
                };
            };
        };
        protected frameAnimationKeys: string[];
        private _bounds;
        private _canUpdate;
        private _paused;
        private _speed;
        private _fps;
        constructor(assetName?: string, x?: number, y?: number, width?: number, height?: number, skin?: string, anim?: string, hOffset?: number, vOffset?: number);
        destroy(): void;
        update(): void;
        render(): void;
        debugDraw(): void;
        nextAnimation(): void;
        private _onAnimationComplete();
        private _updateFrameAnimationByName(animName);
        private _updateFrameAnimation(anim);
        skeleton: spine.Skeleton;
        addFrameAnimation(name: string, sprite: Phaser.Sprite, boneName: string, props?: {
            x?: number;
            y?: number;
            angle?: number;
        }): void;
        getFrameAnimation(name: string): Phaser.Sprite;
        animation: string;
        paused: boolean;
        speed: number;
    }
}
declare module "dijon/utils" {
    import { IBrowser } from "dijon/interfaces";
    export class Util {
        static isNumber(value: string): boolean;
    }
    export class Logger {
        static enabled: boolean;
        static log(instance: any, ...args: any[]): any;
    }
    export class Device {
        static IOS: string;
        static ANDROID: string;
        static UNKNOWN: string;
        static mobile: boolean;
        static cocoon: boolean;
        static mobileOS: string;
        static browser: IBrowser;
        static pixelRatio: number;
        static customPixelRatio: number;
    }
    export class Textures {
        private static game;
        static rect(width?: number, height?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static roundedRect(width?: number, height?: number, radius?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static square(size?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static circle(diameter?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static ellipse(width?: number, height?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
    }
    export class Placeholders {
        private static game;
        static image(x: number, y: number, texture: any, name?: string): Phaser.Image;
        static button(x?: number, y?: number, width?: number, height?: number, autoSize?: boolean, text?: string, callback?: Function, callbackContext?: any, defaultColor?: number, overColor?: number, downColor?: number): Phaser.Sprite;
    }
    export class Notifications {
        static ASSET_MANAGER_DATA_SET: string;
        static ASSET_MANAGER_ASSETS_CLEARED: string;
        static MOUSE_LEAVE_GLOBAL: string;
        static MOUSE_ENTER_GLOBAL: string;
    }
}
declare module "dijon/core" {
    import { Application } from "dijon/application";
    import { INotifier, IPathConfig, IAsset, IGameConfig, ITransitionHandler, IPreloadHandler } from "dijon/interfaces";
    import { Mediator } from "dijon/mvc";
    import { Sprite, Group, Text, Component } from "dijon/display";
    export class AnalyticsManager {
        enabled: boolean;
        category: string;
        constructor(enabled?: boolean, category?: string);
        trackEvent(action?: string, label?: string, value?: string): void;
        trackOmnitureEvent(gameName: string, activity: string, isGameEvent: boolean): boolean;
        active: boolean;
        ga: Function;
    }
    export class AnalyticsException {
        message: string;
        name: string;
        constructor(message: string);
    }
    export class AssetManager implements INotifier {
        protected app: Application;
        private _data;
        private _baseURL;
        private _pathObj;
        private _assetPath;
        private _dataPath;
        private _spriteSheetPath;
        private _imgPath;
        private _spinePath;
        private _fontPath;
        private _bitmapFontPath;
        private _physicsPath;
        private _audioSpritePath;
        private _soundPath;
        private _soundDecodingModifier;
        private _res;
        private _resolution;
        private _loadData;
        private _autoLoadData;
        private _completedLoads;
        private _requiredData;
        private _currentAssetList;
        private _hasFiles;
        private _soundsToDecode;
        private _isLoadingQueue;
        private _fileCompleteProgress;
        private _maxPercent;
        private _numSounds;
        private _soundsDecoded;
        private _cacheBustVersion;
        game: Game;
        onLoadStart: Phaser.Signal;
        onFileStart: Phaser.Signal;
        onFileComplete: Phaser.Signal;
        onLoadComplete: Phaser.Signal;
        onLoadCompleteAndAudioDecoded: Phaser.Signal;
        onBackgroundLoadStart: Phaser.Signal;
        onBackgroundFileStart: Phaser.Signal;
        onBackgroundFileComplete: Phaser.Signal;
        onBackgroundLoadComplete: Phaser.Signal;
        onBackgroundLoadCompleteAndAudioDecoded: Phaser.Signal;
        static AUDIO: string;
        static SOUND: string;
        static AUDIO_SPRITE: string;
        static IMAGE: string;
        static ATLAS: string;
        static TEXT: string;
        static JSON: string;
        static TILEMAP: string;
        static TILEDMAP: string;
        static TILEDMAP_TILESET: string;
        static TILEDMAP_LAYER: string;
        static PHYSICS: string;
        static SPINE: string;
        static ASSET_LIST: string;
        static RESOLUTION_2X: string;
        static RESOLUTION_3X: string;
        constructor();
        private _init();
        private _parseAssetList(key, list);
        private _loadAssets(id);
        private _backgroundLoadStart();
        private _backgroundFileComplete(progress, id, fileIndex, totalFiles);
        private _backgroundLoadComplete();
        private _gameLoadStart();
        private _gameFileStart();
        private _gameFileComplete(progress, id?, fileIndex?, totalFiles?);
        private _setBaseTextureResolution(texture);
        private _gameLoadComplete();
        private _checkSoundDecoding(eventToDispatch);
        private _onSoundDecoded(sound);
        private _getAssetKey(fileName);
        private _getExtension(fileName);
        private _getResolution(res);
        private _loadAsset(asset);
        private _parseData();
        private _getCacheBustedUrl(url);
        loadText(url: string): Phaser.Loader;
        loadJSON(key: string): Phaser.Loader;
        loadTilemap(key: string): Phaser.Loader;
        loadTiledmap(key: string, assets: IAsset[]): any;
        loadTiledmapImage(key: string, tilesetImageType: string, asset: IAsset): void;
        loadPhysics(key: string): Phaser.Loader;
        loadAtlas(url: string, resolution?: any): Phaser.Loader | string;
        loadImage(url: string, resolution?: any): Phaser.Loader | string;
        loadSpine(url: string, resolution?: any): string | void;
        loadBitmapFont(url: string, resolution?: any): void;
        loadAudio(url: string, exts: any, isAudioSprite: boolean): void;
        loadSound(url: string, exts: any): void;
        loadAudioSprite(url: string, exts: any): void;
        loadAssets(id: string, background?: boolean): void;
        loadQueue(): void;
        getLoadProgress(): number;
        allSoundsDecoded(): boolean;
        setData(data: Object): void;
        clearAssets(id: string, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean, clearJSON?: boolean): void;
        clearAsset(asset: IAsset, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean, clearJSON?: boolean): void;
        hasLoadedAssets(id: string): boolean;
        sendNotification(notificationName: string, notificationBody?: any): void;
        baseURL: string;
        paths: IPathConfig;
        resolution: number;
        soundDecodingModifier: number;
        cacheBustVersion: string | number;
    }
    export class AudioManager {
        game: Game;
        private _defaultVolume;
        private _sprites;
        private _sounds;
        private _markerLookup;
        constructor();
        private _addAudio(key, isAudioSprite?);
        private _parseAudioSprite(key, audioSprite);
        private _allowMultiple(sound);
        private _getKeyFromMarkerName(marker);
        private _playSpriteMarker(key, marker, volume?, loop?, forceRestart?);
        private _stopSpriteMarker(key, marker);
        private _stopSound(sound);
        addAudio(key: string, isAudioSprite?: boolean): Phaser.AudioSprite | Phaser.Sound;
        addSound(key: any): Phaser.Sound;
        addAudioSprite(key: string): Phaser.AudioSprite;
        playAudio(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playDelayedAudio(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playSound(key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playSpriteMarker(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playDelayedSound(delay: number, key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playDelayedSpriteMarker(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        stopAudio(marker: string): void;
        stopSound(key: string): void;
        stopSpriteMarker(marker: string): void;
        removeSound(key: any): boolean;
        removeSprite(key: string): void;
        fade(sound: Phaser.Sound, volume: number, time: number, stop?: boolean): Phaser.Tween;
        defaultVolume: number;
    }
    export class Game extends Phaser.Game {
        app: Application;
        config: IGameConfig;
        asset: AssetManager;
        sequence: SequenceManager;
        transition: TransitionManager;
        storage: StorageManager;
        audio: AudioManager;
        analytics: AnalyticsManager;
        add: GameObjectFactory;
        onWorldInputDisabled: Phaser.Signal;
        onWorldInputEnabled: Phaser.Signal;
        backgroundLayer: Group;
        gameLayer: Group;
        uiLayer: Group;
        stageLayer: Group;
        constructor(config: IGameConfig);
        boot(): void;
        addPlugins(): void;
        setFactoryDefaultLayer(newLayer: Phaser.Group): void;
        protected addLayers(): void;
        protected addMouseCallbacks(): void;
        protected mouseOut(): void;
        protected mouseOver(): void;
        disableElementInput(el: any): any;
        enableElementInput(el: any): any;
        disableInput(group: Phaser.Group): any;
        enableInput(group: Phaser.Group): any;
        disableGameInput(): void;
        enableGameInput(): void;
        changeState(toState: string): void;
        addToGame: GameObjectFactory;
        addToBackground: GameObjectFactory;
        addToUI: GameObjectFactory;
        addToStage: GameObjectFactory;
        addToWorld: GameObjectFactory;
    }
    export class GameObjectFactory extends Phaser.GameObjectFactory {
        protected _targetGroup: Phaser.Group;
        protected _defaultLayer: Phaser.Group;
        existing(object: any): any;
        image(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Image;
        sprite(x?: number, y?: number, key?: string | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Sprite;
        creature(x?: number, y?: number, key?: string, mesh?: any, group?: Phaser.Group): any;
        group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Phaser.Group;
        physicsGroup(physicsBodyType?: number, parent?: any, name?: string, addToStage?: boolean): Phaser.Group;
        spriteBatch(parent?: any, name?: string, addToStage?: boolean): Phaser.SpriteBatch;
        tileSprite(x?: number, y?: number, width?: number, height?: number, key?: string, frame?: string | number, group?: Phaser.Group): Phaser.TileSprite;
        rope(x?: number, y?: number, key?: string, frame?: string | number, points?: Phaser.Point[], group?: Phaser.Group): Phaser.Rope;
        text(x?: number, y?: number, text?: string, style?: Phaser.PhaserTextStyle, group?: Phaser.Group): Phaser.Text;
        button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: Object, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?: Phaser.Group): Phaser.Button;
        graphics(x?: number, y?: number, group?: Phaser.Group): Phaser.Graphics;
        bitmapText(x?: number, y?: number, font?: string, text?: string, size?: number, group?: Phaser.Group): Phaser.BitmapText;
        dSprite(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[], group?: Phaser.Group): Sprite;
        dGroup(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number, group?: Phaser.Group): Group;
        dText(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object, group?: Phaser.Group): Text;
        spine(assetName?: string, x?: number, y?: number, width?: number, height?: number, skin?: string, anim?: string, hOffset?: number, vOffset?: number, group?: Phaser.Group): any;
        setDefaultLayer(value: Phaser.Group): void;
        defaultLayer: Phaser.Group;
        targetGroup: Phaser.Group;
    }
    export class SequenceManager {
        game: Game;
        private _defaultInterval;
        constructor();
        private _executeMethod(sequence, context, callback, callbackContext);
        run(sequence: Array<Function>, context: Object, interval: number, completeCallback: Function, completeCallbackContext: Object): void;
    }
    export class State extends Phaser.State {
        protected _audio: Phaser.Sound[];
        protected _mediator: Mediator;
        constructor();
        init(): void;
        preload(): void;
        create(): void;
        shutdown(removeMediator?: boolean, removeAudio?: boolean): void;
        listBuildSequence(): Function[];
        buildInterface(): void;
        afterBuildInterface(): void;
        startBuild(): void;
        preAfterBuild(): void;
        afterBuild(): void;
        addAudio(track: Phaser.Sound): Phaser.Sound;
        removeAudio(): void;
        removeMediator(): void;
        preloadID: string;
        buildInterval: number;
        add: GameObjectFactory;
        app: Application;
        game: Game;
    }
    export class StorageManager {
        game: Game;
        private _localStorageAvailable;
        constructor();
        private _init();
        private _getIsLocalStorageAvailable();
        private _getString(data);
        getFromLocalStorage(key: string, isJSON?: boolean): any;
        saveToLocalStorage(key: string, value: string | Object): boolean;
        clearFromLocalStorage(key: string): boolean;
    }
    export class TransitionManager {
        game: Game;
        onTransitionOutComplete: Phaser.Signal;
        onTransitionInComplete: Phaser.Signal;
        private _transition;
        private _transitions;
        private _exceptions;
        private _fromState;
        private _toState;
        constructor();
        private _add(id, outHandler, preloadHandler, inHandler);
        private _getTransition(inState, outState);
        private _transitionInComplete();
        private _transitionOutComplete();
        private _preloadComplete();
        private _clearTransition();
        add(fromState: string, toState: string | IPreloadHandler, outHandler?: ITransitionHandler, preloadHandler?: IPreloadHandler, inHandler?: ITransitionHandler): void;
        addAll(handler: IPreloadHandler): void;
        addException(state: string): void;
        remove(fromState: string, toState?: string): void;
        to(state: string): void;
        transitionIn(): void;
        canTransitionOut(): boolean;
        transitionOut(): void;
    }
}
declare module "dijon/application" {
    import { Game } from "dijon/core";
    import { Mediator, Model } from "dijon/mvc";
    import { INotifier, IObserver } from "dijon/interfaces";
    export class Application implements INotifier {
        protected static instance: any;
        protected static SINGLETON_MSG: string;
        game: Game;
        protected _mediator: Mediator;
        protected _models: {
            [name: string]: Model;
        };
        protected _mediators: {
            [name: string]: Mediator;
        };
        protected _observerMap: {
            [name: string]: IObserver[];
        };
        private static _hashQuery;
        constructor();
        protected windowHashChange(): void;
        protected createGame(): void;
        protected startGame(): void;
        addPlugins(): void;
        registerModel(model: Model): Model;
        retrieveModel(modelName: string): Model;
        removeModel(modelToRemove: Model): void;
        registerMediator(mediator: Mediator): void;
        retrieveMediator(mediatorName: string): Mediator;
        removeMediator(mediatorToRemove: Mediator): void;
        registerObserver(observer: IObserver): void;
        removeObserver(notificationName: string, observerToRemove: IObserver): void;
        sendNotification(notificationName: string, notficationBody?: any): void;
        private _notifyObservers(notification);
        private static _getHashQuery();
        static getInstance(): Application;
        static queryVar(variableId: string): any;
    }
}
