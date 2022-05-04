pipeline {
    agent any
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