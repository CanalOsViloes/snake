class Cobra{
  constructor(x,y,tamanho){
    this.posicao = createVector(x,y);
    this.direcao = createVector(0,1);
    this.velocidade = createVector(tamanho,tamanho);
    this.tamanho = tamanho;
  }
  
  desenha(){
    rect(this.posicao.x,this.posicao.y,this.tamanho);
  }
  
  anda(){
    this.posicao.add(this.direcao.x*this.tamanho,
                     this.direcao.y*this.tamanho);
  }
  
  controla(){
    if(keyIsDown(LEFT_ARROW)){
      if(this.direcao.x==0 && this.direcao.y!=0){
        this.direcao.x=-1;
        this.direcao.y=0;
      }
      
    }else if(keyIsDown(RIGHT_ARROW)){
      if(this.direcao.x==0 && this.direcao.y!=0){
        this.direcao.x=1;
        this.direcao.y=0;
      }
      
    }else if(keyIsDown(DOWN_ARROW)){
      if(this.direcao.y==0 && this.direcao.x!=0){
        this.direcao.x=0;
        this.direcao.y=1;
      }
      
    }else if(keyIsDown(UP_ARROW)){
      if(this.direcao.y==0 && this.direcao.x!=0){
        this.direcao.x=0;
        this.direcao.y=-1;
      }
    }else if(keyIsDown(ENTER)){
      this.comer();
    }
  }
  
 
}
