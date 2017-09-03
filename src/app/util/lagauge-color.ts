export class LanguageColor{
    public static  get_lang_color(lang:string){
        let color="#f1e05a";
        switch (lang){
        case "JavaScript":
        color="#f1e05a";
        break;
        case "PHP":
        color="#4F5D95"
        break;
        
        }
        return  color;
    }
   
}