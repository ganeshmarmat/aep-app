export interface MenuItem {
  id:number;
  sequence?:number;
  orderBy?:number;
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    isSelected:boolean;
    children?: MenuItem[];
  }