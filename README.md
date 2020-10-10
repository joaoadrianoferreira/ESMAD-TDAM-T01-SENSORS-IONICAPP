# DTAM - Sensores e Serviços Web

Aplicação em IONIC criada para demonstrar a manipulação e armazenamento de dados de sensores em ambientes móveis. Aplicação demonstrativa para a unidade curricular de Sensores e Serviços Web do 2º Ano do TESP de Design e Tecnologias para Aplicações Móveis da ESMAD - IPP. 

## Requesitos: 
 - NodeJS; 
 - Ionic;
 - Android Studio. 

## Instalação 

```sh
$ git clone https://github.com/joaoadrianoferreira/ESMAD-TDAM-T01-SENSORS-IONICAPP
$ cd ESMAD-TDAM-T01-SENSORS-IONICAPP/
$ npm install
$ ionic serve
```

Para teste e deploy em dispositivos android 

```sh
$ ionic capacitor update
$ ionic capacitor run android
```

Para build em dispositivos android 

```sh
$ ionic capacitor build android
```

## Nova Aplicação

Para criar uma nova aplicação: 

```sh
$ ionic start myapp tabs
$ ionic serve
$ ionic build 
## comando necessário para criar a pasta www 
```

Para teste e deploy em dispositivos android 

```sh
$ ionic capacitor run android 
## no caso de ser usado o capacitor poderá dar erro ao nível do "linuxAndroidStudioPath". É necessário colocar o link do SDK Android no ficheiro capacitor.config.json
```

Para build em dispositivos android 

```sh
$ ionic capacitor build android
```

## Autor
João Ferreira
