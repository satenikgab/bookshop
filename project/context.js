import React, { act, useContext } from "react"
export const UserContext = React.createContext()


export const initialState = {
   items:[ {id:101,title:"The Philosophy",price:40,photo:"https://koolskoolbookstore.com/cdn/shop/products/9781405353298-2_1024x1024.jpg?v=1628225241"},
      {id:102,title:"The Philosophy",price:45,photo:"https://sp-uploads.s3.amazonaws.com/uploads/services/3333599/20220319112923_6235be934cbbd_the_philosophy_book__big_ideas_simply_explained__by_dk__will_buckingham__douglas_burnham__peter_j._king__clive_hill__marcus_weeks__john_marenbon__z_lib.org_page0.png"},
      {id:103,title:"The Psychology",price:48,photo:"https://static.periplus.com/sc_7PJBM6UkK1G4oThCsQCI0JQqd1p1wqfcE8s3W.b1nEZpOQd5hW3yW4ZPdWTMdw--"},
      {id:104,title:"The Politics",price:42,photo:"https://static.periplus.com/g_9BIwYSPt1.Ib4_5Sva246BiD1ptCOpewwch_963M_VnPH57DlgaQLx50bUuYANA--"},
      {id:105,title:"The Feminism",price:52,photo:"https://static.periplus.com/uEgX8WERmfHlT6lQXPUYrvXast7Hel1JyDLjIUPI8cHy5v2VswWrTNKi_KzO188jA--"},
      {id:106,title:"The Literature",price:34,photo:"https://static.periplus.com/nNeSUnuFbyFRRjmdWfH9b7khBQ4g7GTxI.YQSgFzIaQJodR_MP20Y9z7ZUhDBR9ow--"},
      {id:107,title:"The Bible book",price:47,photo:"https://static.periplus.com/l3QK4OeWg2DUVMM5y1bYvpyGTID1BUju68l0tJo2Koy9vRVKS_iNh_AYdEbEh_Rpg--"},
      {id:108,title:"The Religions",price:50,photo:"https://static.periplus.com/hpUJO7maoOFQ8zHAiSpGim2ziJwRYpAcrERM2mKThsPvPeDENlukj7BY0epszGKmA--"},
    ],
    basket: [],
    total : 0
    
}



export const reducer = ( state , action ) => {
    switch (action.type) {
        case "DELETE":
            const itemToDelete = state.basket.find(x => x.id === action.payload.id);
            return {
                ...state , 
                basket: state.basket.filter(x => x.id != action.payload.id),
                total: state.total - itemToDelete.price*itemToDelete.count
            }
            
        case "MOVE":
            let found = state.items.find(x => x.id === action.payload.id)
            if (!found) {
                return state
            }
        
            let basketItem = state.basket.find(x => x.id === action.payload.id)
            if (basketItem) {
                return {
                    ...state,
                    basket: state.basket.map(it => 
                        it.id === action.payload.id 
                            ? { ...it, count: it.count + 1, subtotal: (it.count + 1) * it.price }
                            : it
                    ),
                    total: state.total + found.price
                }
            } else {
                return {
                    ...state,
                    items: state.items,
                    basket: [...state.basket, { ...found, count: 1, subtotal: found.price }],
                    total: state.total + found.price
                }
            }

        
        case "ADD":
            const newItemToAdd = state.items.find(item => item.id === action.payload.id)
            const existingItemInBasket = state.basket.find(item => item.id === action.payload.id)
                 if (existingItemInBasket) {
                     const updatedBasket = state.basket.map(item =>
                       item.id === action.payload.id ? { ...item, count: item.count + 1, subtotal: (item.count + 1) * item.price }: item)

                      return {
                           ...state,
                           basket: updatedBasket,
                           total: state.total + newItemToAdd.price
                     }
               } else {
                         return {
                             ...state,
                             basket: [...state.basket, { ...newItemToAdd, count: 1, subtotal: newItemToAdd.price }],
                             total: state.total + newItemToAdd.price
                      }
            }

       
        case "DECREASE":
            const itemToDecrease = state.basket.find(item => item.id == action.payload.id)

            if (itemToDecrease) {
             
              let updatedBasket = state.basket.map(item =>
                 item.id == action.payload.id && item.count > 1
                    ? { ...item, count: (item.count - 1)>1?item.count - 1:1, 
                        subtotal: ((item.count-1)*item.price)>item.price?(item.count-1)*item.price:item.price }
                                    : item
                            )
                    
                        
        
                return {
                    ...state,
                    basket: updatedBasket,
                    total: (state.total - itemToDecrease.price)>itemToDecrease.price ?state.total - itemToDecrease.price:itemToDecrease.price
                }
            } else {
                return state
            }
       
       

        default: return state
    }

}