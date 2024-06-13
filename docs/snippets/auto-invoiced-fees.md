
Invoice items are automatically generated when any of the following fees are implemented.

| Fee | Description | Implementation |
| --- | ----------- | -------------- |
| Version fee | Collect a fee for any version of the application functionality. | Implement in each `domain.version`. |
| User fee | Collect a fee for each account user. | Implement in each `domain.version`. |
|  Optional feature fee | Collect a fee for any feature designated as `optional`. | Implement in each `domain.version.features`. |
