'use strict';

/*
 * Obtains parameters from deployed stack resources
 * and saves them as JSON file.
 */

const fs = require('fs');

const provider = serverless.service.provider;
const awsProvider = serverless.getProvider('aws');

const listStackOutputs = async () => {
    const response = await awsProvider.request('CloudFormation', 'describeStacks', {
        StackName: awsProvider.naming.getStackName(),
    });

    return response.Stacks[0].Outputs;
}

const createConfig = stackOutputs => ({
    env: provider.stage,
    apiUrl: getOutputValue(stackOutputs, 'ServiceEndpoint'),
});

const getOutputValue = (stackOutputs, outputKey) => {
    return stackOutputs.find(o => o.OutputKey === outputKey).OutputValue || '';
};

const writeConfigFile = config => {
    fs.writeFileSync('./src/config.json', JSON.stringify(config));
};

listStackOutputs()
    .then(createConfig)
    .then(writeConfigFile);
