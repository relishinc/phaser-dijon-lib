import { Group, Text, Sprite } from '../display';
import { State } from '../core';

export class PrefabBuilder {
   
    // All classes you intended to instantiate need to exist with this object.
    // If there type here does not match the type parem from the import file, 
    // then the Builder will skip over that class.
    public static prefabClasses: {} = {
        group: Group,
        text: Text,
        sprite: Sprite
    };

    public static addPrefabClass(newClass: any, importName: string, overrideExisting: boolean = false): void {
        if (PrefabBuilder.prefabClasses.hasOwnProperty(importName)) {
            if (overrideExisting) {
                PrefabBuilder.prefabClasses[importName] = newClass;
            }
            else {
                console.warn("Entry for: " + importName + " already exists in Prefab Classes");
                console.warn("Use overrideExisting flag if you wish replace existing entry");
            }
           
        }
        else {
            PrefabBuilder.prefabClasses[importName] = newClass;
        }
    } 
    
    // Creates all objects for a given scene, on that scene.    
    public static createSceneFrom(data: {prefabs: any[]}, scene: State): void {
        if (scene === null) {
            return;
        }

        scene.prefabs = [];
        scene.groups = [];
        PrefabBuilder.createPrefabObjects(data, scene);
    }

    // Create a mass of prefabs from the given data, adding them to the scene if their parent is set to 'state'.  
    public static createPrefabObjects(data: any, scene: State): any {
        if (scene === null) {
            return;
        }
        if (data !== null) {
            // Iterate over prefab data.
            for (let i = 0; i < data.prefabs.length; i++) {
                if (PrefabBuilder.prefabClasses.hasOwnProperty(data.prefabs[i].type)) {
                    // create prefab
                    let prefab = this.createPrefab(data.prefabs[i]);
                    if (prefab !== null) {
                        // If the parent is not the state, try to find the parent by its name.
                        if (data.prefabs[i].parent !== "state") {
                            // Try to find a parent group first.
                            if (scene.groups[data.prefabs[i].parent] !== null && scene.groups[data.prefabs[i].parent] !== undefined) {
                                scene.groups[data.prefabs[i].parent].addInternal.existing(prefab);
                            }
                            // If not found, try to find a parent prefab.
                            else {
                                if (scene.prefabs[data.prefabs[i].parent] !== null && scene.prefabs[data.prefabs[i].parent] !== undefined) {
                                    scene.prefabs[data.prefabs[i].parent].addChild(prefab);
                                    // If we also want to assign this prefab to its parent script for custom handling, we do so now.
                                    // (Example: Assigning a Text component to a Button component in order to tint the text to match button states)
                                    if (data.prefabs[i].assignToParent === true) {
                                        scene.prefabs[data.prefabs[i].parent].assignPrefab(prefab);
                                    }
                                }
                                // If no parent prefab found, add to state.
                                else {
                                    scene.add.existing(prefab);
                                }
                            }
                        }
                        else {
                            scene.add.existing(prefab);
                        }
                        if (data.prefabs[i].type === "group") {
                            scene.groups[prefab.name] = prefab;
                        }
                        else {
                            scene.prefabs[prefab.name] = prefab;
                        }
                    }    
                }
                else {
                    console.warn("No PrefabClasses entry found for: " + data.prefabs[i].type);
                }
            }
        }
    }
    
    // Create a single prefab from the supplied data.
    public static createPrefab(data: any): any {
        let prefab: any = null;
        // create object according to its type
        if (this.prefabClasses.hasOwnProperty(data.type)) {
            prefab = this.prefabClasses[data.type].CreateFromData(data);
        }
        return prefab;
    }
}