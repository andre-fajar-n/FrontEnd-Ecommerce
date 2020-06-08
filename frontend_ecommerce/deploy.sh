sudo docker build -f "Dockerfile" -t andresangfajar/fe:$TRAVIS_BUILD_NUMBER .
sudo docker push andresangfajar/fe:$TRAVIS_BUILD_NUMBER

echo $GCLOUD_SERVICE_KEY_PRD | base64 --decode > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud container clusters get-credentials $CLUSTER_NAME_PRD --region $CLOUDSDK_COMPUTE_REGION --project $PROJECT_NAME_PRD

kubectl config view
kubectl config current-context

 ## deploy api server
kubectl -n alta6 set image deployment/fe-ecommerce fe-e-commerce=andresangfajar/fe:$TRAVIS_BUILD_NUMBER