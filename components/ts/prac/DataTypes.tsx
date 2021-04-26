


const TsDataTypes = () => {
    //simple data type:
    const N: number = 1

    //object and various type in it:like tuple
    const UserObject: {name: string; nickname: string; role:[boolean, string]} = { name: "curious", nickname: "jeager", role: [true, "admin"]}
    const Product:{id: string; price: number; hashtag: string[], other:{description: string; tax: number}} =
        {id: 'idxwtdg13253', price: 10000, hashtag:['nextjs', 'react'], other:{description:'cool', tax: 40}}
    
    //enum:
    enum Days { Mon="Mon", Tue="Tue", Wend="Wend", Thur="Thur", Fri="Fri", Sat="Sat", Sun="Sun"};

    //literal: literalFlag :'just-weekday' | 'just-weekend' | 'all'
    //type: change "literalFlag :'just-weekday' | 'just-weekend' | 'all' " to " literalFlag :SeperateWeekPrint"
    type SeperateWeekPrint='just-weekday' | 'just-weekend' | 'all';
    const IterDays = (Days, literalFlag :SeperateWeekPrint) => {
        
        if(literalFlag === 'just-weekday') {
           ConsoleIter([Days.Mon, Days.Tue, Days.Wend, Days.Thur, Days.Fri])
        }else if(literalFlag === 'just-weekend'){
            ConsoleIter([Days.Sat, Days.Sun])
        }else{
            for (const value in Days) {   
                ConsoleIter(value)
        }
    }
    }
     //union: 
    const ConsoleIter = (value: string | number | boolean | object | string[] | any[] ) => {
        if(typeof value === 'object') {
            console.log(Object.values(value))
        }else{
            console.log(`Value: ${value}`);
        }
        
    }
    
    IterDays(Days, "just-weekday")
    ConsoleIter({"date": new Date(), "todo": "coding"})

    //any:
    const article:any[] = ["soccer", "win america .... ", 20210530] 
    
    
   
   
    return(
        <>
        <div className="pr-8 pl-8">
            <div>
            {typeof N}:{N}
            </div>
            <br />
            <div>
            {typeof UserObject}:{UserObject.name}, {UserObject.nickname}, {UserObject.role.map(r => r)}
            </div>
            <br />
            <div>
            {typeof Product}:{Product.id}, {Product.hashtag.length}, {Product.other.description}
            </div>
            <br />
            <div>
            {Product.hashtag.map(p => p)}
            </div>
            <br />
            <div>
            {typeof article}: {article.map(a => a)}
            </div>
        </div>
        </>
    )
}
export default TsDataTypes