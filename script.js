class Personnage {

    constructor(pseudo, classe, sante, attaque, niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }

    get informations () {
        return this.pseudo + " " + "(" + this.classe + ")" + " a " + this.sante + " points de vie et est au niveau " + this.niveau;
    }

    evoluer(){
        ++this.niveau;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }

    verifierSante(){
        if(this.sante <= 0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu.");
        }
    }
}




class Magicien extends Personnage{


    constructor(pseudo){
        super(pseudo, "Magicien", 170, 90, 1);
        this.pseudo = pseudo;
    }

    attaquer(Personnage){
        Personnage.sante = Personnage.sante - this.attaque;
        console.log(this.pseudo + " attaque " + Personnage.pseudo + " en lançant un sort " + "(" + this.attaque + " dégâts" + ")");
        this.evoluer();
        Personnage.verifierSante();
    }

    coupSpecial(Personnage){
        Personnage.sante = Personnage.sante - (this.attaque * 5);
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + Personnage.pseudo + " " + "(" + (this.attaque * 5) + " dégâts" + ")" );
        this.evoluer();
        Personnage.verifierSante();
        
    }

}


class Guerrier extends Personnage{


    constructor(pseudo){
        super(pseudo, "Guerrier", 350, 50, 1);
        this.pseudo = pseudo;
    }

    attaquer(Personnage){
        Personnage.sante = Personnage.sante - this.attaque;
        console.log(this.pseudo + " attaque " + Personnage.pseudo + " avec son épée " + "(" + this.attaque + " dégâts" + ")");
        this.evoluer();
        Personnage.verifierSante();
    }

    coupSpecial(Personnage){
        Personnage.sante = Personnage.sante - (this.attaque * 5);
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + Personnage.pseudo + " " + "(" + (this.attaque * 5) + " dégâts" + ")" );
        this.evoluer();
        Personnage.verifierSante();
        
    }


}


var gandalf = new Magicien('Gandalf');
var thor = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);



