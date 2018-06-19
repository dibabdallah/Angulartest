export class AppareilService {


    postblogs = [
        {
            id: 1,
          name: 'mon premier post',
          
        },
        {   id: 2,
          name: 'mon duxieme post ',
          
        },
        {   id: 3,
          name: 'encore un dernier post',
          
        }
      ];
      

      getAppareilById(id: number) {
        const postblog = this.postblogs.find(
          (s) => {
            return s.id === id;
          }
        );
        return postblog;
    }
      switchOnAll() {
        for(let postblog of this. postblogs) {
            postblog.name  = 'allumé ';
            document.body.style.backgroundColor  = 'red';
            document.body.style.color  = 'yellow';
            
        }
    }
    switchOffAll() {
        for(let postblog of this. postblogs ) {
          postblog.name = 'éteint';
          document.body.style.backgroundColor  = "green";
          document.body.style.color  = '#FFFFFF';
          
    }
}
switchOnOne(i: number) {
    this.postblogs[i].name = 'allumé';
    document.body.style.backgroundColor  = "green";
}

switchOffOne(i: number) {
    this.postblogs[i].name = 'éteint';
    document.body.style.backgroundColor  = 'red';
}

}