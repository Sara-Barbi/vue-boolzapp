let app = new Vue ({
    el: ("#root"),
    data:{
        contatore: 0,
        contacts: [
            {
            name: 'Michele',
            avatar: '1',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU",
            visible: true,
            messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
            },
            {
            name: 'Fabio',
            avatar: '2',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtlLjWebn0rGCZAvfODfKITSZLytao-Bd42Zv5CrcNdndVDeWBw_HEZ9eYTC2YuLuZsE&usqp=CAU",
            visible: true,
            messages: 
                    [
                       {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                       },
                       {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                       },
                       {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                       }
                    ],
            },

            {
            name: 'Samuele',
            img:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            avatar: '3',
            visible: true,
            messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
            },

            {
            name: 'Luisa',
            avatar: '4',
            img: "https://media.gettyimages.com/photos/caroline-wozniacki-attends-the-crown-img-tennis-party-on-january-19-picture-id1200475852?s=612x612" ,
            visible: true,
            messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
            },

        ],    
        contenuto:" ", 
        search:"",
        
    },
  
  
    methods:{
       ChatPrincipale: function(indice){
          
           this.contatore= indice;

           return this.contatore
           
       },
       pushaRisposta :function(){
        let rispostaUtente={
            date: dayjs().format('DD/MM/YYYY HH:mm:ss '),
            text: "ok",
            status: "received"
        }
      
      
        this.contacts[this.contatore].messages.push(rispostaUtente)
       },


       pushaContenuto: function(){
            
        
            let oggetto={
               date: dayjs().format('DD/MM/YYYY HH:mm:ss '),
               text: this.contenuto,
               status: "sent"
            };
            
            
            this.contacts[this.contatore].messages.push(oggetto);
            this.contenuto ="";
            
            setTimeout(this.pushaRisposta,1000);
         
            
       },
       
       cerca:function(){
             
        this.contacts.forEach(element => {          
            if(element.name.toLowerCase().includes(this.search.toLowerCase())){
                element.visible = true;
            }else{
                element.visible = false;
            }
            
        });
            
       },
       classe:function(contatto){
           if(contatto.visible==false){
               return "d-none"
           }
       }
    },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        
    
        
       
    
       

    


    
    
})
