class CompteEpargne extends Compte {
    constructor(titulaire, montant = 50, taux = 0.005, rythme = 5000) {
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;
        // Intérêt de taux toutes les 5 secondes 
        setInterval(() => {
            this.solde *= 1+this.taux;
        }, this.rythme);
    }
}