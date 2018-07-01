# SIA API


### Iniciar dimoni de Sia: siad

### Instal·lar SIA opció 1

* última versió de GOLANG
* triar els paths correctes GOPATH GOROOT

```bash
$ export GOPATH=$HOME/gopath
$ export GOROOT=$HOME/go
$ export PATH=$PATH:$HOME/go/bin

```

* Obtenir el codi font

```bash
$ go get -u github.com/NebulousLabs/Sia
$ cd gopath/src/github.com/NebulousLabs/Sia/
$ make dependencies
$ make dev
```

### Instal·lar SIA opció 2

Download from:
https://github.com/NebulousLabs/Sia/releases


### Iniciar en mode explorer
```bash
$ cd /home/$USER/Sia/API/Sia-v1.3.1-linux-amd64
$ ./siad -M "cghmrtwe"

```

### Interacció

Una vegada iniciat el dimoni es pot interactuar amb la plataforma a través de la interface o a través del client siac amb comandes de l'estil:
```bash
$ ./siac --help
$ ./siac wallet
```
