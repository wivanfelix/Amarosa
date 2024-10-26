pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Asegúrate de tener NodeJS configurado en Jenkins
        sonarQube 'SonarQube Scanner'  // Nombre de la herramienta SonarQube Scanner configurada en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio de GitHub
                git url: 'https://github.com/wivanfelix/Amarosa.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Instala las dependencias de Node.js
                sh 'npm install'
                sh 'npx prisma db pull'
                sh 'npx prisma generate'
            }
        }
        
        stage('Build') {
            steps {
                // Ejecuta el proceso de build, si aplica
                //sh 'npm run build'  // Ajusta este comando si tu proyecto usa otro script para construir
            }
        }
        
        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQube Scanner' // Herramienta SonarQube Scanner configurada en Jenkins
            }
            steps {
                // Ejecuta el análisis de SonarQube
                withSonarQubeEnv('SonarQube Server') {  // Utiliza el nombre del servidor SonarQube configurado en Jenkins
                    sh "${scannerHome}/bin/sonar-scanner \
                       -Dsonar.projectKey=tu_proyecto_nodejs \
                       -Dsonar.sources=. \
                       -Dsonar.host.url=http://localhost:9000 \
                       -Dsonar.login=tu_token_sonarqube" // Token de autenticación SonarQube
                }
            }
        }
        
        stage('Post Build') {
            steps {
                echo "Build and SonarQube analysis completed!"
            }
        }
    }
}
