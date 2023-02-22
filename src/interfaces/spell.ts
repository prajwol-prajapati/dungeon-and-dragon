export interface ISpell {
  name: string;
  index: string;
}

export interface ISpellDetail {
  higher_level: [any],
  index:string,
  name:string,
  desc:Array<string>,
  range:string,
  components:Array<string>,
  ritual:boolean,
  duration:string,
  concentration:boolean,
  casting_time:string,
  level: string,
  damage:{
    damage_type:ITypeInfo,
    damage_at_character_level:any
  },
  dc:{
     dc_type:ITypeInfo,
     dc_success:string
  },
  school:ITypeInfo,
  classes:Array<ITypeInfo>,
  subclasses:Array<ITypeInfo>,
  url:string
}

export interface ITypeInfo {
index:string,
name:string,
url?:string
}