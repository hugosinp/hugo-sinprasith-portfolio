import React, { useState } from 'react';

import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	Image,
	Tabs,
	Tag,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	HStack,
	VStack,
	List,
	ListItem,
	ListIcon, IconButton, useColorModeValue, Link,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

import { usEntreprises } from '../../static/data';
import {BsLinkedin} from "react-icons/bs";

const OEntrepriseSection = () => {
	const [tabIndex, setTabIndex] = useState(usEntreprises.length - 1);

	const handleTabsChange = (index) => {
		setTabIndex(index);
	};

	return (
		<Container maxW={'4xl'} py={{ base: 65, md: 30 }} align={'center'}>
			<Flex h={{ base: 'auto' }} direction={{ base: 'column' }} align={'center'}>
				<VStack>
					<Heading>
						Interested in{' '}
						<Text as="span" fontWeight={'extrabold'} bgClip="text" bgGradient="linear(to-r, #009DE4, #194BB5)">
							collaboration ?
						</Text>
					</Heading>
					<Heading size={'md'}>These companies have trusted me. Why not you ?</Heading>
					<Link href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" isExternal>
						<IconButton
							aria-label="linkedin"
							variant="ghost"
							size="lg"
							icon={<BsLinkedin size="32px" />}
							_hover={{
								bg: 'blue.500',
								color: useColorModeValue('white', 'gray.700'),
							}}
							isRound
						/>
					</Link>
					<Box pt={4}>
						<Tabs index={tabIndex} onChange={handleTabsChange} align={'center'}>
							<TabList>
								{usEntreprises.map((entreprise) => (
									<Tab key={entreprise.id} zIndex={0} fontWeight={'bold'}>
										{entreprise.name}
									</Tab>
								))}
							</TabList>
							<TabPanels>
								{usEntreprises.map((entreprise) => {
									return (
										<TabPanel key={entreprise.id}>
										<VStack spacing={3}>
											<HStack spacing={2}>
												<Heading size={'md'} py={5}>
													{entreprise.job}
												</Heading>
												<Image
													p={1}
													bg={'white'}
													borderRadius={'xl'}
													boxSize="50px"
													objectFit="contain"
													src={require(`../../static/img/${entreprise.image}.png`)}
													alt={entreprise.name}
												/>
											</HStack>
											<Heading size={'md'} color={'gray.500'}>
												{entreprise.date} / {entreprise.job_type}
											</Heading>
											<List spacing={3} py={2}>
												{entreprise.description.map((x) => (
													<ListItem textAlign={'left'} key={x.paragraph}>
														<ListIcon as={MdCheckCircle} color="green.500" />
														{x.paragraph}
													</ListItem>
												))}
											</List>
											<Container py={2}>
												{entreprise.tech.map((tech) => (
													<Tag key={tech.name} m={1} colorScheme="teal" textTransform={'uppercase'} letterSpacing={1.1}>
														{tech.name}
													</Tag>
												))}
											</Container>
										</VStack>
									</TabPanel>)
								})}
							</TabPanels>
						</Tabs>
					</Box>
				</VStack>
			</Flex>
		</Container>
	);
};

export default OEntrepriseSection;
