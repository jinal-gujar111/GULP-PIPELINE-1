pipeline {
    agent any
    tools {
        nodejs "NodeJS"
        git 'Default' // Use 'Default' for the default Git installation
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'npm install'
                    
                    // Run Gulp tasks
                    sh 'gulp welcome-message'
                    sh 'gulp copy_file'
                    sh 'gulp babelTest'
                    sh 'gulp styles'
                    
                      // Configure Git user
                    sh 'git config --global user.email "jinalgujar0328@gmail.com"'
                    sh 'git config --global user.name "Jinal"'
                    
                    // Commit artifacts to the repository
                    sh 'git add dist'
                    sh 'git commit -m "Add build artifacts" || true'
                    
                    // Push changes to the repository
                    sh 'git push https://github.com/jinal-gujar111/GULP-PIPELINE-1.git HEAD:main'
                }
            }
            post {
                success {
                    archiveArtifacts 'dist/**/*'
                }
            }
        }

        stage('Gulp') {
            steps {
                script {
                    echo 'Installing Gulp globally...'
                    sh 'npm install -g gulp'
                    echo 'Running Gulp tasks...'
                    sh 'gulp welcome-message'
                    sh 'gulp copy_file'
                    sh 'gulp babelTest'
                    sh 'gulp styles'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'No tests specified, skipping...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add deployment steps if needed
                sh 'npm start &'
            }
        }
    }
}
