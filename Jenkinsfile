pipeline {
    agent any
    stages {
        stage("run frontend") {
            step {
                echo 'executing app'
                nodejs('Node_14.9.0') {
                    sh 'yarn install'
                }
            }
        }
    }
}