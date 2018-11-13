librdkafkaVersion = ''
# read librdkafka version from package.json
import json
with open('../package.json') as f:
    librdkafkaVersion = json.load(f)['librdkafka']
librdkafkaWinSufix = '7' if librdkafkaVersion == '0.11.5' else '';

depsPrecompiledDir = '../deps/precompiled'
depsIncludeDir = '../deps/include'
buildReleaseDir = 'Release'

# alternative: 'https://api.nuget.org/v3-flatcontainer/librdkafka.redist/{}/librdkafka.redist.{}.nupkg'.format(librdkafkaVersion, librdkafkaVersion)
librdkafkaNugetUrl = 'https://www.nuget.org/api/v2/package/librdkafka.redist/{}'.format(librdkafkaVersion)
outputDir = 'librdkafka.redist'
outputFile = outputDir + '.zip'
dllPath = outputDir + '/runtimes/win{}-x64/native'.format(librdkafkaWinSufix)
libPath = outputDir + '/build/native/lib/win{}/x64/win{}-x64-Release/v120'.format(librdkafkaWinSufix, librdkafkaWinSufix)
includePath = outputDir + '/build/native/include/librdkafka'

# download librdkafka frmo nuget
import urllib2
filedata = urllib2.urlopen(librdkafkaNugetUrl)
datatowrite = filedata.read()
with open(outputFile, 'wb') as f:
    f.write(datatowrite)

# extract package
import zipfile
zip_ref = zipfile.ZipFile(outputFile, 'r')
zip_ref.extractall(outputDir)
zip_ref.close()

# copy files
import shutil, os, errno

def createdir(dir):
    try:
        os.makedirs(dir)
    except OSError as e:
        if errno.EEXIST != e.errno:
            raise

createdir(depsPrecompiledDir)
createdir(depsIncludeDir)
createdir(buildReleaseDir)

shutil.copy2(libPath + '/librdkafka.lib', depsPrecompiledDir)
shutil.copy2(libPath + '/librdkafkacpp.lib', depsPrecompiledDir)

shutil.copy2(includePath + '/rdkafka.h', depsIncludeDir)
shutil.copy2(includePath + '/rdkafkacpp.h', depsIncludeDir)

shutil.copy2(dllPath + '/zlib.dll', buildReleaseDir)
shutil.copy2(dllPath + '/msvcr120.dll', buildReleaseDir)
shutil.copy2(dllPath + '/librdkafka.dll', buildReleaseDir)
shutil.copy2(dllPath + '/librdkafkacpp.dll', buildReleaseDir)

# clean up
os.remove(outputFile)
shutil.rmtree(outputDir)
