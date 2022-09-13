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
	ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

import { usEntreprises } from '../../static/data';

const OEntrepriseSection = () => {
	const [tabIndex, setTabIndex] = useState(usEntreprises.length - 1);

	const handleSliderChange = (event) => {
		setTabIndex(parseInt(event.target.value, 10));
	};

	const handleTabsChange = (index) => {
		setTabIndex(index);
	};

	return (
		<Container maxW={'4xl'} py={{ base: 65, md: 30 }} align={'center'}>
			<Flex h={{ base: 'auto' }} direction={{ base: 'column' }} align={'center'}>
				<VStack>
					<Heading>
						Interested in{' '}
						<Text as="span" fontWeight={'extrabold'} bgClip="text" bgGradient="linear(to-r, #4DB8FF, #19A3FF)">
							collaboration ?
						</Text>
					</Heading>
					<Heading size={'md'}>These companies have trusted me. Why not you ?</Heading>

					<Box pt={10}>
						<input type="range" min="0" max={usEntreprises.length - 1} value={tabIndex} onChange={handleSliderChange} />
						<Tabs index={tabIndex} onChange={handleTabsChange} align={'center'}>
							<TabList>
								{usEntreprises.map((entreprise) => (
									<Tab key={entreprise.id} zIndex={0} fontWeight={'bold'}>
										{entreprise.name}
									</Tab>
								))}
							</TabList>
							<TabPanels>
								{usEntreprises.map((entreprise) => (
									<TabPanel key={entreprise.id}>
										<VStack spacing={3}>
											<HStack spacing={2}>
												<Heading size={'md'} py={5}>
													{entreprise.job}
												</Heading>
												<Image
													borderRadius="full"
													boxSize="50px"
													objectFit="fill"
													src={entreprise.image}
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
									</TabPanel>
								))}
							</TabPanels>
						</Tabs>
					</Box>
				</VStack>
			</Flex>
		</Container>
	);
};

export default OEntrepriseSection;
