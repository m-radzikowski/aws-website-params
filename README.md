# Auto-generating website environment parameters

Example of a website automatically built and deployed to AWS S3 Bucket
with resolved parameters for current environment API Gateway URL. 

See the article with full description:
[Auto-generated website environment parameters](https://betterdev.blog/auto-generated-website-environment-parameters/)

## Development

Install dependencies:

```bash
yarn install
```

Deploy:

```bash
yarn run deploy --region REGION [--stage STAGE]
```

Run website locally:

```bash
yarn run start
```

It will start the development server at http://localhost:8080.

The service must be deployed first to run website locally.
Local website connects to the deployed AWS services.

Remove deployed stack:

```bash
yarn run remove --region REGION [--stage STAGE]
```
