const kid = document.getElementById('kid');
const parents = document.querySelector('#parents');
const grandParents = document.querySelector('#grandParents');
const picture = document.querySelectorAll('.picture');
const body = document.getElementById('body');
const pic = document.querySelectorAll('.picContainer');
const familyMain = document.getElementById('familyMain');
let openCard =0;
let footer = document.getElementById('footer');

const familyObj = {
  Alice: {
    personName: "Алиса Торицина",
    personFotoArr: ['url(./images/Alice/Alice1.jpg)','url(./images/Alice/Alice2.jpg)','url(./images/Alice/Alice3.jpg)'],
    personInterest: ['Гурман и любитель красивой жизни','Решает сложные задачи','Настоящая принцесса']
  },
  


};

const closeCard = ()=>{
  
  openCard.parentNode.removeChild(openCard); 
  openCard=0; 
}; 




function setHeightToPicture () {
   for (k = 0;k<picture.length;k++){
     picture[k].style.height = `${picture[k].offsetWidth}`;
   }
  };

setHeightToPicture();

document.addEventListener('scroll',()=>{

  const scrollFirstLine = kid.offsetTop-300;
  const scrollPosition = window.scrollY;

   if (scrollPosition > scrollFirstLine){
     body.classList.remove('body');
     body.classList.add('newBody');
     for (i=0;i<pic.length;i++)
     {pic[i].style.opacity = `1`;
     pic[i].style.transition = `700ms`;}
   }else{
     body.classList.remove('newBody');
     body.classList.add('body');
     for (i=0;i<pic.length;i++)
     {pic[i].style.opacity = `0`;
     pic[i].style.transition = `700ms`;}
   }
})

//creating a person card
body.addEventListener('click', el=>{
  
  if(el.target.classList.contains('picture')){
    if(openCard === 0){
    openCard = document.createElement('div');
    body.insertBefore(openCard,familyMain);
    openCard.classList.add('openCard');
    //creating a close button
    const closeButtonDiv = document.createElement('div');
    const xButtonSpan = document.createElement('span');
    openCard.appendChild(closeButtonDiv);
     closeButtonDiv.classList.add('closeButtonDiv');
     closeButtonDiv.appendChild(xButtonSpan);
     xButtonSpan.classList.add('xButtonSpan');
     xButtonSpan.innerHTML = 'X';
      closeButtonDiv.addEventListener('click', ()=>{
        closeCard()
      });

      //func for pushing the content to openCard according to selected person 
      const openCardContent = (arg)=>{
    
        let iter=0;
        divForPhoto.style.backgroundImage = familyObj[arg].personFotoArr[iter];
        personNameP.innerHTML = familyObj[arg].personName;
        shortDescriptionP.innerHTML = familyObj[arg].personInterest[iter];
        
        
        forwardSwitcher.addEventListener('click', ()=>{
          
           if(iter<familyObj[arg].personFotoArr.length-1){
             iter=iter+1;
            }else{
             iter=0;
           };
          divForPhoto.style.backgroundImage = familyObj[arg].personFotoArr[iter];
          personNameP.innerHTML = familyObj[arg].personName;
          shortDescriptionP.innerHTML = familyObj[arg].personInterest[iter];
        })

        backSwitcher.addEventListener('click', ()=>{
          if(iter>0){
            iter=iter-1;
          }else{
            iter = familyObj[arg].personFotoArr.length-1;
          }
          divForPhoto.style.backgroundImage = familyObj[arg].personFotoArr[iter];
          personNameP.innerHTML = familyObj[arg].personName;
          shortDescriptionP.innerHTML = familyObj[arg].personInterest[iter];
        })
        
            
    
      }
      
      const divForCardContent = document.createElement('div');
      openCard.appendChild(divForCardContent);
      divForCardContent.classList.add('divForCardContent');
      
      
      //photo and switchers part
      const divForPhotoAndSwitchers = document.createElement('div');
      divForCardContent.appendChild(divForPhotoAndSwitchers);
      divForPhotoAndSwitchers.classList.add('divForPhotoAndSwitchers');
      
      //description part
      const divForShortDescription = document.createElement('div');
      divForCardContent.appendChild(divForShortDescription);
      divForShortDescription.classList.add('divForShortDescription');
      
      //photo container
      const divForPhoto = document.createElement('div');
      divForPhotoAndSwitchers.appendChild(divForPhoto);
      divForPhoto.classList.add('divForPhoto');

      const personNameP = document.createElement('p');
      divForShortDescription.appendChild(personNameP);
      personNameP.classList.add('personNameP');

      //p container for short description
      const shortDescriptionP = document.createElement('p');
      divForShortDescription.appendChild(shortDescriptionP);
      shortDescriptionP.classList.add('shortDescriptionP');

      const divForSwitchers = document.createElement('div');
      divForShortDescription.appendChild(divForSwitchers);
      divForSwitchers.classList.add('divForSwitchers');
      

      // back and forward switchers for card
      const backSwitcher = document.createElement('p');
      const forwardSwitcher = document.createElement('p');
      divForSwitchers.appendChild(backSwitcher);
      divForSwitchers.appendChild(forwardSwitcher);
      backSwitcher.classList.add('switchersP');
      forwardSwitcher.classList.add('switchersP');

      backSwitcher.innerHTML = '<';
      forwardSwitcher.innerHTML = '>';

      


       
      switch(el.target.id) {
        case "kidPic": 
        openCardContent('Alice');
        break;
        case "momPic": 
        openCardContent('Agatha');
        break;
        case "dadPic": 
        openCardContent('Alice');
        break;
        case "gm1Pic": 
        openCardContent('Alice');
        break;
        case "gp1Pic": 
        openCardContent('Alice');
        break;
        case "gm2Pic": 
        openCardContent('Alice');
        break;
        case "gp2Pic": 
        openCardContent('Alice');
        break;
        
      }

      

            





  }
}
})



footer.addEventListener('click',()=>{

  window.scrollTo({top: 0, behavior: 'smooth'});
  
  });  
