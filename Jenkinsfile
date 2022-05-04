pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run start'
            }
        }
    }
}